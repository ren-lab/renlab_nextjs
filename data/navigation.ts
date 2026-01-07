import { NavigationLink } from '@/types';

export const navigation: NavigationLink[] = [
  { title: 'Home', url: '/', side: 'left' },
  { title: 'News', url: '/news/', side: 'left' },
  { title: 'Research', url: '/research/', side: 'left' },
  { title: 'Team', url: '/team/', side: 'left' },
  {
    title: 'Publication',
    url: '/publication/',
    side: 'left',
    dropdown: [
      { title: 'Preprint', url: '/publication/preprint/', side: 'left' },
    ],
  },
  { title: 'Download', url: '/download/', side: 'left' },
  { title: 'Search', url: '/search/', side: 'right' },
  { title: 'Contact', url: '/contact/', side: 'right' },
];

