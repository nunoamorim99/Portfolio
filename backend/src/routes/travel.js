import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/cities', async (_req, res) => {
  try {
    const cities = await prisma.travelCity.findMany({
      orderBy: { order: 'asc' },
    })
    res.json(cities)
  } catch (error) {
    console.error('Error fetching cities:', error)
    res.status(500).json({ error: 'Failed to fetch cities' })
  }
})

export default router
