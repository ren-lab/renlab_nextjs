import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

// Posts directory - adjust path based on where Next.js is running from
// If running from nextjs/ directory, go up one level to find _posts
const postsDirectory = path.join(process.cwd(), '_posts');

/**
 * Recursively convert Date objects to strings in an object
 */
function convertDatesToStrings(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj;
  }
  
  if (obj instanceof Date) {
    // Return just the year for publication dates, or full ISO string for other dates
    return obj.getFullYear().toString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => convertDatesToStrings(item));
  }
  
  if (typeof obj === 'object') {
    const converted: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        converted[key] = convertDatesToStrings(obj[key]);
      }
    }
    return converted;
  }
  
  return obj;
}

export interface PostData {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  content: string;
  categories?: string[];
  author?: string;
  [key: string]: any; // For custom frontmatter fields
}

export interface PublicationData extends PostData {
  pub?: {
    authors: string;
    journal: string;
    date: string;
    doi?: string;
    abstract?: string;
  };
  authors?: string;
  journal?: string;
  doi?: string;
  abstract?: string;
}

/**
 * Parse markdown file with frontmatter
 * Handles both --- and -- style frontmatter delimiters
 */
function parseMarkdownFile(filePath: string): { data: any; content: string } {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Try standard frontmatter first
  try {
    const { data, content } = matter(fileContents);
    // Convert any Date objects to strings
    return { data: convertDatesToStrings(data), content };
  } catch {
    // If that fails, try to handle -- style frontmatter
    if (fileContents.startsWith('--\n')) {
      const endIndex = fileContents.indexOf('\n--\n');
      if (endIndex !== -1) {
        const frontmatter = fileContents.substring(3, endIndex);
        const content = fileContents.substring(endIndex + 4);
        
        // Simple YAML-like parsing for -- style
        const data: any = {};
        const lines = frontmatter.split('\n');
        let currentKey = '';
        
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          
          if (trimmed.includes(':')) {
            const [key, ...valueParts] = trimmed.split(':');
            currentKey = key.trim();
            const value = valueParts.join(':').trim();
            data[currentKey] = value.replace(/^["']|["']$/g, ''); // Remove quotes
          } else if (currentKey && trimmed.startsWith('-')) {
            // Handle array items
            if (!Array.isArray(data[currentKey])) {
              data[currentKey] = [];
            }
            data[currentKey].push(trimmed.substring(1).trim().replace(/^["']|["']$/g, ''));
          } else if (currentKey && trimmed.startsWith('##')) {
            // Comment, skip
            continue;
          } else if (currentKey && data[currentKey]) {
            // Continue previous value
            data[currentKey] += ' ' + trimmed;
          }
        }
        
        return { data, content };
      }
    }
    
    // Fallback: no frontmatter
    return { data: {}, content: fileContents };
  }
}

/**
 * Get all posts from a directory
 */
export function getAllPosts(category: string): PostData[] {
  const categoryDir = path.join(postsDirectory, category);
  
  if (!fs.existsSync(categoryDir)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(categoryDir);
  const allPostsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(categoryDir, fileName);
      const { data, content } = parseMarkdownFile(filePath);
      
      // Generate slug from filename
      const slug = fileName.replace(/\.md$/, '');
      
      // Ensure date is a string (gray-matter might parse it as Date object)
      const dateValue = data.date instanceof Date 
        ? data.date.toISOString().split('T')[0] 
        : data.date 
          ? String(data.date) 
          : '';
      
      return {
        slug,
        title: data.title || slug,
        date: dateValue,
        excerpt: data.excerpt || '',
        content,
        categories: data.categories || [category],
        ...data,
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  
  return allPostsData;
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(category: string, slug: string): PostData | null {
  const filePath = path.join(postsDirectory, category, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const { data, content } = parseMarkdownFile(filePath);
  
      // Ensure date is a string (gray-matter might parse it as Date object)
      const dateValue = data.date instanceof Date 
        ? data.date.toISOString().split('T')[0] 
        : data.date 
          ? String(data.date) 
          : '';
      
      // Process nested pub object if it exists
      let processedData = { ...data };
      if (processedData.pub && processedData.pub.date instanceof Date) {
        processedData.pub = {
          ...processedData.pub,
          date: processedData.pub.date.getFullYear().toString(),
        };
      }
      
      return {
        slug,
        title: data.title || slug,
        date: dateValue,
        excerpt: data.excerpt || '',
        content,
        categories: data.categories || [category],
        ...processedData,
      };
}

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html).process(markdown);
  return result.toString();
}

/**
 * Get all publications
 */
export function getAllPublications(): PublicationData[] {
  return getAllPosts('publications') as PublicationData[];
}

/**
 * Get all news posts
 */
export function getAllNewsPosts(): PostData[] {
  return getAllPosts('news');
}

