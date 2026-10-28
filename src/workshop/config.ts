// The Workshop — what's in the room and the order the scroll tour visits it.
//
// Each project object is exported from Blender (blender/workshop.blend) as its
// own GLB in public/3d/models, so adding a project later means: model one
// object, export it, add one entry to MODELS and one to STOPS.

export type StopId =
  | 'intro'
  | 'movize'
  | 'pm'
  | 'dev'
  | 'ai'
  | 'astro-hop'
  | 'nibble'
  | 'beagle-chomp'
  | 'claude-skills'
  | 'future'
  | 'outro'

export type ModelKey =
  | 'room'
  | 'obj_movize_orrery'
  | 'obj_screen_pm'
  | 'obj_screen_dev'
  | 'obj_laptop'
  | 'obj_astrohop'
  | 'obj_nibble'
  | 'obj_beagle_chomp'
  | 'obj_skills'
  | 'obj_future'

export interface Stop {
  id: StopId
  /** The model the camera frames at this stop; none = whole-room overview. */
  model?: ModelKey
  /** How much of the view the object fills (bigger = more context around it). */
  frame?: number
}

export const MODELS: ModelKey[] = [
  'room',
  'obj_movize_orrery',
  'obj_screen_pm',
  'obj_screen_dev',
  'obj_laptop',
  'obj_astrohop',
  'obj_nibble',
  'obj_beagle_chomp',
  'obj_skills',
  'obj_future',
]

// Roles first (the two desk screens and the laptop), then the day job on the work shelf above
// the desk, then personal projects: wall shelves top to bottom (the lowest is the AI
// shelf for the Claude Code skills), then the bookcase with room to grow.
export const STOPS: Stop[] = [
  { id: 'intro' },
  { id: 'pm', model: 'obj_screen_pm', frame: 1.9 },
  { id: 'dev', model: 'obj_screen_dev', frame: 1.9 },
  { id: 'ai', model: 'obj_laptop', frame: 2.2 },
  { id: 'movize', model: 'obj_movize_orrery', frame: 1.9 },
  { id: 'astro-hop', model: 'obj_astrohop', frame: 2.4 },
  { id: 'nibble', model: 'obj_nibble', frame: 2.6 },
  { id: 'beagle-chomp', model: 'obj_beagle_chomp', frame: 2.0 },
  { id: 'claude-skills', model: 'obj_skills', frame: 1.6 },
  { id: 'future', model: 'obj_future', frame: 2.2 },
  { id: 'outro' },
]

/** Which stop a clicked model belongs to. */
export const STOP_BY_MODEL: Partial<Record<ModelKey, StopId>> = Object.fromEntries(
  STOPS.filter((s) => s.model).map((s) => [s.model, s.id]),
)

/** Orrery planet node (Blender object name) → Movize product id in src/data/projects.js. */
export const PLANET_PRODUCTS: Record<string, string> = {
  planet_mobile_app: 'mobile-app',
  planet_web_app: 'web-app',
  planet_website: 'movize-website',
  planet_connect_portal: 'web-platform',
}

/** AI shelf book node (Blender object name) → skill id in src/data/claudeSkills.js. */
export const BOOK_SKILLS: Record<string, string> = {
  book_idea_ledger: 'idea-ledger',
  book_agile_ledger: 'agile-ledger',
  book_agile_ledger_pro: 'agile-ledger-pro',
  book_cartographer: 'cartographer',
  book_protect_product: 'fortify',
}

/** Spine colour of each skill's book, so the card's tabs match the shelf. */
export const SKILL_COLORS: Record<string, string> = {
  'agile-ledger': '#14b8a6',
  'agile-ledger-pro': '#e85d4a',
  'idea-ledger': '#f2b544',
  cartographer: '#6fa8dc',
  fortify: '#8b9e7c',
}

export const COLORS = {
  background: 0x0d0d0d, // charcoal-900, the page background
  turquoise: 0x14b8a6,
}
