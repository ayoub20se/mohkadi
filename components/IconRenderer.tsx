
import React from 'react';
import { Youtube, Facebook, Twitter, Instagram, MessageCircle, Mail, Book, Heart, Star, Compass, Music2, BookOpen, ScrollText, Users, PlayCircle } from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  switch (name) {
    case 'youtube': return <Youtube className={className} />;
    case 'facebook': return <Facebook className={className} />;
    case 'twitter': return <Twitter className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'whatsapp': return <MessageCircle className={className} />;
    case 'tiktok': return <Music2 className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'book': return <Book className={className} />;
    case 'quran': return <BookOpen className={className} />;
    case 'hadith': return <ScrollText className={className} />;
    case 'seerah': return <Users className={className} />;
    case 'play': return <PlayCircle className={className} />;
    case 'heart': return <Heart className={className} />;
    case 'star': return <Star className={className} />;
    case 'compass': return <Compass className={className} />;
    default: return <Star className={className} />;
  }
};

export default IconRenderer;
