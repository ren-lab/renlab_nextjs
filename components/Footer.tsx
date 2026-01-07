import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { socialMedia } from '@/data/socialmedia';

export default function Footer() {
  return (
    <>
      <div id="up-to-top" className="row">
        <div className="small-12 columns" style={{ textAlign: 'right' }}>
          <a className="iconfont" href="#top-of-page">
            &#xf108;
          </a>
        </div>
      </div>

      <footer id="footer-content" className="bg-grau">
        <div id="subfooter">
          <nav className="row">
            <section id="subfooter-left" className="small-12 medium-6 columns credits">
              <div dangerouslySetInnerHTML={{ __html: siteConfig.credits }} />
            </section>

            <section id="subfooter-right" className="small-12 medium-6 columns">
              <ul className="inline-list social-icons">
                {socialMedia.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={item.class}
                      title={item.title}
                    ></a>
                  </li>
                ))}
              </ul>
            </section>
          </nav>
        </div>
      </footer>
    </>
  );
}

