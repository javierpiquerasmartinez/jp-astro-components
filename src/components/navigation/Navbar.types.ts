export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  links: NavItem[];
  logo?: string;
  logoHref?: string;
  sticky?: boolean;
}
