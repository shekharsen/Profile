export interface ExperienceItem {
  role: string
  company: string
  location?: string
  duration: string
  points: string[]
}

export interface PersonExperience {
  name: string
  experiences: ExperienceItem[]
}

const experienceData: PersonExperience[] = [
  {
    name: "Shekhar",
    experiences: [
      {
        role: "Senior Software Engineer",
        company: "Capgemini Technology Services India LTD.",
        location: "Bengaluru, KA",
        duration: "Dec 2022 – Present",
        points: [
          "Engineered an AI-powered chatbot solution using client-specific datasets, automating nearly 65–75% of repetitive customer queries and reducing average response time from ~8 minutes to under a minute.",
          "Trained and optimized NLP/ML models on 15k+ historical conversation records, achieving approximately 80–88% intent recognition accuracy for context-aware interactions.",
          "Developed a responsive front-end interface using React.js, HTML, and CSS, improving customer engagement metrics by ~30% and reducing user drop-off during interactions.",
          "Integrated backend via REST APIs",
          "Architected a modular and extensible system design that reduced feature deployment effort by nearly 40% and simplified future enhancements.",
          "Executed extensive functional and edge-case testing across 150+ conversational workflows, reducing production issues by approximately 50% and ensuring a seamless user experience.",
        ]
      }
    ]
  }
]

export default experienceData