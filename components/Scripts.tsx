'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      <Script src="/assets/js/modernizr.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/javascript.min.js" strategy="afterInteractive" />
    </>
  );
}

