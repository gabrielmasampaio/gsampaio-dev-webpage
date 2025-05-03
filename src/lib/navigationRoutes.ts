interface NavigationRoute {
  label: string;
  href: string;
  openInNewTab?: boolean;
  primary?: boolean;
}

const navigationRoutes: NavigationRoute[] = [
  { label: 'resume', href: '/gabriel-sampaio-resume.pdf', openInNewTab: true },
  { label: 'projects', href: '/projects' },
  { label: 'now', href: '/now' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact', primary: true },
];

export { navigationRoutes };
export type { NavigationRoute };
