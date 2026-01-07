'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, Fragment } from 'react';
import { navigation } from '@/data/navigation';
import { siteConfig } from '@/lib/siteConfig';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (url: string) => {
    if (url === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(url);
  };

  const leftLinks = navigation.filter(link => link.side === 'left');
  const rightLinks = navigation.filter(link => link.side === 'right');

  return (
    <div id="navigation" className="sticky">
      <nav className="top-bar" role="navigation" data-topbar>
        <ul className="title-area">
          <li className="name">
            <h1 className="show-for-small-only">
              <Link href="/" className="icon-tree">
                {siteConfig.title}
              </Link>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
              <span>Nav</span>
            </a>
          </li>
        </ul>
        <section className={`top-bar-section ${isOpen ? 'expanded' : ''}`}>
          <ul className="right">
            {rightLinks.map((link, idx) => (
              <Fragment key={idx}>
                {link.dropdown ? (
                  <>
                    <li className="divider"></li>
                    <li className={`has-dropdown ${isActive(link.url) ? 'active' : ''}`}>
                      <Link href={link.url}>{link.title}</Link>
                      <ul className="dropdown">
                        {link.dropdown.map((dropdownLink, dIdx) => (
                          <li key={dIdx}>
                            <Link href={dropdownLink.url}>{dropdownLink.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="divider"></li>
                    <li className={isActive(link.url) ? 'active' : ''}>
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  </>
                )}
              </Fragment>
            ))}
          </ul>
          <ul className="left">
            {leftLinks.map((link, idx) => (
              <Fragment key={idx}>
                {link.dropdown ? (
                  <li className={`has-dropdown ${isActive(link.url) ? 'active' : ''}`}>
                    <Link href={link.url}>{link.title}</Link>
                    <ul className="dropdown">
                      {link.dropdown.map((dropdownLink, dIdx) => (
                        <li key={dIdx}>
                          <Link href={dropdownLink.url}>{dropdownLink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className={isActive(link.url) ? 'active' : ''}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                )}
                <li className="divider"></li>
              </Fragment>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
}

