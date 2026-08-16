export interface UserProfile {
  name: string;
  title: string;
  handle: string;
  email: string;
  githubUrl: string;
  githubLabel: string;
  linkedinUrl: string;
  linkedinLabel: string;
  resumePath: string;
  primaryStack: string[];
}

export const profile: UserProfile = {
  name: 'Oluwafemi Jacob',
  title: 'Full-Stack Software Engineer',
  handle: 'oluwafemi.jacob',
  email: 'jacoboluwafemi72@gmail.com',
  githubUrl: 'https://github.com/Holuwaphemmy01',
  githubLabel: 'github.com/Holuwaphemmy01',
  linkedinUrl: 'https://linkedin.com/in/oluwafemi-jacob',
  linkedinLabel: 'LinkedIn',
  resumePath: '/oluwafemi-jacob-resume.pdf',
  primaryStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Solidity']
};

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Component Systems']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'System Design']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Data Modeling']
  },
  {
    title: 'Blockchain',
    items: ['Solidity', 'Smart Contracts', 'Wallet Flows', 'EVM', 'Web3 Integrations']
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'Testing']
  }
];

export const principles: string[] = [
  'Keep interfaces fast, legible, and purposeful.',
  'Design APIs around predictable contracts.',
  'Make failure states visible and recoverable.',
  'Prefer simple systems that can grow without drama.'
];

export interface CollaborationNote {
  title: string;
  body: string;
}

export const collaborationNotes: CollaborationNote[] = [
  {
    title: 'Clear Technical Communication',
    body: 'I explain tradeoffs, edge cases, and implementation decisions in plain language so teams can move with shared context.'
  },
  {
    title: 'Ownership From Idea To Ship',
    body: 'I care about the complete path: product intent, interface behavior, API contracts, testing, deployment, and maintainability.'
  },
  {
    title: 'Calm Execution Under Complexity',
    body: 'I break large problems into workable pieces, protect quality, and keep momentum without hiding risks.'
  }
];
