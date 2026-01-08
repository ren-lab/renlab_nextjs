import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, markdownToHtml } from '@/lib/markdown';
import { format } from 'date-fns';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const newsPosts = await import('@/lib/markdown').then(m => m.getAllNewsPosts());
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsPostPage({ params }: PageProps) {
  const post = getPostBySlug('news', params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            {post.subheadline && <p className="subheadline">{post.subheadline}</p>}
            <h1>{post.title}</h1>
            {post.date && (
              <p>
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </p>
            )}
          </header>

          {post.image && post.image.title && (
            <Image
              src={`../../images/${post.image.title}`}
              alt={post.image.title}
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
            />
          )}

          {post.teaser && <p className="teaser">{post.teaser}</p>}

          <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <p>
            <Link href="/news/">← Back to News</Link>
          </p>
        </article>
      </div>
    </div>
  );
}

