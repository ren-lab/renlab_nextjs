# Migration Guide: Jekyll to Next.js

This guide will help you complete the migration from Jekyll to Next.js.

## Current Status

✅ **Completed:**
- Next.js project setup with TypeScript
- Core components (Navigation, Masthead, Footer, Layout)
- Data files converted (navigation, labmembers, alumni, socialmedia)
- Home page
- Team page
- Research page
- Contact page
- Download page
- Publications listing and detail pages
- News listing and detail pages
- Markdown processing utilities

⏳ **Remaining:**
- Copy static assets (CSS, JS, images)
- Test and fix any issues
- Migrate remaining pages if needed
- Update styles if needed

## Setup Instructions

### 1. Install Dependencies

```bash
cd nextjs
npm install
```

### 2. Copy Static Assets

You need to copy static assets from your Jekyll build or source:

```bash
# From the project root
# Copy images
mkdir -p nextjs/public/images
cp -r images/* nextjs/public/images/

# Copy CSS and JS (from Jekyll build)
mkdir -p nextjs/public/assets/css
mkdir -p nextjs/public/assets/js
mkdir -p nextjs/public/assets/img

# Copy from Jekyll _site output or build
cp _site/assets/css/* nextjs/public/assets/css/
cp _site/assets/js/* nextjs/public/assets/js/
cp -r assets/img/* nextjs/public/assets/img/
cp -r assets/fonts nextjs/public/assets/ 2>/dev/null || true

# Copy download files
mkdir -p nextjs/public/download_files
cp -r download_files/* nextjs/public/download_files/
```

### 3. Update Path References

The markdown processing utility expects posts to be in `../_posts/` relative to the Next.js directory. Make sure the path is correct:

- Posts should be in: `_posts/publications/`, `_posts/news/`, etc.
- Adjust the path in `lib/markdown.ts` if your structure is different

### 4. Test Development Server

```bash
cd nextjs
npm run dev
```

Visit http://localhost:3000 and check:
- Home page loads
- Navigation works
- Team page displays correctly
- Publications page lists posts
- News page lists posts
- Individual publication/news pages load

### 5. Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, similar to Jekyll's `_site/` directory.

## File Structure

```
nextjs/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── team/
│   ├── research/
│   ├── contact/
│   ├── download/
│   ├── publication/
│   │   ├── page.tsx         # Publications listing
│   │   └── [slug]/          # Individual publication
│   └── news/
│       ├── page.tsx         # News listing
│       └── [slug]/          # Individual news post
├── components/              # React components
│   ├── Navigation.tsx
│   ├── Masthead.tsx
│   ├── Footer.tsx
│   └── Head.tsx
├── data/                    # TypeScript data files
│   ├── navigation.ts
│   ├── labmembers.ts
│   ├── alumni.ts
│   └── socialmedia.ts
├── lib/                     # Utilities
│   ├── siteConfig.ts
│   └── markdown.ts
├── types/                   # TypeScript types
│   └── index.ts
├── styles/                  # Global styles
│   └── globals.scss
└── public/                  # Static assets
    ├── assets/
    ├── images/
    └── download_files/
```

## Key Differences from Jekyll

1. **Routing**: Uses Next.js App Router instead of Jekyll's file-based routing
2. **Frontmatter**: Posts are processed at build time, not dynamically
3. **Components**: React components instead of Liquid includes
4. **Data**: TypeScript files instead of YAML
5. **Styling**: Can use SCSS modules, CSS modules, or continue with global CSS

## Troubleshooting

### Posts not loading?
- Check that `_posts/` directory is accessible from `nextjs/` directory
- Verify file paths in `lib/markdown.ts`

### Styles not loading?
- Ensure CSS files are in `public/assets/css/`
- Check that paths in layout match your asset structure

### Images not displaying?
- Verify images are in `public/images/`
- Check image paths in your content match the public directory structure

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run build`
- Verify all imports are correct

## Next Steps

1. **Content Migration**: Ensure all posts are accessible and rendering correctly
2. **Style Refinement**: Adjust styles as needed or convert to CSS modules
3. **Testing**: Test all pages and links thoroughly
4. **SEO**: Verify meta tags and structured data if needed
5. **Deployment**: Deploy to your hosting platform (Vercel, Netlify, or static hosting)

## Deployment Options

### Static Export (Current Setup)
The project is configured for static export (`output: 'export'`):
- Works with any static hosting
- Can deploy to GitHub Pages, Netlify, Vercel, etc.
- No server required

### Vercel/Netlify
You can deploy directly:
```bash
# Vercel
vercel

# Netlify
netlify deploy
```

The build process will automatically generate static files.

## Questions or Issues?

If you encounter issues during migration:
1. Check the Next.js documentation
2. Review the error messages
3. Verify file paths and structures match expectations
4. Test individual components in isolation

