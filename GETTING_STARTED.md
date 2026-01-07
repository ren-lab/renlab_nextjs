# Getting Started with Next.js Migration

## ✅ What's Been Done

Your Jekyll website has been successfully migrated to Next.js! Here's what's included:

### Core Setup
- ✅ Next.js 14 with TypeScript configured
- ✅ Static export mode (matches Jekyll's behavior)
- ✅ All data files converted (navigation, labmembers, alumni, socialmedia)
- ✅ Site configuration migrated

### Components
- ✅ Navigation component (responsive, with dropdowns)
- ✅ Masthead/Header component
- ✅ Footer component
- ✅ Root layout

### Pages
- ✅ Home page (with research widgets)
- ✅ Team page (with current members and alumni tables)
- ✅ Research page (with all research areas)
- ✅ Contact page
- ✅ Download page
- ✅ Publications listing page
- ✅ Individual publication pages (dynamic routes)
- ✅ News listing page
- ✅ Individual news post pages (dynamic routes)

### Utilities
- ✅ Markdown processing (handles both `---` and `--` frontmatter)
- ✅ Publication and news post processing
- ✅ Static site generation for all pages

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd nextjs
npm install
```

### 2. Copy Static Assets

Run the provided script to copy assets:

```bash
./scripts/copy-assets.sh
```

Or manually copy:
- Images: `images/*` → `nextjs/public/images/`
- CSS/JS: `_site/assets/*` → `nextjs/public/assets/`
- Downloads: `download_files/*` → `nextjs/public/download_files/`

### 3. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production

```bash
npm run build
```

This creates static files in the `out/` directory.

## 📁 Project Structure

```
nextjs/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Home
│   ├── team/
│   ├── research/
│   ├── contact/
│   ├── download/
│   ├── publication/       # Publications
│   └── news/              # News/Blog
├── components/            # React components
├── data/                  # TypeScript data
├── lib/                   # Utilities
│   ├── siteConfig.ts     # Site settings
│   └── markdown.ts       # Markdown processor
├── types/                 # TypeScript types
└── public/                # Static assets
```

## 🔧 Configuration

### Site Settings
Edit `lib/siteConfig.ts` to update:
- Site title, description
- URLs
- Social media links
- Analytics IDs

### Navigation
Edit `data/navigation.ts` to add/remove menu items.

### Data Files
- Team members: `data/labmembers.ts`
- Alumni: `data/alumni.ts`
- Social media: `data/socialmedia.ts`

## 📝 Adding New Content

### New Publication
1. Create a markdown file in `_posts/publications/`
2. Use frontmatter:
   ```yaml
   ---
   title: "Paper Title"
   authors: "Author List"
   journal: "Journal Name"
   date: 2024
   doi: "https://doi.org/..."
   abstract: "Abstract text"
   ---
   ```
3. Rebuild: `npm run build`

### New News Post
1. Create a markdown file in `_posts/news/`
2. Use frontmatter:
   ```yaml
   ---
   title: "News Title"
   date: 2024-01-01
   teaser: "Short description"
   ---
   Content here...
   ```
3. Rebuild: `npm run build`

## 🎨 Styling

Currently uses existing Jekyll CSS. To customize:

1. **Keep existing styles**: Copy compiled CSS to `public/assets/css/`
2. **Use CSS modules**: Create `.module.css` files
3. **Use Tailwind CSS**: Install and configure Tailwind
4. **Use SCSS**: Already configured, just add `.scss` files

## 🚢 Deployment

### Static Hosting (GitHub Pages, Netlify, Vercel)
```bash
npm run build
# Deploy the `out/` directory
```

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## ⚠️ Important Notes

1. **Posts Path**: The markdown processor looks for posts in `../_posts/` relative to the Next.js directory. Adjust in `lib/markdown.ts` if needed.

2. **Image Paths**: Make sure images are in `public/images/` and referenced correctly in content.

3. **Asset Paths**: CSS and JS should be in `public/assets/` and match the paths in your layout.

4. **Build Time**: All pages are generated at build time (static site generation), just like Jekyll.

## 🐛 Troubleshooting

### Posts not showing?
- Check that `_posts/` directory is accessible
- Verify markdown file format
- Check console for errors

### Styles not loading?
- Ensure CSS files are in `public/assets/css/`
- Check browser console for 404 errors
- Verify paths in layout.tsx

### Build errors?
- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors
- Verify all imports are correct

## 📚 Next Steps

1. ✅ Copy and test all assets
2. ✅ Verify all pages work correctly
3. ✅ Test responsive design
4. ✅ Check all links
5. ✅ Deploy to staging/production
6. (Optional) Enhance with React features (search, filters, etc.)

## 💡 Future Enhancements

Once the basic migration is working, you can add:
- Client-side search functionality
- Publication filtering/sorting
- Interactive data visualizations
- Progressive Web App features
- Enhanced animations
- Real-time updates

## 📖 Documentation

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

---

**Need Help?** Check `MIGRATION.md` for detailed migration information.

