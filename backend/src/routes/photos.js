import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/:hobby', async (req, res) => {
  const { hobby } = req.params
  const allowed = ['photography', 'sports', 'travel', 'other']
  if (!allowed.includes(hobby)) {
    return res.status(400).json({ error: 'Invalid hobby category' })
  }

  try {
    const photos = await prisma.hobbyPhoto.findMany({
      where: { hobby },
      orderBy: { order: 'asc' },
    })
    res.json(photos)
  } catch (error) {
    console.error('Error fetching photos:', error)
    res.status(500).json({ error: 'Failed to fetch photos' })
  }
})

export default router
