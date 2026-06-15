export interface AchievementItem {
  title: string
  issuer?: string
  description?: string
}

export interface PersonAchievements {
  name: string
  achievements: AchievementItem[]
}

const achievementsData: PersonAchievements[] = [
  {
    name: "Shekhar",
    achievements: [
      {
        title: "AWS Certified Cloud Practitioner"
      },
      // {
      //   title: "Google Cloud Digital Leader"
      // }
    ]
  }
]

export default achievementsData