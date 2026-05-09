export const personal = {
  name: 'Eshan Kumar Jain',
  role: 'Business Data Analyst',
  subtitle: 'MSc Data Science & Analytics',
  bio: "Results-driven Data Analyst with 2+ years of experience in fintech, currently pursuing a Master's in Data Science & Analytics at Maynooth University. I bridge the gap between complex data and real business decisions — through ML models, SQL pipelines, and stakeholder-ready insights.",
  location: 'Lucan / Maynooth, Ireland',
  email: 'eshanjain552@gmail.com',
  phone: '+353 899816869',
  uniEmail: 'ESHANJAIN.2026@mumail.ie',
  linkedin: 'https://www.linkedin.com/in/eshan-kumar-jain-a140921b6/',
  github: 'https://github.com/Coolboy-786',
  cvUrl: 'Eshan_Kumar_Jain_CV.pdf',
  photo: 'Photo_univ.jpg',
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '1.5M€', label: 'Daily Volume Managed' },
    { value: '25%', label: 'TAT Reduction' },
    { value: '50+', label: 'Stakeholders' },
  ],
}

export const projects = [
  {
    num: '01',
    title: 'Multi-Class Skin Disease Classification',
    desc: 'Ensemble MobileNetV2 & ShuffleNet CNN model for automated dermatology diagnosis. Achieved improved classification accuracy across 10+ disease categories using transfer learning and data augmentation.',
    tags: ['Python', 'CNN', 'MobileNetV2', 'TensorFlow', 'Machine Learning'],
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Coolboy-786/University-Final-year-project.git',
    code: 'https://github.com/Coolboy-786/University-Final-year-project.git',
  },
  {
    num: '02',
    title: 'Ashlesha Astronomy Club Website',
    desc: 'Designed and built an interactive platform for the VNIT Nagpur astronomy club — featuring quiz modules, event listings, and responsive UI to engage students with space science.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Darshan110801/Astro-quiz.git',
    code: 'https://github.com/Darshan110801/Astro-quiz.git',
  },
  {
    num: '03',
    title: 'Student Banking System',
    desc: 'Comprehensive C++ banking application with full account management, transaction history, and file-based persistence. Applied OOP design patterns for modular, maintainable code.',
    tags: ['C++', 'OOP', 'File Handling', 'Data Structures'],
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Coolboy-786/student-Banking-Project.git',
    code: 'https://github.com/Coolboy-786/student-Banking-Project.git',
  },
]

export const experience = [
  {
    role: 'Manager — Tech & Digital Business Data Analyst',
    org: 'HDFC Bank Ltd',
    location: 'Mumbai, India',
    period: 'Jul 2023 — Jul 2025',
    type: 'work',
    points: [
      'Spearheaded API Integration & Customised Statements teams handling ~1.5 million EUR in daily transaction volume',
      'Collaborated with 50+ cross-functional stakeholders, reducing turnaround time by 25% through process clarity and workflow optimisation',
      'Translated complex business requirements into detailed technical specs for a team of 5+ developers and architects',
      'Designed and executed SQL-based test plans; conducted UAT for multiple major releases ensuring high-quality deliverables',
      'Orchestrated all EPFO development projects ensuring 100% regulatory compliance for government-facing portals',
      'Managed full SDLC using Agile, JIRA, and ServiceNow across 3 business units',
    ],
    chips: ['SQL', 'JIRA', 'ServiceNow', 'Agile', 'API Integration', 'UAT', 'SDLC'],
  },
]

export const education = [
  {
    degree: 'MSc Data Science and Analytics',
    org: 'Maynooth University, Ireland',
    period: '2025 — 2026 (Expected)',
    type: 'edu',
    points: [
      'Machine Learning, Statistical Methods, Data Mining, Data Analytics',
    ],
    chips: ['ML', 'Statistical Analysis', 'Python', 'R'],
  },
  {
    degree: 'BTech Computer Science & Engineering',
    org: 'VNIT Nagpur, India',
    period: '2019 — 2023 | CGPA: 7.54/10',
    type: 'edu',
    points: [
      'VP of Ashlesha Astronomy Club',
      'Gold Medalist — International Mathematics & Science Olympiads (IMO & ISO)',
      'AIR 6253 JEE Advanced 2019 | 99.57 percentile JEE Main 2019',
    ],
    chips: ['C++', 'OOP', 'Algorithms', 'Data Structures'],
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', pct: 90 },
      { name: 'SQL', pct: 88 },
      { name: 'R', pct: 75 },
      { name: 'C++', pct: 70 },
    ],
  },
  {
    label: 'Data Science & ML',
    skills: [
      { name: 'Machine Learning', pct: 82 },
      { name: 'Statistical Analysis', pct: 85 },
      { name: 'Data Visualisation', pct: 85 },
      { name: 'Predictive Modelling', pct: 78 },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'JIRA / ServiceNow', pct: 90 },
      { name: 'Git & Linux', pct: 80 },
      { name: 'MongoDB', pct: 70 },
      { name: 'API Integration', pct: 85 },
    ],
  },
  {
    label: 'Methodologies',
    skills: [
      { name: 'Agile / Scrum', pct: 90 },
      { name: 'SDLC Management', pct: 88 },
      { name: 'UAT & Test Design', pct: 85 },
      { name: 'Data Mining', pct: 80 },
    ],
  },
]
