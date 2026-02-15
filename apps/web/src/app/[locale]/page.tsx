import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Clock, Star } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo.home' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function HomePage({ params: { locale } }: PageProps) {
  // Enable static rendering
  setRequestLocale(locale)
  
  const t = await getTranslations({ locale })

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-warm-white via-white to-islamic-cream/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-islamic-green rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-secondary-400 rotate-12"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-islamic-green rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-islamic-green/10 border border-islamic-green/20 rounded-full text-islamic-green text-sm font-medium mb-8 animate-fade-in">
              <Star className="mr-2 h-4 w-4" />
              Güvenilir İslami Rehber
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-islamic-green to-primary-600 bg-clip-text text-transparent">
                {t('home.title')}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-6 max-w-4xl mx-auto font-light leading-relaxed">
              {t('home.subtitle')}
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href={`/${locale}/islam-nedir`}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-islamic-green to-primary-600 text-white rounded-2xl hover:shadow-strong transition-all duration-300 text-lg font-semibold hover:scale-105"
              >
                <BookOpen className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t('home.getStarted')}
              </Link>
              
              <Link
                href={`/${locale}/30-gunluk-plan`}
                className="inline-flex items-center px-8 py-4 border-2 border-neutral-200 text-neutral-700 rounded-2xl hover:border-islamic-green hover:bg-islamic-cream/30 transition-all duration-300 text-lg font-semibold hover:scale-105"
              >
                <Clock className="mr-3 h-5 w-5" />
                30 Günlük Plan
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-islamic-green" />
                3 Dil Desteği
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4 text-islamic-green" />
                Kapsamlı İçerik
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-islamic-green" />
                Güvenilir Kaynaklar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Neden <span className="text-islamic-green">İslam Rehberi</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Modern yaklaşımla, güvenilir kaynaklardan hazırlanmış kapsamlı İslami rehber
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group text-center p-8 bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">Adım Adım Öğrenme</h3>
            <p className="text-neutral-600 leading-relaxed">
              İslam'ın temel konularını sıralı ve anlaşılır şekilde öğrenin. Her seviyeye uygun içerik.
            </p>
          </div>

          <div className="group text-center p-8 bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">Çok Dilli İçerik</h3>
            <p className="text-neutral-600 leading-relaxed">
              Türkçe, İngilizce ve Almanca dillerinde kapsamlı rehber. Herkes için erişilebilir.
            </p>
          </div>

          <div className="group text-center p-8 bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
            <div className="w-20 h-20 bg-gradient-to-br from-islamic-green to-islamic-light-green rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">30 Günlük Plan</h3>
            <p className="text-neutral-600 leading-relaxed">
              Yeni Müslümanlar için özel hazırlanmış başlangıç programı. Günlük adımlarla öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-neutral-50 to-islamic-cream/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Öne Çıkan <span className="text-islamic-green">İçerikler</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            İslam'ı öğrenmeye başlamak için en önemli konular
          </p>
          <Link
            href={`/${locale}/kaynaklar`}
            className="inline-flex items-center px-6 py-3 bg-islamic-green/10 text-islamic-green rounded-2xl hover:bg-islamic-green/20 transition-all duration-200 font-semibold"
          >
            Tüm İçerikleri Gör
            <BookOpen className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Article 1 */}
          <Link href={`/${locale}/islam-nedir`} className="group">
            <article className="bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-neutral-100 group-hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-islamic-green to-primary-600 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-islamic-green font-semibold">Temel Bilgiler</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-islamic-green transition-colors">İslam Nedir?</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  İslam dininin temel prensiplerini ve anlamını kapsamlı şekilde öğrenin.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">5 dakika okuma</span>
                  <span className="bg-islamic-green/10 text-islamic-green px-3 py-1 rounded-full text-sm font-medium">
                    Başlangıç
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Featured Article 2 */}
          <Link href={`/${locale}/namaz-rehberi`} className="group">
            <article className="bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-neutral-100 group-hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-secondary-600 font-semibold">İbadet</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-islamic-green transition-colors">Namaz Rehberi</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Namazın adımlarını ve önemini detaylı şekilde öğrenin.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">8 dakika okuma</span>
                  <span className="bg-secondary-500/10 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
                    Pratik
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Featured Article 3 */}
          <Link href={`/${locale}/30-gunluk-plan`} className="group">
            <article className="bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-neutral-100 group-hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-islamic-green rounded-full flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-primary-600 font-semibold">Yeni Başlayanlar</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-islamic-green transition-colors">30 Günlük Plan</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Yeni Müslümanlar için hazırlanmış adım adım başlangıç rehberi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">12 dakika okuma</span>
                  <span className="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    Kapsamlı
                  </span>
                </div>
              </div>
            </article>
          </Link>
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
