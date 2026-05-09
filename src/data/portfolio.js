export const personal = {
  name: 'Eshan Kumar Jain',
  role: 'Business Data Analyst',
  subtitle: 'MSc Data Science & Analytics',
  bio: 'Business Data Analyst with 2+ years at HDFC Bank leveraging SQL, Power BI, and PostgreSQL to deliver KPI dashboards, data pipelines, and actionable insights. Reduced operational turnaround by 25%, cut manual reporting effort by 40%, and improved data accuracy by 30%. Currently deepening ML and statistical modelling expertise at Maynooth University.',
  location: 'Maynooth, Ireland',
  email: 'eshanjain552@gmail.com',
  phone: '+353 899816869',
  uniEmail: 'ESHANJAIN.2026@mumail.ie',
  linkedin: 'https://www.linkedin.com/in/eshan-kumar-jain-a140921b6/',
  github: 'https://github.com/Coolboy-786',
  cvUrl: 'Eshan_Jain_Kumar_data_resume.pdf',
  photo: 'Photo_univ.jpg',
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '1.5M€', label: 'Daily Volume Managed' },
    { value: '40%', label: 'Reporting Effort Cut' },
    { value: '30%', label: 'Data Accuracy Gain' },
  ],
}

export const projects = [
  {
    num: '01',
    title: 'Multi-Class Skin Disease Classification',
    desc: 'Built a 3-stage ML pipeline (semantic segmentation → CNN feature extraction → ensemble evaluation) to classify 23 skin conditions. Achieved 93.2% accuracy via transfer learning, hyperparameter tuning, and stratified k-fold cross-validation — outperforming baseline CNN by 7.4 percentage points.',
    tags: ['Python', 'TensorFlow', 'CNN', 'MobileNetV2', 'Scikit-learn', 'Transfer Learning'],
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Coolboy-786/University-Final-year-project.git',
    code: 'https://github.com/Coolboy-786/University-Final-year-project.git',
  },
  {
    num: '02',
    title: 'Customer Shopping Trends — Full-Stack Analytics',
    desc: 'End-to-end analytics solution: ingested and normalised retail data in PostgreSQL, authored SQL queries to compute KPIs (customer lifetime value, category revenue share, seasonal demand), and built an interactive Power BI dashboard with RFM segmentation and time-series trend analysis.',
    tags: ['Python', 'PostgreSQL', 'Power BI', 'SQL', 'Pandas', 'RFM Analysis'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Coolboy-786',
    code: 'https://github.com/Coolboy-786',
  },
  {
    num: '03',
    title: 'Diwali Sales & Music Store SQL Analytics',
    desc: 'Conducted EDA and statistical segmentation on 10,000+ transaction records to surface top-revenue demographics and highest-selling products. Authored advanced SQL queries (CTEs, subqueries, window functions) to analyse genre revenue, artist performance, and purchase frequency metrics.',
    tags: ['Python', 'Pandas', 'Seaborn', 'PostgreSQL', 'SQL', 'EDA'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70',
    demo: 'https://github.com/Coolboy-786',
    code: 'https://github.com/Coolboy-786',
  },
]

export const experience = [
  {
    role: 'Business Data Analyst',
    org: 'HDFC Bank Ltd',
    location: 'Mumbai, India',
    period: 'Jul 2023 — Jul 2025',
    type: 'work',
    points: [
      'Developed Power BI dashboards tracking throughput, SLA adherence, and error rates for API Integration & Customised Statements initiatives processing EUR 1.5M+ daily — enabling senior management to cut decision turnaround by 20%',
      'Wrote complex SQL queries (CTEs, window functions, subqueries) and designed PostgreSQL data pipelines for UAT across 5+ major product releases, reducing data reconciliation errors by 30%',
      'Applied SQL-based cohort analysis and trend modelling to identify process bottlenecks, achieving a 25% reduction in average turnaround time across 50+ stakeholders',
      'Partnered with 5+ developers and architects to translate business requirements into data specs within Agile, JIRA, and ServiceNow workflows, improving sprint delivery accuracy',
      'Led all EPFO development projects end-to-end, achieving 100% regulatory compliance across data handling, audit trails, and reporting pipelines',
    ],
    chips: ['SQL', 'PostgreSQL', 'Power BI', 'DAX', 'Python', 'JIRA', 'Agile', 'ETL'],
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
    label: 'Analysis & BI',
    skills: [
      { name: 'SQL / PostgreSQL', pct: 92 },
      { name: 'Power BI & DAX', pct: 88 },
      { name: 'Python (Pandas, NumPy)', pct: 90 },
      { name: 'Excel & R', pct: 78 },
    ],
  },
  {
    label: 'Machine Learning',
    skills: [
      { name: 'Classification & Regression', pct: 85 },
      { name: 'CNNs & Deep Learning', pct: 82 },
      { name: 'Feature Engineering', pct: 84 },
      { name: 'A/B Testing & Statistics', pct: 80 },
    ],
  },
  {
    label: 'Data Engineering',
    skills: [
      { name: 'ETL Pipelines', pct: 85 },
      { name: 'Data Cleaning & Wrangling', pct: 90 },
      { name: 'Reporting Automation', pct: 86 },
      { name: 'UAT Execution', pct: 88 },
    ],
  },
  {
    label: 'Libraries & Tools',
    skills: [
      { name: 'Scikit-learn / TensorFlow / PyTorch', pct: 82 },
      { name: 'Matplotlib / Seaborn / Plotly', pct: 85 },
      { name: 'Git, JIRA, ServiceNow', pct: 90 },
      { name: 'Agile / SDLC', pct: 92 },
    ],
  },
]
