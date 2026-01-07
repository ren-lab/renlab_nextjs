# RENLAB Next.js Website

This is the Next.js migration of the RENLAB Jekyll website.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
cd nextjs
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out/` directory (static export).

### Migration Status

- ✅ Next.js project setup
- ✅ TypeScript configuration
- ✅ Data files converted (navigation, labmembers, alumni, socialmedia)
- ✅ Core components (Navigation, Masthead, Footer, Layout)
- ✅ Home page
- ✅ Team page
- ⏳ Publications pages (in progress)
- ⏳ Blog/News pages (in progress)
- ⏳ Markdown processing for posts
- ⏳ Styles migration
- ⏳ Dynamic routes for publications and posts

## Project Structure

```
nextjs/
├── app/                  # Next.js 13+ App Router pages
├── components/           # React components
├── data/                # TypeScript data files (converted from YAML)
├── lib/                 # Utility functions and config
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── public/              # Static assets (images, etc.)
```

## Notes

- This is a static export setup (`output: 'export'`) to match Jekyll's behavior
- Images should be copied to `public/images/` directory
- CSS from Jekyll build should be copied to `public/assets/css/` initially
- JavaScript from Jekyll should be copied to `public/assets/js/`

## Next Steps

1. Copy static assets (images, CSS, JS) from Jekyll `_site/` to `public/`
2. Set up markdown processing for posts and publications
3. Create dynamic routes for publications and blog posts
4. Migrate remaining pages (research, contact, download, etc.)
5. Convert SCSS files to CSS modules or continue using global SCSS
6. Test and refine

