import { Article, Category, LearningPath, Lesson, Language, Level } from '@prisma/client'

export type { Language, Level }

export interface ArticleWithCategory extends Article {
  category: Category
}

export interface LearningPathWithLessons extends LearningPath {
  lessons: (Lesson & {
    article: ArticleWithCategory
  })[]
}

export interface MDXFrontmatter {
  title: string
  summary?: string
  slug: string
  language: Language
  categoryId: string
  readingTime?: number
  difficultyLevel?: Level
  seoTitle?: string
  seoDescription?: string
  published?: boolean
  featured?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface NavigationItem {
  href: string
  label: string
  children?: NavigationItem[]
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}
