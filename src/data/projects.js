export const projects = [
  {
    slug: 'atlas-control-plane',
    type: 'Full-Stack',
    name: 'Atlas Control Plane',
    summary: 'A React operations dashboard with auth, team workflows, analytics views, and API-backed command actions.',
    stack: ['React', 'API Design', 'Auth', 'Dashboards'],
    url: '/projects/atlas-control-plane',
    liveUrl: 'https://example.com/atlas-control-plane',
    problem: 'Operations teams needed one reliable workspace to inspect metrics, trigger workflows, and understand system state without switching between disconnected tools.',
    role: 'Designed the product flow, built the React interface, shaped API contracts, and implemented dashboard states for loading, empty, error, and success paths.',
    outcome: 'Reduced operational friction by turning scattered actions into a focused command surface with clear feedback for every workflow.',
    highlights: ['Role-based dashboard experience', 'Reusable component system', 'API-backed command actions', 'Accessible states and responsive layouts'],
    architecture: ['React route-level pages', 'Authenticated API layer', 'Reusable data cards and tables', 'Server-driven dashboard metrics'],
    metrics: ['3 core workflows unified', 'Reusable dashboard modules', 'Production-ready UI states']
  },
  {
    slug: 'event-ledger-api',
    type: 'Backend',
    name: 'Event Ledger API',
    summary: 'A service layer for reliable event ingestion, validation, query performance, and audit-friendly records.',
    stack: ['Node.js', 'REST', 'Database', 'Observability'],
    url: '/projects/event-ledger-api',
    liveUrl: 'https://example.com/event-ledger-api',
    problem: 'The product needed a dependable backend for ingesting high-value events, validating payloads, and preserving records that could be audited later.',
    role: 'Designed service boundaries, validation rules, database access patterns, error responses, and logging conventions.',
    outcome: 'Created a backend foundation that made event writes predictable, query paths easier to reason about, and failure cases visible.',
    highlights: ['Structured validation layer', 'Audit-friendly event records', 'Consistent REST contracts', 'Operational logging patterns'],
    architecture: ['Node.js service layer', 'REST API endpoints', 'Database-backed event storage', 'Centralized error handling'],
    metrics: ['Predictable API contracts', 'Traceable event lifecycle', 'Clear failure responses']
  },
  {
    slug: 'vault-settlement-protocol',
    type: 'Blockchain',
    name: 'Vault Settlement Protocol',
    summary: 'A wallet-enabled transaction flow for deposits, settlement states, contract reads, and user-safe confirmations.',
    stack: ['Smart Contracts', 'Wallets', 'React', 'Security'],
    url: '/projects/vault-settlement-protocol',
    liveUrl: 'https://example.com/vault-settlement-protocol',
    problem: 'Users needed a safer way to understand wallet actions, transaction progress, and settlement states before committing blockchain operations.',
    role: 'Mapped the transaction lifecycle, built wallet interaction states, and designed UI feedback for pending, confirmed, failed, and recoverable actions.',
    outcome: 'Improved trust in the transaction flow by making contract interactions visible, explainable, and easier to recover from.',
    highlights: ['Wallet connection flow', 'Transaction state machine', 'Smart contract read/write UX', 'Confirmation and recovery states'],
    architecture: ['React interface', 'Wallet provider integration', 'Smart contract calls', 'Transaction status tracking'],
    metrics: ['Clear transaction lifecycle', 'Safer confirmation UX', 'Recoverable failure states']
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
