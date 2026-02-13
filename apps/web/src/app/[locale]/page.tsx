import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Clock, Star } from 'lucide-react'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo.home' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-islamic-cream to-white rounded-lg mb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-islamic-green mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
          <Link
            href="/tr/islam-nedir"
            className="inline-flex items-center px-8 py-4 bg-islamic-green text-white rounded-lg hover:bg-opacity-90 transition-colors text-lg font-semibold"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            {t('home.getStarted')}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Adım Adım Öğrenme</h3>
          <p className="text-gray-600">
            İslam'ın temel konularını sıralı ve anlaşılır şekilde öğrenin.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-secondary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Çok Dilli İçerik</h3>
          <p className="text-gray-600">
            Türkçe, İngilizce ve Almanca dillerinde kapsamlı rehber.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-islamic-green" />
          </div>
          <h3 className="text-xl font-semibold mb-2">30 Günlük Plan</h3>
          <p className="text-gray-600">
            Yeni Müslümanlar için özel hazırlanmış başlangıç programı.
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('home.featuredArticles')}
          </h2>
          <Link
            href="/tr/makaleler"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Tümünü Gör →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample featured articles */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-500">Öne Çıkan</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">İslam Nedir?</h3>
              <p className="text-gray-600 mb-4">
                İslam dininin temel prensiplerini ve anlamını öğrenin.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>5 dakika okuma</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  Başlangıç
                </span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-500">Öne Çıkan</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Namaz Nasıl Kılınır?</h3>
              <p className="text-gray-600 mb-4">
                Namazın adımlarını ve önemini detaylı şekilde öğrenin.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>8 dakika okuma</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  Başlangıç
                </span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-500">Öne Çıkan</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">30 Günlük Başlangıç Planı</h3>
              <p className="text-gray-600 mb-4">
                Yeni Müslümanlar için hazırlanmış adım adım rehber.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>12 dakika okuma</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Orta
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('home.learningPaths')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">
              Temel İslam Bilgisi
            </h3>
            <p className="text-primary-700 mb-4">
              İslam'ın temel kavramlarını ve ibadetlerini öğrenin.
            </p>
            <div className="flex items-center text-sm text-primary-600 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>7 ders • 2 saat</span>
            </div>
            <Link
              href="/tr/ogrenme-yolu/temel-islam"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Başla →
            </Link>
          </div>

          <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Günlük İbadetler
            </h3>
            <p className="text-secondary-700 mb-4">
              Namaz, oruç ve diğer günlük ibadetleri öğrenin.
            </p>
            <div className="flex items-center text-sm text-secondary-600 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>5 ders • 1.5 saat</span>
            </div>
            <Link
              href="/tr/ogrenme-yolu/gunluk-ibadetler"
              className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
            >
              Başla →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
