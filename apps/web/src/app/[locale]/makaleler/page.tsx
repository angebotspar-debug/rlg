import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, Search, Filter } from 'lucide-react'
import { prisma } from '@/lib/db'
import { ArticleWithCategory } from '@/types'

interface PageProps {
  params: {
    locale: string
  }
  searchParams: {
    category?: string
    difficulty?: string
    search?: string
  }
}

async function getArticles(locale: string, filters: {
  category?: string
  difficulty?: string
  search?: string
}): Promise<ArticleWithCategory[]> {
  try {
    const articles = await prisma.article.findMany({
      where: {
        language: locale.toUpperCase() as any,
        published: true,
        ...(filters.category && { categoryId: filters.category }),
        ...(filters.difficulty && { difficultyLevel: filters.difficulty.toUpperCase() as any }),
        ...(filters.search && {
          OR: [
            { title: { contains: filters.search, mode: 'insensitive' } },
            { summary: { contains: filters.search, mode: 'insensitive' } },
            { content: { contains: filters.search, mode: 'insensitive' } }
          ]
        })
      },
      include: {
        category: true
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    })
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

async function getCategories() {
  try {
    return await prisma.category.findMany({
      orderBy: { order: 'asc' }
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' })
  
  return {
    title: 'Tüm Makaleler | İslam Rehberi',
    description: 'İslam hakkında kapsamlı makaleler. Yeni Müslümanlar için hazırlanmış rehber içerikler.',
  }
}

export default async function ArticlesPage({ params, searchParams }: PageProps) {
  const articles = await getArticles(params.locale, searchParams)
  const categories = await getCategories()
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Tüm Makaleler
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          İslam'ın temel konularını öğrenmek için hazırlanmış kapsamlı makale koleksiyonu
        </p>
      </header>

      {/* Filters */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Makale ara..."
              defaultValue={searchParams.search}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select 
            defaultValue={searchParams.category || ''}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select 
            defaultValue={searchParams.difficulty || ''}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Tüm Seviyeler</option>
            <option value="beginner">Başlangıç</option>
            <option value="intermediate">Orta</option>
            <option value="advanced">İleri</option>
          </select>
        </div>
      </div>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {article.category.title}
                  </span>
                  {article.featured && (
                    <span className="ml-2 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Öne Çıkan
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link 
                    href={`/${params.locale}/${article.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                {/* Summary */}
                {article.summary && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readingTime} {t('common.readingTime')}</span>
                    </div>
                    
                    {article.difficultyLevel && (
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
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
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    href={`/${params.locale}/${article.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {t('common.readMore')} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Makale Bulunamadı
          </h3>
          <p className="text-gray-600 mb-6">
            Aradığınız kriterlere uygun makale bulunamadı. Lütfen farklı filtreler deneyin.
          </p>
          <Link
            href={`/${params.locale}`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          İslam'ı Öğrenme Yolculuğunuza Devam Edin
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Sistematik öğrenme için hazırlanmış öğrenme yollarımızı keşfedin
        </p>
        <Link
          href={`/${params.locale}/ogrenme-yollari`}
          className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Öğrenme Yollarını Keşfet
        </Link>
      </div>
    </div>
  )
}
