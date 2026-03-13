import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.hobbyPhoto.deleteMany()
  await prisma.travelCity.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.course.deleteMany()
  await prisma.project.deleteMany()

  // Projects
  await prisma.project.createMany({
    data: [
      {
        title: 'HealthTrack Mobile App',
        role: 'Product Manager',
        description:
          'Led the end-to-end product development of a health tracking mobile application. Defined the product roadmap, conducted user research with 200+ participants, and coordinated a cross-functional team of 8 engineers and 2 designers. The app achieved 15,000 downloads in the first month and a 4.7-star rating on the App Store.',
        technologies: ['React Native', 'Node.js', 'Firebase', 'Figma', 'Jira', 'Mixpanel'],
        images: [
          'https://picsum.photos/seed/proj1a/800/500',
          'https://picsum.photos/seed/proj1b/800/500',
          'https://picsum.photos/seed/proj1c/800/500',
        ],
        order: 1,
      },
      {
        title: 'E-Commerce Platform Redesign',
        role: 'Associate Product Manager',
        description:
          'Spearheaded the redesign of a B2C e-commerce platform serving 50,000+ monthly active users. Conducted competitive analysis, defined user stories, and prioritized features using the RICE framework. The redesign resulted in a 32% increase in conversion rate and a 25% reduction in cart abandonment.',
        technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS', 'Hotjar', 'Google Analytics'],
        images: [
          'https://picsum.photos/seed/proj2a/800/500',
          'https://picsum.photos/seed/proj2b/800/500',
          'https://picsum.photos/seed/proj2c/800/500',
          'https://picsum.photos/seed/proj2d/800/500',
        ],
        order: 2,
      },
    ],
  })

  // Courses
  await prisma.course.createMany({
    data: [
      {
        title: 'Google Project Management Professional Certificate',
        skills: ['Project Planning', 'Agile Management', 'Risk Management', 'Stakeholder Communication'],
        certificateImg: 'https://picsum.photos/seed/cert1/600/400',
        externalLink: 'https://www.coursera.org/professional-certificates/google-project-management',
        order: 1,
      },
      {
        title: 'Product Management Fundamentals — Product School',
        skills: ['Product Strategy', 'User Research', 'Roadmapping', 'Metrics & KPIs'],
        certificateImg: 'https://picsum.photos/seed/cert2/600/400',
        externalLink: 'https://productschool.com/',
        order: 2,
      },
      {
        title: 'SQL for Data Analysis — Udemy',
        skills: ['SQL', 'Data Analysis', 'Database Design', 'Reporting'],
        certificateImg: 'https://picsum.photos/seed/cert3/600/400',
        externalLink: 'https://www.udemy.com/',
        order: 3,
      },
      {
        title: 'Advanced Scrum Master Certification (A-CSM)',
        skills: ['Scrum Framework', 'Team Facilitation', 'Continuous Improvement', 'Servant Leadership'],
        certificateImg: 'https://picsum.photos/seed/cert4/600/400',
        externalLink: 'https://www.scrumalliance.org/',
        order: 4,
      },
    ],
  })

  // Skills — Top 5
  await prisma.skill.createMany({
    data: [
      { name: 'Product Strategy', category: 'top', rating: 5, order: 1 },
      { name: 'Agile / Scrum', category: 'top', rating: 5, order: 2 },
      { name: 'Data Analysis', category: 'top', rating: 4, order: 3 },
      { name: 'Stakeholder Management', category: 'top', rating: 4, order: 4 },
      { name: 'User Research', category: 'top', rating: 4, order: 5 },
    ],
  })

  // Skills — Technical
  await prisma.skill.createMany({
    data: [
      { name: 'SQL', category: 'technical', order: 1 },
      { name: 'Python', category: 'technical', order: 2 },
      { name: 'HTML / CSS', category: 'technical', order: 3 },
      { name: 'JavaScript', category: 'technical', order: 4 },
      { name: 'REST APIs', category: 'technical', order: 5 },
      { name: 'Git', category: 'technical', order: 6 },
    ],
  })

  // Skills — Soft
  await prisma.skill.createMany({
    data: [
      { name: 'Leadership', category: 'soft', order: 1 },
      { name: 'Communication', category: 'soft', order: 2 },
      { name: 'Problem Solving', category: 'soft', order: 3 },
      { name: 'Critical Thinking', category: 'soft', order: 4 },
      { name: 'Teamwork', category: 'soft', order: 5 },
    ],
  })

  // Skills — Tools
  await prisma.skill.createMany({
    data: [
      { name: 'Jira', category: 'tools', order: 1 },
      { name: 'Confluence', category: 'tools', order: 2 },
      { name: 'Figma', category: 'tools', order: 3 },
      { name: 'Notion', category: 'tools', order: 4 },
      { name: 'Miro', category: 'tools', order: 5 },
      { name: 'Google Analytics', category: 'tools', order: 6 },
      { name: 'Mixpanel', category: 'tools', order: 7 },
    ],
  })

  // Skills — Languages
  await prisma.skill.createMany({
    data: [
      { name: 'Portuguese', category: 'language', rating: 5, level: 'Native', order: 1 },
      { name: 'English', category: 'language', rating: 4, level: 'Fluent', order: 2 },
    ],
  })

  // Travel Cities
  await prisma.travelCity.createMany({
    data: [
      {
        name: 'Venice',
        country: 'Italy',
        lat: 45.4408,
        lng: 12.3155,
        photos: [
          'https://picsum.photos/seed/venice1/800/600',
          'https://picsum.photos/seed/venice2/800/600',
          'https://picsum.photos/seed/venice3/800/600',
        ],
        visitDate: '2024',
        order: 1,
      },
      {
        name: 'Barcelona',
        country: 'Spain',
        lat: 41.3874,
        lng: 2.1686,
        photos: [
          'https://picsum.photos/seed/bcn1/800/600',
          'https://picsum.photos/seed/bcn2/800/600',
        ],
        visitDate: '2023',
        order: 2,
      },
      {
        name: 'Paris',
        country: 'France',
        lat: 48.8566,
        lng: 2.3522,
        photos: [
          'https://picsum.photos/seed/paris1/800/600',
          'https://picsum.photos/seed/paris2/800/600',
        ],
        visitDate: '2023',
        order: 3,
      },
    ],
  })

  // Hobby Photos — Photography
  await prisma.hobbyPhoto.createMany({
    data: [
      { url: 'https://picsum.photos/seed/photo1/800/600', caption: 'Golden hour landscape', hobby: 'photography', order: 1 },
      { url: 'https://picsum.photos/seed/photo2/600/800', caption: 'Urban architecture', hobby: 'photography', order: 2 },
      { url: 'https://picsum.photos/seed/photo3/800/600', caption: 'Street photography', hobby: 'photography', order: 3 },
      { url: 'https://picsum.photos/seed/photo4/600/800', caption: 'Nature close-up', hobby: 'photography', order: 4 },
      { url: 'https://picsum.photos/seed/photo5/800/600', caption: 'Coastal sunset', hobby: 'photography', order: 5 },
      { url: 'https://picsum.photos/seed/photo6/800/600', caption: 'Mountain trail', hobby: 'photography', order: 6 },
      { url: 'https://picsum.photos/seed/photo7/600/800', caption: 'City at night', hobby: 'photography', order: 7 },
      { url: 'https://picsum.photos/seed/photo8/800/600', caption: 'Autumn colors', hobby: 'photography', order: 8 },
    ],
  })

  // Hobby Photos — Sports
  await prisma.hobbyPhoto.createMany({
    data: [
      { url: 'https://picsum.photos/seed/sport1/800/600', caption: 'Morning run', hobby: 'sports', order: 1 },
      { url: 'https://picsum.photos/seed/sport2/800/600', caption: 'Cycling route', hobby: 'sports', order: 2 },
      { url: 'https://picsum.photos/seed/sport3/800/600', caption: 'Race day', hobby: 'sports', order: 3 },
      { url: 'https://picsum.photos/seed/sport4/800/600', caption: 'Trail running', hobby: 'sports', order: 4 },
    ],
  })

  console.log('Seed data inserted successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
