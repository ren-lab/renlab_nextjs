import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div id="masthead">
        <div className="row">
          <div className="small-12 columns">
            <Image
              src="images/ludwig_Ren_Lab.jpg"
              alt="RENLAB"
              width={1200}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>

      <div className="row t30">
      <div className="medium-4 columns">
        <article>
          <header>
            <h2>
              <Link href="/research/#identifying-the-transcriptional-regulatory-sequences-in-genomes">
                Identifying the transcriptional regulatory sequences in genomes
              </Link>
            </h2>
          </header>
          <p>
            With the rapid advances in sequencing technologies, obtaining the genome sequences of an individual
            organism is no longer rate limiting. Instead, identifying the functional elements throughout the
            genome has become a major bottleneck.
          </p>
          <p>
            <Link href="/research/#identifying-the-transcriptional-regulatory-sequences-in-genomes">
              Read more ›
            </Link>
          </p>
        </article>
      </div>

      <div className="medium-4 columns">
        <article>
          <header>
            <h2>
              <Link href="/research/#epigenetic-mechanisms-regulating-pluripotency-and-lineage-commitment">
                Epigenetic mechanisms regulating pluripotency and lineage commitment
              </Link>
            </h2>
          </header>
          <p>
            We have generated comprehensive epigenome maps for the human embryonic stem cells (ESC), fibroblasts
            and a number of ES cell derived cell types. Analysis of these epigenomic profiles has revealed
            dramatic differences of DNA methylomes and chromatin landscapes between the pluripotent and
            lineage-committed cell types.
          </p>
          <p>
            <Link href="/research/#epigenetic-mechanisms-regulating-pluripotency-and-lineage-commitment">
              Read more ›
            </Link>
          </p>
        </article>
      </div>

      <div className="medium-4 columns">
        <article>
          <header>
            <h2>
              <Link href="/research/#higher-order-genome-architecture">
                Higher-order genome architecture
              </Link>
            </h2>
          </header>
          <p>
            Higher-order chromatin architecture is emerging as an important regulator of diverse nuclear
            processes, from gene regulation to DNA replication. Recent methodological advancements have allowed,
            for the first time, the ability to interrogate higher-order chromatin interactions on a genome-wide
            scale.
          </p>
          <p>
            <Link href="/research/#higher-order-genome-architecture">Read more ›</Link>
          </p>
        </article>
      </div>
    </div>
    </>
  );
}

