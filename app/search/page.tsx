'use client';

import { siteConfig } from '@/lib/siteConfig';

export default function SearchPage() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get('query') as string;
    
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}+site:${siteConfig.url}${siteConfig.baseUrl}`;
      window.open(searchUrl, '_blank');
    }
  };

  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>Search</h1>
          </header>

          <div className="search-container">
            <form id="search" onSubmit={handleSearch}>
              <input
                type="text"
                id="google-search"
                name="query"
                placeholder="Enter search term and hit enter"
              />
              <button type="submit">Search</button>
            </form>
            <noscript>
              <p>
                Search{' '}
                <a
                  href={`https://www.google.com/search?q=site:${siteConfig.url}${siteConfig.baseUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>{' '}
                for:
              </p>
              <pre>
                <code>search-term site:{siteConfig.url}{siteConfig.baseUrl}</code>
              </pre>
            </noscript>
          </div>
        </article>
      </div>
    </div>
  );
}

