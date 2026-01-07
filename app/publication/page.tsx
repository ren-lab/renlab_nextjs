import Link from 'next/link';
import { getAllPublications } from '@/lib/markdown';

export const metadata = {
  title: 'Publications',
  description: 'List of publications from RENLAB',
};

export default async function PublicationsPage() {
  const publications = getAllPublications();

  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>Publications</h1>
          </header>

          <p>
            <a href="https://scholar.google.com/citations?hl=en&user=XU7ZT5kAAAAJ" target="_blank" rel="noopener noreferrer">
              For a complete list of Bing Ren&apos;s publications, click here.
            </a>
          </p>
          <p>
            <Link href="/publication/preprint/">For preprints, please click here.</Link>
          </p>
          <p>
            Below is a list of representative peer-reviewed publications. (*equal contribution. <sup>#</sup>co-correspondence.)
          </p>

          <div className="publications-list">
            {publications.map((pub) => {
              const pubData = pub.pub || pub;
              const authors = pubData.authors || '';
              const journal = pubData.journal || '';
              // Ensure date is a string (handle Date objects)
              const date = pubData.date ? new Date(pubData.date).getFullYear().toString() : '';            
              const doi = pubData.doi || '';
              const abstract = pubData.abstract || '';

              return (
                <div key={pub.slug} className="publication-item" style={{ marginBottom: '2rem' }}>
                  <h3>
                    <Link href={`/publication/${pub.slug}/`}>{pub.title}</Link>
                  </h3>
                  <p>
                    <strong>Authors:</strong> {authors}
                  </p>
                  <p>
                    <strong>Journal:</strong> {journal} ({date})
                  </p>
                  {doi && (
                    <p>
                      <strong>DOI:</strong>{' '}
                      <a href={doi} target="_blank" rel="noopener noreferrer">
                        {doi}
                      </a>
                    </p>
                  )}
                  {abstract && (
                    <p>
                      <strong>Abstract:</strong> {abstract}
                    </p>
                  )}
                  <p>
                    <Link href={`/publication/${pub.slug}/`}>Read more ›</Link>
                  </p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}

