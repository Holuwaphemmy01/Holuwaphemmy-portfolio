export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  summary: string;
  achievements?: string[];
  stack?: string[];
}

export const experience: ExperienceItem[] = [
  {
    year: '2026',
    role: 'Full-Stack Software Engineer',
    company: 'Freelance / Contract',
    summary: 'Building React product surfaces, backend APIs, and blockchain-enabled user flows for clients across fintech and developer tooling.',
    achievements: [
      'Architected a React operations dashboard unifying 3 core team workflows',
      'Designed smart contract interaction patterns with wallet-safe confirmation UX',
      'Built RESTful service layers with structured validation and audit-grade logging'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Solidity', 'PostgreSQL']
  },
  {
    year: '2025',
    role: 'Backend Project Lead',
    company: 'Contract Engineering',
    summary: 'Designed service boundaries, data models, and error handling for production workflows across multiple client projects.',
    achievements: [
      'Led API contract design bridging frontend and backend engineering teams',
      'Implemented centralized error handling reducing production debug time by 40%',
      'Established logging and observability conventions adopted across 3 services'
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    year: '2024',
    role: 'React Engineer',
    company: 'Product Studio',
    summary: 'Shipped responsive interfaces with reusable components and accessible interaction states for consumer-facing products.',
    achievements: [
      'Built a component library powering 4 product surfaces with consistent design tokens',
      'Improved Lighthouse accessibility scores from 72 to 98 across all pages',
      'Reduced bundle size by 35% through code splitting and lazy loading strategies'
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'REST APIs', 'Git']
  }
];
