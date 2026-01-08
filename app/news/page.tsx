import Link from 'next/link';
import { getAllNewsPosts } from '@/lib/markdown';
import { format } from 'date-fns';

export const metadata = {
  title: 'News',
  description: 'Latest news from RENLAB',
};

export default async function NewsPage() {
  const newsPosts = getAllNewsPosts();

  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>News</h1>
          </header>

          <div className="news-list">
            {newsPosts.map((post) => (
              <article key={post.slug} style={{ marginBottom: '3rem' }}>
                <header>
                  <h2>
                    <Link href={`/news/${post.slug}/`}>{post.title}</Link>
                  </h2>
                  {post.date && (
                    <p>
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                    </p>
                  )}
                  {post.subheadline && <p className="subheadline">{post.subheadline}</p>}
                </header>
                
                {post.teaser && <p>{post.teaser}</p>}
                
                {post.image && post.image.thumb && (
                  <img
                    src={`images/${post.image.thumb}`}
                    alt={post.image.title || post.title}
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                )}
                
                <p>
                  <Link href={`/news/${post.slug}/`}>Read more ›</Link>
                </p>
              </article>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

