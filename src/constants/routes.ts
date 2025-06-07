import { type NavLink } from '@/types/types';

export const NAV_LINKS: Record<string, NavLink> = {
  booking: {
    href: '/bookings',
    label: 'bookings',
  },
  createRental: {
    href: '/rentals/create',
    label: 'create rental',
  },
  favourites: {
    href: '/favourites',
    label: 'favourites',
  },
  home: {
    href: '/',
    label: 'home',
  },
  profile: {
    href: '/profile',
    label: 'profile',
  },
  rentals: {
    href: '/rentals',
    label: 'rentals',
  },
  reviews: {
    href: '/reviews',
    label: 'reviews',
  },
};

export const PROTECTED_ROUTES = [
  '/bookings(.*)',
  '/checkout(.*)',
  '/favourites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
];

export const NAV_LINKS_ARRAY: NavLink[] = Object.values(NAV_LINKS);
