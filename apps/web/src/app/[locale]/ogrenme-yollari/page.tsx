import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, BookOpen, CheckCircle, ArrowRight, Users } from 'lucide-react'
import { prisma } from '@/lib/db'
import { LearningPathWithLessons } from '@/types'

interface PageProps {
  params: {
    locale: string
  }
}

async function getLearningPaths(locale: string): Promise<LearningPathWithLessons[]> {
  try {
    const paths = await prisma.learningPath.findMany({
      where: {
        language: locale.toUpperCase() as any,
        published: true
      },
      include: {
        lessons: {
          include: {
            article: {
              include: {
                category: true
              }
            }
          },
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { order: 'asc' }
    })
    return paths
  } catch (error) {
    console.error('Error fetching learning paths:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Öğrenme Yolları | İslam Rehberi',
    description: 'İslam\'ı sistematik olarak öğrenmek için hazırlanmış adım adım öğrenme yolları.',
  }
}

export default async function LearningPathsPage({ params }: PageProps) {
  const learningPaths = await getLearningPaths(params.locale)
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Öğrenme Yolları
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İslam'ı sistematik ve anlaşılır şekilde öğrenmek için hazırlanmış adım adım rehberler. 
          Her yol, belirli bir konuya odaklanarak derinlemesine bilgi sunar.
        </p>
      </header>

      {/* Learning Paths */}
      {learningPaths.length > 0 ? (
        <div className="space-y-8">
          {learningPaths.map((path, index) => (
            <div key={path.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Path Header */}
              <div className={`p-6 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-primary-50 to-primary-100' 
                  : 'bg-gradient-to-r from-secondary-50 to-secondary-100'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white mr-3 ${
                        index % 2 === 0 ? 'bg-primary-600' : 'bg-secondary-600'
                      }`}>
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {path.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {path.description}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>{path.lessons.length} ders</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {path.lessons.reduce((total, lesson) => total + (lesson.article.readingTime || 0), 0)} dakika
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Başlangıç seviyesi</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${params.locale}/ogrenme-yollari/${path.id}`}
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      index % 2 === 0
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-secondary-600 text-white hover:bg-secondary-700'
                    }`}
                  >
                    Başla
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Lessons Preview */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Bu yolda öğrenecekleriniz:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {path.lessons.slice(0, 6).map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {lesson.article.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {lesson.article.readingTime} dakika • {lesson.article.category.title}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {path.lessons.length > 6 && (
                    <div className="flex items-center justify-center p-3 text-sm text-gray-500 bg-gray-50 rounded-lg">
                      +{path.lessons.length - 6} ders daha...
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href={`/${params.locale}/ogrenme-yollari/${path.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Tüm dersleri görüntüle
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Henüz Öğrenme Yolu Yok
          </h3>
          <p className="text-gray-600 mb-6">
            Bu dil için henüz öğrenme yolu oluşturulmamış. Yakında eklenecek!
          </p>
          <Link
            href={`/${params.locale}/makaleler`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Makaleleri İncele
          </Link>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Kendi Hızınızda Öğrenin
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Her öğrenme yolu, kendi hızınızda ilerleyebilmeniz için tasarlanmıştır. 
          İstediğiniz zaman başlayabilir, istediğiniz zaman duraklatabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/30-gunluk-plan`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            30 Günlük Başlangıç Planı
          </Link>
          <Link
            href={`/${params.locale}/sss`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-islamic-green transition-colors font-semibold"
          >
            Sık Sorulan Sorular
          </Link>
        </div>
      </div>
    </div>
  )
}
