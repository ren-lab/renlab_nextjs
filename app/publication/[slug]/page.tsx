import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, markdownToHtml } from '@/lib/markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const publications = await import('@/lib/markdown').then(m => m.getAllPublications());
  return publications.map((pub) => ({
    slug: pub.slug,
  }));
}

export default async function PublicationPage({ params }: PageProps) {
  const publication = getPostBySlug('publications', params.slug);

  if (!publication) {
    notFound();
  }

  const contentHtml = await markdownToHtml(publication.content);
  const pubData = publication.pub || publication;

  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>{publication.title}</h1>
          </header>

          <div className="publication-details">
            <p>
              <strong>Authors:</strong> {pubData.authors || ''}
            </p>
            <p>
              <strong>Journal:</strong> {pubData.journal || ''}{' '}
              ({pubData.date instanceof Date 
                ? pubData.date.getFullYear().toString()
                : pubData.date 
                  ? String(pubData.date) 
                  : ''})
            </p>
            {pubData.doi && (
              <p>
                <strong>DOI:</strong>{' '}
                <a href={pubData.doi} target="_blank" rel="noopener noreferrer">
                  {pubData.doi}
                </a>
              </p>
            )}
            {pubData.abstract && (
              <div>
                <strong>Abstract:</strong>
                <p>{pubData.abstract}</p>
              </div>
            )}
          </div>

          <div
            className="publication-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <p>
            <Link href="/publication/">← Back to Publications</Link>
          </p>
        </article>
      </div>
    </div>
  );
}

