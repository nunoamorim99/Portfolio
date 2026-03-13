import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import projectRoutes from './routes/projects.js'
import courseRoutes from './routes/courses.js'
import skillRoutes from './routes/skills.js'
import travelRoutes from './routes/travel.js'
import photoRoutes from './routes/photos.js'

const app = express()
const PORT = process.env.PORT || 3001

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET'],
  credentials: true,
}))
app.use(express.json({ limit: '10mb' }))

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/skills', skillRoutes)
app.use('/api/travel', travelRoutes)
app.use('/api/photos', photoRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
