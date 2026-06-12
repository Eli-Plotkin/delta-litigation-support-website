export type Service = {
  slug: string
  number: string
  name: string
  navName: string
  stage: string
  short: string
  headline: string
  subheadline: string
  deliverables: string[]
  benefits: string[]
  objective: string
}

export const SERVICES: Service[] = [
  {
    slug: 'intake-onboarding',
    number: '01',
    name: 'Client Intake & Onboarding',
    navName: 'Intake & Onboarding',
    stage: 'Case Opening',
    short: 'Convert signed retainers into active files.',
    headline: 'Every case starts here.',
    subheadline:
      'Delta’s intake team moves every file from signed retainer to active case — verified, documented, and ready to work — without pulling your staff off the phones.',
    deliverables: [
      'Welcome call to every new client',
      'Intake verification',
      'Driver’s license collection',
      'Insurance information collection',
      'Police report procurement',
      'Claim setup with carriers',
      'File creation and organization',
      'Client onboarding package',
    ],
    benefits: [
      'Every retainer becomes an active, workable file',
      'Clients hear from your firm within hours, not days',
      'Clean files from day one — no chasing documents later',
      'Intake capacity that scales with your signing volume',
    ],
    objective: 'Move the file from signed retainer to active case.',
  },
  {
    slug: 'treatment-coordination',
    number: '02',
    name: 'Treatment Coordination',
    navName: 'Treatment Coordination',
    stage: 'Active Treatment',
    short: 'Keep clients engaged and treating.',
    headline: 'Keep clients treating. Keep cases moving.',
    subheadline:
      'Delta’s treatment coordination team helps clients stay engaged in care, reduces treatment gaps, and keeps cases progressing — with documented reporting on every file.',
    deliverables: [
      'Provider coordination',
      'Appointment scheduling assistance',
      'Treatment monitoring',
      'Client follow-up',
      'Missed appointment outreach',
      'Gap-in-treatment alerts',
      'Treatment progression reporting',
    ],
    benefits: [
      'Increased treatment compliance',
      'Improved documentation',
      'Reduced attorney involvement',
      'Stronger case development',
    ],
    objective: 'Increase treatment compliance and improve case value.',
  },
  {
    slug: 'medical-records',
    number: '03',
    name: 'Medical Records & Bills Retrieval',
    navName: 'Records Retrieval',
    stage: 'Case Development',
    short: 'Complete records and bills management.',
    headline: 'Complete medical files. Without the chase.',
    subheadline:
      'Delta manages the entire records and bills retrieval cycle — requests, provider follow-up, and file organization — so your team never spends another afternoon on hold.',
    deliverables: [
      'Medical records requests',
      'Medical bill requests',
      'Provider follow-up',
      'Retrieval management and tracking',
      'File organization',
    ],
    benefits: [
      'Faster, more consistent record turnaround',
      'No internal staff tied up chasing providers',
      'Complete files ready for chronology and demand',
      'Full visibility into retrieval status by file',
    ],
    objective: 'Create a complete medical file efficiently and consistently.',
  },
  {
    slug: 'medical-chronologies',
    number: '04',
    name: 'Medical Chronology & Case Analysis',
    navName: 'Medical Chronologies',
    stage: 'Case Development',
    short: 'Organized case summaries and timelines.',
    headline: 'From a stack of records to a clear case story.',
    subheadline:
      'Delta turns complete medical files into organized chronologies, summaries, and specials — so attorneys review a prepared case, not a pile of paper.',
    deliverables: [
      'Treatment chronology',
      'Provider summaries',
      'Treatment timeline',
      'Gap analysis',
      'Specials summary',
      'Case progression report',
    ],
    benefits: [
      'Attorney review time measured in minutes, not hours',
      'Gaps and issues surfaced before they become problems',
      'Consistent, demand-ready work product on every file',
      'A clear picture of case value as treatment develops',
    ],
    objective: 'Prepare files for demand and attorney review.',
  },
  {
    slug: 'demand-preparation',
    number: '05',
    name: 'Demand Preparation',
    navName: 'Demand Preparation',
    stage: 'Demand',
    short: 'Demand packages prepared for attorney review.',
    headline: 'Turn medical records into settlement demands faster.',
    subheadline:
      'Delta assembles complete, attorney-ready demand packages — chronologies, exhibits, and specials included — so your attorneys review and send instead of build from scratch.',
    deliverables: [
      'Medical summaries',
      'Exhibit organization',
      'Specials summaries',
      'Demand package assembly',
      'AI-assisted demand drafting',
      'Attorney review package',
    ],
    benefits: [
      'Shorter demand cycle times',
      'Higher attorney productivity per file',
      'Consistent demand quality across the caseload',
      'No demand-writer bottleneck as volume grows',
    ],
    objective: 'Reduce demand cycle time and increase attorney productivity.',
  },
  {
    slug: 'lien-resolution',
    number: '06',
    name: 'Lien Resolution Support',
    navName: 'Lien Resolution',
    stage: 'Settlement Prep',
    short: 'Support through settlement preparation.',
    headline: 'Clear the path to settlement.',
    subheadline:
      'Delta identifies liens, prepares reduction requests, and coordinates payoffs — so nothing surprises you at the settlement table.',
    deliverables: [
      'Lien identification',
      'Reduction request preparation',
      'Payoff coordination',
      'Final lien reporting',
    ],
    benefits: [
      'Liens identified early, not at disbursement',
      'Documented reduction efforts on every file',
      'Faster path from settlement to closing',
      'Clean final reporting for the settlement statement',
    ],
    objective: 'Streamline settlement preparation.',
  },
  {
    slug: 'settlement-administration',
    number: '07',
    name: 'Settlement Administration',
    navName: 'Settlement Administration',
    stage: 'Closing',
    short: 'From settlement to closing package.',
    headline: 'From settled to closed. Without the drag.',
    subheadline:
      'Delta prepares settlement worksheets, coordinates provider payoffs, and assembles the closing package — accelerating disbursement on every settled file.',
    deliverables: [
      'Settlement worksheets',
      'Provider payoff coordination',
      'Settlement documentation',
      'Closing package preparation',
    ],
    benefits: [
      'Faster disbursement to clients',
      'Clean, audit-ready closing files',
      'No settled files sitting in a drawer',
      'Capacity released for the next case',
    ],
    objective: 'Accelerate settlement completion and disbursement.',
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
