import { BriefcaseBusiness, Code2, FileText, Home, LucideIcon, Mail, Newspaper, UserRound } from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: UserRound },
  { path: '/projects', label: 'Projects', icon: Code2 },
  { path: '/experience', label: 'Experience', icon: BriefcaseBusiness },
  // { path: '/blog', label: 'Blog', icon: Newspaper },
  { path: '/contact', label: 'Contact', icon: Mail },
  { path: '/resume', label: 'Resume', icon: FileText }
];
