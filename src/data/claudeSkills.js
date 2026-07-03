// Claude Code skills built to optimize day-to-day PM work.
// Kept out of the Movize `projects` array (like sideProjects) so they don't
// inflate the homepage "products & modules shipped" stat — they're counted by
// the "AI side projects" stat instead. Tech names live here (brand names,
// identical across languages); copy lives in i18n under projects.items and
// caseStudy.skills.
// Screenshots pending — drop them in assets/projects/<skill folder> and wire
// them into `image` below.
export const claudeSkills = [
  {
    id: 'idea-ledger',
    image: null,
    repoUrl: 'https://github.com/nunoamorim99/idea-ledger',
    tech: ['Claude Code skill', 'Markdown', 'Slash commands'],
  },
  {
    id: 'agile-ledger',
    image: null,
    repoUrl: 'https://github.com/nunoamorim99/agile-ledger',
    tech: ['Claude Code plugin', 'Markdown', 'Slash commands', 'Git & GitHub integration'],
  },
  {
    id: 'cartographer',
    image: null,
    repoUrl: 'https://github.com/nunoamorim99/cartographer',
    tech: ['Claude Code skill', 'Python', 'Markdown', 'PDF (WeasyPrint)'],
  },
]
