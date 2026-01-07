export interface NavigationLink {
  title: string;
  url: string;
  side: 'left' | 'right';
  dropdown?: NavigationLink[];
  class?: string;
}

export interface LabMember {
  name: string;
  position: string;
  email?: string;
  url?: string;
}

export interface Alumni {
  name: string;
  year?: string;
  prev_position: string;
  curr_position: string;
  url?: string;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi?: string;
  abstract?: string;
  categories: string[];
  pub?: {
    authors: string;
    journal: string;
    date: string;
    doi?: string;
    abstract?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  categories: string[];
  author?: string;
}

export interface PageMetadata {
  title?: string;
  meta_title?: string;
  meta_description?: string;
  layout?: string;
  permalink?: string;
  breadcrumb?: boolean;
  header?: {
    image_fullwidth?: string;
    pattern?: string;
    background_color?: string;
    title?: string;
    caption?: string;
    caption_url?: string;
  };
}

export interface SocialMedia {
  name: string;
  url: string;
  class: string;
  title: string;
}

