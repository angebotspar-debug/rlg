import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { prisma } from '@/lib/db'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { ArticleWithCategory } from '@/types'

interface PageProps {
  params: {
    locale: string
    slug: string[]
  }
}

async function getArticle(slug: string, locale: string): Promise<ArticleWithCategory | null> {
  try {
    const article = await prisma.article.findUnique({
      where: {
        slug_language: {
          slug: slug,
          language: locale.toUpperCase() as any
        }
      },
      include: {
        category: true
      }
    })
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug[0]
  const article = await getArticle(slug, params.locale)
  
  if (!article) {
    return {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı.'
    }
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.summary || undefined,
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.summary || undefined,
      type: 'article',
      publishedTime: article.createdAt.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
    }
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const slug = params.slug[0]
  const article = await getArticle(slug, params.locale)
  const t = await getTranslations({ locale: params.locale })

  if (!article) {
    notFound()
  }

  const readingTime = calculateReadingTime(article.content)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link 
          href={`/${params.locale}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.backToHome')}
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            {article.category.title}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        {article.summary && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.summary}
          </p>
        )}

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{readingTime} {t('common.readingTime')}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(article.createdAt)}</span>
          </div>
          
          {article.difficultyLevel && (
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                article.difficultyLevel === 'BEGINNER' 
                  ? 'bg-green-100 text-green-800'
                  : article.difficultyLevel === 'INTERMEDIATE'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {t(`common.difficulty.${article.difficultyLevel.toLowerCase()}`)}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div 
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
          className="leading-relaxed"
        />
      </article>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-islamic-cream rounded-lg p-6">
          <h3 className="text-lg font-semibold text-islamic-green mb-2">
            Bu makale faydalı oldu mu?
          </h3>
          <p className="text-gray-600 mb-4">
            İslam'ı öğrenme yolculuğunuzda size yardımcı olmaya devam edebilmemiz için geri bildirimlerinizi bekliyoruz.
          </p>
          <div className="flex gap-4">
            <Link
              href={`/${params.locale}`}
              className="inline-flex items-center px-4 py-2 bg-islamic-green text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href={`/${params.locale}/kaynaklar`}
              className="inline-flex items-center px-4 py-2 border border-islamic-green text-islamic-green rounded-lg hover:bg-islamic-green hover:text-white transition-colors"
            >
              Daha Fazla Kaynak
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
