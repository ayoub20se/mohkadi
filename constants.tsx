
import { SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'facebook', name: 'فيسبوك', url: 'https://www.facebook.com/share/1AX9zagJM2/', icon: 'facebook', color: 'bg-blue-700' },
  { id: 'tiktok', name: 'تيك توك', url: 'https://vm.tiktok.com/ZSHoeypsBXXhc-XYBHK/', icon: 'tiktok', color: 'bg-stone-900' },
  { id: 'instagram', name: 'انستغرام', url: 'https://www.instagram.com/mohamed___kadi_____?igsh=MXkwZWh5bmFxcjZveQ==', icon: 'instagram', color: 'bg-pink-600' },
  { id: 'youtube', name: 'يوتيوب', url: 'https://youtube.com', icon: 'youtube', color: 'bg-red-600' },
  { id: 'whatsapp', name: 'واتساب', url: 'https://whatsapp.com', icon: 'whatsapp', color: 'bg-green-600' },
  { id: 'mail', name: 'البريد الإلكتروني', url: 'mailto:info@alqadi.com', icon: 'mail', color: 'bg-amber-600' },
];

// Content cards are now handled directly in IslamicContent component for dynamic clock and fixed phrases
