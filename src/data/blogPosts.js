export const posts = [
  {
    slug: 'designing-react-interfaces',
    title: 'Designing React Interfaces That Stay Fast Under Load',
    date: 'May 2026',
    tag: 'Frontend',
    readTime: '4 min read',
    excerpt: 'Notes on state boundaries, predictable rendering, and keeping dashboards responsive when data moves quickly.',
    sections: [
      {
        heading: 'Start With State Boundaries',
        body: 'Fast React interfaces usually come from clear ownership. I separate server data, form state, view filters, and temporary UI state so each part of the interface updates only when it needs to.'
      },
      {
        heading: 'Render Less, Communicate More',
        body: 'Dashboards can become noisy when every interaction triggers broad re-renders. I prefer smaller components, stable props, and explicit loading or empty states that tell users what is happening.'
      },
      {
        heading: 'Performance Is A Product Feature',
        body: 'Users do not care that a component tree is elegant if the screen feels slow. Good frontend engineering turns technical constraints into a calmer product experience.'
      }
    ],
    takeaways: ['Keep state close to where it changes', 'Design loading and empty states intentionally', 'Treat responsiveness as part of the product quality']
  },
  {
    slug: 'production-ready-backend-service',
    title: 'What Makes a Backend Service Production-Ready?',
    date: 'April 2026',
    tag: 'Backend',
    readTime: '5 min read',
    excerpt: 'A practical checklist for API contracts, validation, logging, database access, and failure handling.',
    sections: [
      {
        heading: 'Contracts Before Controllers',
        body: 'Production services need predictable inputs, outputs, and errors. I define API contracts early so frontend, backend, and integration work can move without guessing.'
      },
      {
        heading: 'Failure Paths Are First-Class',
        body: 'A service is not reliable because it never fails. It is reliable because validation, logs, retries, and error responses make failure understandable and recoverable.'
      },
      {
        heading: 'Data Access Needs Discipline',
        body: 'Database calls should be intentional, observable, and shaped around the actual workflow. Clean data models and query patterns are part of the user experience.'
      }
    ],
    takeaways: ['Make API errors consistent', 'Log enough context to debug production issues', 'Design data models around real workflows']
  },
  {
    slug: 'blockchain-ux-systems-engineering',
    title: 'Blockchain UX Is Mostly Systems Engineering',
    date: 'March 2026',
    tag: 'Blockchain',
    readTime: '4 min read',
    excerpt: 'How transaction states, confirmations, and recovery paths shape whether decentralized apps feel trustworthy.',
    sections: [
      {
        heading: 'Wallet Actions Need Context',
        body: 'A wallet prompt is a high-trust moment. Users need to understand what they are approving, what can happen next, and how the interface will respond after submission.'
      },
      {
        heading: 'Transaction State Is The Product',
        body: 'Pending, confirmed, failed, and dropped transactions should not feel mysterious. Good blockchain UX makes every state visible and gives users a path forward.'
      },
      {
        heading: 'Security And Clarity Work Together',
        body: 'The best decentralized apps do not hide complexity with vague copy. They expose the right details at the right time and reduce unnecessary risk.'
      }
    ],
    takeaways: ['Explain wallet actions before prompting', 'Track transaction states clearly', 'Design recovery paths for failed operations']
  }
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
