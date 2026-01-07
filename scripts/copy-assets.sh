#!/bin/bash
# Script to copy static assets from Jekyll to Next.js

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Copying assets from Jekyll to Next.js...${NC}"

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
NEXTJS_DIR="$PROJECT_ROOT/nextjs"
JEKYLL_ROOT="$(dirname "$PROJECT_ROOT")"

# Create directories if they don't exist
mkdir -p "$NEXTJS_DIR/public/images"
mkdir -p "$NEXTJS_DIR/public/assets/css"
mkdir -p "$NEXTJS_DIR/public/assets/js"
mkdir -p "$NEXTJS_DIR/public/assets/img"
mkdir -p "$NEXTJS_DIR/public/download_files"

# Copy images
if [ -d "$PROJECT_ROOT/images" ]; then
  echo -e "${YELLOW}Copying images...${NC}"
  cp -r "$PROJECT_ROOT/images"/* "$NEXTJS_DIR/public/images/" 2>/dev/null || true
fi

# Copy assets from Jekyll _site (if it exists)
if [ -d "$PROJECT_ROOT/_site/assets" ]; then
  echo -e "${YELLOW}Copying assets from _site...${NC}"
  cp -r "$PROJECT_ROOT/_site/assets"/* "$NEXTJS_DIR/public/assets/" 2>/dev/null || true
fi

# Copy assets from source assets directory
if [ -d "$PROJECT_ROOT/assets" ]; then
  echo -e "${YELLOW}Copying assets from source...${NC}"
  cp -r "$PROJECT_ROOT/assets"/* "$NEXTJS_DIR/public/assets/" 2>/dev/null || true
fi

# Copy download files
if [ -d "$PROJECT_ROOT/download_files" ]; then
  echo -e "${YELLOW}Copying download files...${NC}"
  cp -r "$PROJECT_ROOT/download_files"/* "$NEXTJS_DIR/public/download_files/" 2>/dev/null || true
fi

# Copy compiled CSS if it exists
if [ -f "$PROJECT_ROOT/_site/assets/css/styles_feeling_responsive.css" ]; then
  echo -e "${YELLOW}Copying compiled CSS...${NC}"
  mkdir -p "$NEXTJS_DIR/public/assets/css"
  cp "$PROJECT_ROOT/_site/assets/css/styles_feeling_responsive.css" "$NEXTJS_DIR/public/assets/css/" 2>/dev/null || true
fi

# Copy JS files
if [ -d "$PROJECT_ROOT/_site/assets/js" ]; then
  echo -e "${YELLOW}Copying JavaScript files...${NC}"
  cp -r "$PROJECT_ROOT/_site/assets/js"/* "$NEXTJS_DIR/public/assets/js/" 2>/dev/null || true
fi

echo -e "${GREEN}Done! Assets copied to nextjs/public/${NC}"
echo -e "${YELLOW}Note: You may need to adjust paths in your code if the structure differs.${NC}"

