import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (_req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { order: 'asc' },
    })
    const grouped = {
      top: skills.filter(s => s.category === 'top'),
      technical: skills.filter(s => s.category === 'technical'),
      soft: skills.filter(s => s.category === 'soft'),
      tools: skills.filter(s => s.category === 'tools'),
      languages: skills.filter(s => s.category === 'language'),
    }
    res.json(grouped)
  } catch (error) {
    console.error('Error fetching skills:', error)
    res.status(500).json({ error: 'Failed to fetch skills' })
  }
})

export default router
