import { claudeSkills } from '@/data/claudeSkills'

const byId = Object.fromEntries(claudeSkills.map((s) => [s.id, s]))

// Structure only — all copy lives in i18n under `caseStudy.skills`.
// repoUrl / tech / image are single-sourced from claudeSkills.js; each skill
// gets its own section on the case study page, with `highlights` naming the
// i18n keys of its three feature bullets.
export const skillsCase = {
  skills: [
    { ...byId['idea-ledger'], highlights: ['capture', 'versioning', 'audit'] },
    { ...byId['agile-ledger'], highlights: ['lifecycle', 'traceability', 'workspace'] },
    { ...byId['cartographer'], highlights: ['assess', 'output', 'audiences'] },
  ],
}
