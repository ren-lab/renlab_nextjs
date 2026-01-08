import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

interface MastheadProps {
  header?: {
    image_fullwidth?: string;
    pattern?: string;
    background_color?: string;
    title?: string;
    caption?: string;
    caption_url?: string;
  };
}

export default function Masthead({ header }: MastheadProps) {
  // No header or no header properties
  if (!header || (!header.image_fullwidth && !header.pattern && !header.background_color && !header.title)) {
    return (
      <div id="masthead-no-image-header">
        <div className="row">
          <div className="small-12 columns">
            <Link id="logo" href="/" title={`${siteConfig.title} – ${siteConfig.slogan}`}>
              <Image src={siteConfig.logo} alt={`${siteConfig.title} – ${siteConfig.slogan}`} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Header with title text
  if (header.title) {
    const style: React.CSSProperties = {};
    if (header.background_color) {
      style.background = header.background_color;
    } else if (header.pattern) {
      style.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('${header.pattern}')`;
    }

    return (
      <>
        <div id="masthead-with-text" style={style}>
          <div className="row">
            <div className="small-12 columns">
              <div className="masthead-title">{header.title}</div>
            </div>
          </div>
        </div>
        {header.caption && (
          <div className="masthead-caption">
            {header.caption_url ? (
              <a href={header.caption_url}>{header.caption}</a>
            ) : (
              header.caption
            )}
          </div>
        )}
      </>
    );
  }

  // Header with full-width image
  if (header.image_fullwidth) {
    return (
      <>
        <div id="masthead">
          <div className="row">
            <div className="small-12 columns">
              <Link id="logo" href="/" title={`${siteConfig.title} – ${siteConfig.slogan}`}>
                <Image src={siteConfig.logo} alt={`${siteConfig.title} – ${siteConfig.slogan}`} />
              </Link>
            </div>
          </div>
        </div>
        {header.caption && (
          <div className="masthead-caption">
            {header.caption_url ? (
              <a href={header.caption_url}>{header.caption}</a>
            ) : (
              header.caption
            )}
          </div>
        )}
      </>
    );
  }

  // Header with pattern
  if (header.pattern) {
    return (
      <>
        <div id="masthead-with-pattern" style={{ background: `url('${header.pattern}')` }}>
          <div className="row">
            <figure className="small-12 columns">
              <Image src={header.pattern} alt={siteConfig.title} />
            </figure>
          </div>
        </div>
        {header.caption && (
          <div className="masthead-caption">
            {header.caption_url ? (
              <a href={header.caption_url}>{header.caption}</a>
            ) : (
              header.caption
            )}
          </div>
        )}
      </>
    );
  }

  // Header with background color
  if (header.background_color) {
    return (
      <>
        <div id="masthead-with-background-color" style={{ background: header.background_color }}>
          <div className="row">
            <figure className="small-12 columns">
              <Image src={header.pattern || ''} alt={siteConfig.title} />
            </figure>
          </div>
        </div>
        {header.caption && (
          <div className="masthead-caption">
            {header.caption_url ? (
              <a href={header.caption_url}>{header.caption}</a>
            ) : (
              header.caption
            )}
          </div>
        )}
      </>
    );
  }

  return null;
}

