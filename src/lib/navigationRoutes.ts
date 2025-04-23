interface NavigationRoute {
  label: string;
  href: string;
  openInNewTab?: boolean;
}

const navigationRoutes: NavigationRoute[] = [
  { label: 'resume', href: '/gabriel-sampaio-resume.pdf', openInNewTab: true },
  { label: 'projects', href: '/projects' },
  { label: 'now', href: '/now' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export { navigationRoutes };
export type { NavigationRoute };
