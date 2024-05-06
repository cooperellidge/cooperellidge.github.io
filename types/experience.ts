export interface PositionItem {
  title: string
  bio: string
  tenure?: string
}

export interface JobItem {
  company: string
  positions: PositionItem[]
}

interface Link {
  href: string
  display?: string
}

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  blog?: Link
  deploy?: Link
  source?: Link
}

export interface ExperienceConfig {
  jobs: JobItem[]
  projects: ProjectItem[]
}

