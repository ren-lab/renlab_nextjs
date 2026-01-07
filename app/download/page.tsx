import Link from 'next/link';

export const metadata = {
  title: 'Download',
  description: 'Download resources from RENLAB',
};

// You'll need to populate this with actual download items
// This is a placeholder structure
const downloadItems = [
  {
    title: 'dTAC catalog accessibility by sample',
    url: '/download_files/dTAC_catalog_accessibility_by_sample.tar.gz',
    description: 'Accessibility data for dTAC catalog',
  },
  {
    title: 'ENCODE3 mouse dynamic dTACs',
    url: '/download_files/ENCODE3_mouse_dynamic_dTACs.txt.gz',
    description: 'ENCODE3 mouse dynamic dTAC data',
  },
  {
    title: 'ENCODE3 mouse dynamic H3K27ac peaks',
    url: '/download_files/ENCODE3_mouse_dynamic_H3K27ac_peaks.txt.gz',
    description: 'ENCODE3 mouse dynamic H3K27ac peaks data',
  },
  {
    title: 'ENCODE3 mouse table S13',
    url: '/download_files/ENCODE3_mouse_tableS13.xlsx',
    description: 'ENCODE3 mouse supplementary table',
  },
];

export default function DownloadPage() {
  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>Download</h1>
          </header>

          <div className="download-list">
            {downloadItems.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '2rem' }}>
                <h3>
                  <a href={item.url} download>
                    {item.title}
                  </a>
                </h3>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

