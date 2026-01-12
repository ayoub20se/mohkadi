
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ReflectionData {
  verse: string;
  translation: string;
  reflection: string;
  actionItem: string;
}

export interface ContentCard {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
