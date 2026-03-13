# Nuno Amorim — Personal Portfolio

A modern, responsive personal portfolio web application built with Vue.js 3 and Node.js/Express.

## Tech Stack

**Frontend:** Vue 3 (Composition API), Vue Router, Pinia, Tailwind CSS, Leaflet.js
**Backend:** Node.js, Express, Prisma ORM, PostgreSQL
**Tooling:** Vite, PostCSS, Nodemon

## Project Structure

```
Portfolio/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   ├── src/
│   │   ├── prisma/
│   │   │   └── seed.js          # Seed data
│   │   ├── routes/
│   │   │   ├── projects.js
│   │   │   ├── courses.js
│   │   │   ├── skills.js
│   │   │   ├── travel.js
│   │   │   └── photos.js
│   │   └── server.js            # Express server
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── NavBar.vue
│   │   │   │   └── SiteFooter.vue
│   │   │   └── ui/
│   │   │       ├── LanguageBar.vue
│   │   │       ├── LightBox.vue
│   │   │       ├── SectionHeading.vue
│   │   │       └── SkillDots.vue
│   │   ├── pages/
│   │   │   ├── HomePage.vue
│   │   │   ├── ProjectsPage.vue
│   │   │   ├── CoursesPage.vue
│   │   │   ├── PersonalPage.vue
│   │   │   ├── TravelPage.vue
│   │   │   ├── SportsPage.vue
│   │   │   ├── PhotographyPage.vue
│   │   │   └── HobbiesPage.vue
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── stores/
│   │   │   └── portfolio.js
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or hosted)
- npm or yarn

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Portfolio
```

### 2. Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your PostgreSQL connection string
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

The API server will start at `http://localhost:3001`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:5173` with API requests proxied to the backend.

### 4. Add your CV

Place your CV PDF at `frontend/public/cv.pdf` to enable the download button on the Home page.

## Frontend-Only Mode

The frontend includes fallback data, so it works without the backend running. The Pinia store will use hardcoded placeholder data if the API is unreachable.

## API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | /api/projects        | List all projects       |
| GET    | /api/projects/:id    | Get a single project    |
| GET    | /api/courses         | List all courses        |
| GET    | /api/skills          | Get skills (grouped)    |
| GET    | /api/travel/cities   | List travel cities      |
| GET    | /api/photos/:hobby   | Get photos by hobby     |
| GET    | /api/health          | Health check            |

## Customization

- **Profile photo:** Replace the `picsum.photos` URL in `HomePage.vue` hero section
- **Projects:** Edit seed data in `backend/src/prisma/seed.js` or update via database
- **Courses:** Same as projects — edit seed or database
- **Travel cities:** Add new cities with lat/lng coordinates in the seed file
- **Hobbies:** Edit `HobbiesPage.vue` and `PersonalPage.vue` directly
- **Social links:** Update URLs in `SiteFooter.vue`
- **Colors:** Modify the theme in `frontend/tailwind.config.js`

## Building for Production

```bash
# Frontend
cd frontend
npm run build    # Output in dist/

# Backend
cd backend
npm start        # Runs in production mode
```

## License

Private — All rights reserved.
