interface Navbar {
    id: number,
    name: string,
    link: string
}

export const mainNavbarItems: Navbar[] = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Brands & Products', link: '/brand' },
    { id: 4, name: 'Shop', link: '/shop' },
    { id: 5, name: 'Services', link: '/services' },
    { id: 6, name: 'contact us', link: '/contact' },
];
  