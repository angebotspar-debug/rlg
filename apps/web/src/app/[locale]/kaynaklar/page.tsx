import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Book, Video, Globe, Download, Star, Users, Clock } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

interface Resource {
  id: string
  title: string
  description: string
  url: string
  type: 'book' | 'website' | 'video' | 'app' | 'pdf'
  category: 'kuran' | 'hadis' | 'fiqh' | 'siyer' | 'dua' | 'genel'
  language: string[]
  rating: number
  isExternal: boolean
}

const resources: Resource[] = [
  // Kur'an Kaynakları
  {
    id: '1',
    title: 'Kur\'an-ı Kerim Türkçe Meal',
    description: 'Diyanet İşleri Başkanlığı\'nın resmi Kur\'an-ı Kerim meali. Güvenilir ve anlaşılır çeviri.',
    url: 'https://kuran.diyanet.gov.tr',
    type: 'website',
    category: 'kuran',
    language: ['tr'],
    rating: 5,
    isExternal: true
  },
  {
    id: '2',
    title: 'Quran.com',
    description: 'Çok dilli Kur\'an okuma ve dinleme platformu. Farklı kıraat ve meal seçenekleri.',
    url: 'https://quran.com',
    type: 'website',
    category: 'kuran',
    language: ['tr', 'en', 'de'],
    rating: 5,
    isExternal: true
  },
  
  // Hadis Kaynakları
  {
    id: '3',
    title: 'Sahih-i Buhari',
    description: 'İslam\'ın en güvenilir hadis kitaplarından biri. Yeni Müslümanlar için temel kaynak.',
    url: '/tr/sahih-buhari',
    type: 'book',
    category: 'hadis',
    language: ['tr'],
    rating: 5,
    isExternal: false
  },
  {
    id: '4',
    title: 'Sunnah.com',
    description: 'İngilizce hadis koleksiyonu. Sahih hadislerin güvenilir çevirileri.',
    url: 'https://sunnah.com',
    type: 'website',
    category: 'hadis',
    language: ['en'],
    rating: 5,
    isExternal: true
  },
  
  // Fıkıh Kaynakları
  {
    id: '5',
    title: 'Yeni Müslümanlar İçin Fıkıh',
    description: 'Günlük ibadetler ve İslami hükümler hakkında pratik bilgiler.',
    url: '/tr/fiqh-guide',
    type: 'pdf',
    category: 'fiqh',
    language: ['tr'],
    rating: 4,
    isExternal: false
  },
  
  // Siyer Kaynakları
  {
    id: '6',
    title: 'Hz. Muhammed\'in Hayatı',
    description: 'Peygamber Efendimizin hayatı ve örnekliği hakkında kapsamlı kaynak.',
    url: '/tr/siyer',
    type: 'book',
    category: 'siyer',
    language: ['tr'],
    rating: 5,
    isExternal: false
  },
  
  // Dua Kaynakları
  {
    id: '7',
    title: 'Günlük Dualar',
    description: 'Yeni Müslümanlar için temel dualar ve anlamları.',
    url: '/tr/daily-duas',
    type: 'pdf',
    category: 'dua',
    language: ['tr', 'en'],
    rating: 4,
    isExternal: false
  },
  
  // Genel Kaynaklar
  {
    id: '8',
    title: 'İslamHouse.com',
    description: 'Çok dilli İslami kaynak platformu. Kitaplar, sesli dersler ve makaleler.',
    url: 'https://islamhouse.com',
    type: 'website',
    category: 'genel',
    language: ['tr', 'en', 'de'],
    rating: 4,
    isExternal: true
  },
  {
    id: '9',
    title: 'Muslim Pro App',
    description: 'Namaz vakitleri, kıble yönü, Kur\'an okuma ve daha fazlası için mobil uygulama.',
    url: 'https://muslimpro.com',
    type: 'app',
    category: 'genel',
    language: ['tr', 'en', 'de'],
    rating: 4,
    isExternal: true
  }
]

const categories = {
  kuran: { title: 'Kur\'an-ı Kerim', icon: Book, color: 'bg-green-100 text-green-800' },
  hadis: { title: 'Hadis Kitapları', icon: Book, color: 'bg-blue-100 text-blue-800' },
  fiqh: { title: 'Fıkıh ve Hükümler', icon: Book, color: 'bg-purple-100 text-purple-800' },
  siyer: { title: 'Siyer ve Tarih', icon: Users, color: 'bg-orange-100 text-orange-800' },
  dua: { title: 'Dua ve Zikir', icon: Book, color: 'bg-pink-100 text-pink-800' },
  genel: { title: 'Genel Kaynaklar', icon: Globe, color: 'bg-gray-100 text-gray-800' }
}

const typeIcons = {
  book: Book,
  website: Globe,
  video: Video,
  app: Download,
  pdf: Download
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Kaynaklar | İslam Rehberi',
    description: 'İslam\'ı öğrenmek için güvenilir kaynaklar. Kitaplar, web siteleri, uygulamalar ve daha fazlası.',
  }
}

export default async function ResourcesPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Kaynaklar
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İslam'ı öğrenmek için güvenilir ve kaliteli kaynaklar. Kitaplar, web siteleri, 
          uygulamalar ve PDF dosyaları ile bilginizi derinleştirin.
        </p>
      </header>

      {/* Resource Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon
          const categoryResources = resources.filter(resource => resource.category === key)
          
          return (
            <div key={key} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {categoryResources.length} kaynak
              </p>
            </div>
          )
        })}
      </div>

      {/* Resources by Category */}
      <div className="space-y-12">
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categoryResources = resources.filter(resource => resource.category === categoryKey)
          const Icon = category.icon
          
          if (categoryResources.length === 0) return null
          
          return (
            <section key={categoryKey} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Section Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${category.color} mr-3`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryResources.map((resource) => {
                    const TypeIcon = typeIcons[resource.type]
                    
                    return (
                      <div key={resource.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        {/* Resource Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            <TypeIcon className="h-5 w-5 text-gray-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              {resource.title}
                            </h3>
                          </div>
                          {resource.isExternal && (
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {resource.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            {/* Rating */}
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < resource.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Languages */}
                            <div className="flex items-center space-x-1">
                              {resource.language.map((lang) => (
                                <span
                                  key={lang}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                >
                                  {lang.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Type Badge */}
                          <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                            {resource.type === 'book' && 'Kitap'}
                            {resource.type === 'website' && 'Web Sitesi'}
                            {resource.type === 'video' && 'Video'}
                            {resource.type === 'app' && 'Uygulama'}
                            {resource.type === 'pdf' && 'PDF'}
                          </span>
                        </div>

                        {/* Action Button */}
                        <div>
                          {resource.isExternal ? (
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                            >
                              {resource.type === 'website' && 'Siteyi Ziyaret Et'}
                              {resource.type === 'app' && 'Uygulamayı İndir'}
                              {resource.type === 'video' && 'Videoyu İzle'}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          ) : (
                            <Link
                              href={resource.url}
                              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                            >
                              {resource.type === 'book' && 'Kitabı Oku'}
                              {resource.type === 'pdf' && 'PDF\'i İndir'}
                              <Download className="ml-2 h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Recommendation Section */}
      <div className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Yeni Müslümanlar İçin Öneriler
        </h2>
        <p className="text-lg mb-6 opacity-90">
          İslam'ı öğrenmeye yeni başlıyorsanız, bu sırayla kaynaklarımızı incelemenizi öneririz.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold mb-2">Temel Bilgiler</h3>
            <p className="text-sm opacity-90">İslam Nedir? makalesini okuyun</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold mb-2">Kur'an-ı Kerim</h3>
            <p className="text-sm opacity-90">Türkçe meal ile başlayın</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold mb-2">Günlük İbadetler</h3>
            <p className="text-sm opacity-90">Namaz ve dua öğrenin</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/30-gunluk-plan`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Clock className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            30 Günlük Plan
          </h3>
          <p className="text-gray-600 text-sm">
            Sistematik öğrenme programı
          </p>
        </Link>

        <Link
          href={`/${params.locale}/sss`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Book className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Sık Sorulan Sorular
          </h3>
          <p className="text-gray-600 text-sm">
            Merak ettiğiniz soruların cevapları
          </p>
        </Link>

        <Link
          href={`/${params.locale}/iletisim`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Users className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İletişim
          </h3>
          <p className="text-gray-600 text-sm">
            Sorularınız için bizimle iletişime geçin
          </p>
        </Link>
      </div>
    </div>
  )
}
