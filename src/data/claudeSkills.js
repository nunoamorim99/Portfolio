import ideaLedgerLight from '@/assets/projects/ideaLedger/logo-light.svg'
import ideaLedgerDark from '@/assets/projects/ideaLedger/logo-dark.svg'
import agileLedgerLight from '@/assets/projects/agileLedger/logo-light.svg'
import agileLedgerDark from '@/assets/projects/agileLedger/logo-dark.svg'
import agileLedgerProLight from '@/assets/projects/agileLedgerPro/logo-light.svg'
import agileLedgerProDark from '@/assets/projects/agileLedgerPro/logo-dark.svg'
import cartographerLight from '@/assets/projects/cartographer/logo-light.svg'
import cartographerDark from '@/assets/projects/cartographer/logo-dark.svg'
import fortifyLight from '@/assets/projects/fortify/logo-light.svg'
import fortifyDark from '@/assets/projects/fortify/logo-dark.svg'

// Claude Code skills built to optimize my day-to-day work as a PM and builder.
// Kept out of the Movize `projects` array (like sideProjects) so they don't
// inflate the homepage "products & modules shipped" stat — they're counted by
// the "AI side projects" stat instead. Tech names live here (brand names,
// identical across languages); copy lives in i18n under projects.items and
// caseStudy.skills. Each skill shows its own horizontal logo lockup: `light`
// is the dark-ink version for light backgrounds, `dark` the reversed one.
export const claudeSkills = [
  {
    id: 'idea-ledger',
    logo: { light: ideaLedgerLight, dark: ideaLedgerDark },
    repoUrl: 'https://github.com/nunoamorim99/idea-ledger',
    tech: ['Claude Code skill', 'Markdown', 'Slash commands'],
  },
  {
    id: 'agile-ledger',
    logo: { light: agileLedgerLight, dark: agileLedgerDark },
    repoUrl: 'https://github.com/nunoamorim99/agile-ledger',
    tech: ['Claude Code plugin', 'Markdown', 'Slash commands', 'Git & GitHub integration'],
  },
  {
    id: 'agile-ledger-pro',
    logo: { light: agileLedgerProLight, dark: agileLedgerProDark },
    repoUrl: 'https://github.com/nunoamorim99/agile-ledger-pro',
    tech: ['Claude Code plugin', 'Markdown', 'Slash commands', 'Python (stdlib)', 'Vanilla JS'],
  },
  {
    id: 'cartographer',
    logo: { light: cartographerLight, dark: cartographerDark },
    repoUrl: 'https://github.com/nunoamorim99/cartographer',
    tech: ['Claude Code skill', 'Python', 'Markdown', 'PDF (WeasyPrint)'],
  },
  {
    id: 'fortify',
    logo: { light: fortifyLight, dark: fortifyDark },
    repoUrl: 'https://github.com/nunoamorim99/fortify',
    tech: ['Claude Code plugin', 'Python (stdlib)', 'Markdown', 'Slash commands'],
  },
]
