import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Home, Users, Utensils, ShoppingCart, BookOpen, Sun, Moon } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Günlük Müslüman Hayatı | İslam Rehberi',
    description: 'Müslüman yaşam tarzı, helal-haram, aile hayatı, iş hayatı ve sosyal ilişkiler hakkında rehber.',
  }
}

const dailyLifeAreas = [
  {
    id: 1,
    title: 'Aile Hayatı',
    description: 'İslam\'da aile değerleri, eş-çocuk ilişkileri ve aile içi sorumluluklar.',
    icon: Home,
    color: 'bg-pink-100 text-pink-800',
    topics: [
      'Anne-baba hakları',
      'Eş hakları ve sorumlulukları',
      'Çocuk terbiyesi',
      'Akraba ilişkileri'
    ]
  },
  {
    id: 2,
    title: 'Beslenme ve Helal Gıda',
    description: 'İslam\'da helal-haram gıdalar, beslenme adabı ve yemek duaları.',
    icon: Utensils,
    color: 'bg-green-100 text-green-800',
    topics: [
      'Helal et ve kesim kuralları',
      'Haram gıdalar (domuz, alkol)',
      'Yemek adabı ve duaları',
      'Oruç ve beslenme'
    ]
  },
  {
    id: 3,
    title: 'İş ve Ticaret',
    description: 'İslami iş ahlakı, helal kazanç, ticaret kuralları ve çalışma hayatı.',
    icon: ShoppingCart,
    color: 'bg-blue-100 text-blue-800',
    topics: [
      'Helal kazanç prensipleri',
      'Faiz yasağı',
      'Dürüst ticaret',
      'İş yerinde namaz'
    ]
  },
  {
    id: 4,
    title: 'Sosyal İlişkiler',
    description: 'Komşuluk, arkadaşlık, toplumsal sorumluluklar ve sosyal adalet.',
    icon: Users,
    color: 'bg-purple-100 text-purple-800',
    topics: [
      'Komşu hakları',
      'Arkadaş seçimi',
      'Toplumsal yardımlaşma',
      'Adalet ve merhamet'
    ]
  },
  {
    id: 5,
    title: 'Kişisel Gelişim',
    description: 'İlim öğrenme, ahlaki gelişim, sabır ve şükür gibi manevi değerler.',
    icon: BookOpen,
    color: 'bg-yellow-100 text-yellow-800',
    topics: [
      'İlim öğrenmenin önemi',
      'Güzel ahlak (Hüsn-ü hulk)',
      'Sabır ve şükür',
      'Tevazu ve alçakgönüllülük'
    ]
  },
  {
    id: 6,
    title: 'Günlük İbadetler',
    description: 'Namaz dışındaki günlük ibadetler, zikir, dua ve Kur\'an okuma.',
    icon: Heart,
    color: 'bg-red-100 text-red-800',
    topics: [
      'Sabah-akşam zikirleri',
      'Günlük dualar',
      'Kur\'an okuma adabı',
      'İstiğfar ve tövbe'
    ]
  }
]

const dailySchedule = [
  {
    time: 'Sabah',
    icon: Sun,
    activities: [
      'Fecir namazı',
      'Sabah zikirleri',
      'Kur\'an okuma',
      'Güne başlama duası'
    ]
  },
  {
    time: 'Gündüz',
    icon: Sun,
    activities: [
      'Öğle ve ikindi namazları',
      'Helal kazanç için çalışma',
      'Aile ve sosyal sorumluluklar',
      'İlim öğrenme'
    ]
  },
  {
    time: 'Akşam',
    icon: Moon,
    activities: [
      'Akşam ve yatsı namazları',
      'Aile zamanı',
      'Akşam zikirleri',
      'Günün muhasebesi'
    ]
  }
]

export default async function DailyLifePage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Günlük Müslüman Hayatı
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İslam'ın günlük hayatımıza nasıl rehberlik ettiğini öğrenin. Aile, iş, sosyal ilişkiler 
          ve kişisel gelişim konularında İslami perspektif.
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-4">
          İslam Bir Yaşam Tarzıdır
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          İslam sadece ibadetlerle sınırlı değildir. Hayatın her alanında rehberlik eden 
          kapsamlı bir yaşam tarzıdır. Aile hayatından iş hayatına, beslenme alışkanlıklarından 
          sosyal ilişkilere kadar her konuda yol gösterir.
        </p>
        <div className="bg-white rounded-lg p-4 border-l-4 border-islamic-green">
          <p className="text-gray-800 font-medium">
            <strong>Hadis-i Şerif:</strong> "Dünya ahiretin tarlasıdır." - Bu dünyada yaptığımız 
            her şey ahiret hayatımızı etkiler.
          </p>
        </div>
      </div>

      {/* Daily Life Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Hayatın Temel Alanları
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dailyLifeAreas.map((area) => {
            const Icon = area.icon
            
            return (
              <div key={area.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${area.color} mr-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Topics */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Temel Konular:
                  </h4>
                  <ul className="space-y-2">
                    {area.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Müslümanın Günlük Programı
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dailySchedule.map((period, index) => {
            const Icon = period.icon
            
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-green text-white rounded-full mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {period.time}
                </h3>
                <ul className="space-y-2 text-left">
                  {period.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Practical Guidelines */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Pratik Yaşam Rehberi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Helal Yaşam İlkeleri:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Allah'ın rızasını her işte gözetmek</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Helal kazanç elde etmek</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Dürüst ve güvenilir olmak</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>İnsanlara faydalı olmak</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Kaçınılması Gerekenler:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full mt-0.5 mr-2 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>Faiz ve haram kazanç</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full mt-0.5 mr-2 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>Yalan ve aldatma</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full mt-0.5 mr-2 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>İsraf ve savurganlık</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 border-2 border-red-500 rounded-full mt-0.5 mr-2 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>Kötü arkadaşlık</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-12 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          İslami Yaşamı Benimseyin
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Günlük hayatınızı İslami değerlerle şekillendirmek için daha fazla bilgi edinin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/30-gunluk-plan`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            30 Günlük Plan
          </Link>
          <Link
            href={`/${params.locale}/sss`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-islamic-green transition-colors font-semibold"
          >
            Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/namaz-rehberi`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Namaz Rehberi
          </h3>
          <p className="text-gray-600 text-sm">
            Günlük ibadetlerinizi düzenleyin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/iman-esaslari`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <BookOpen className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İman Esasları
          </h3>
          <p className="text-gray-600 text-sm">
            İnancınızı güçlendirin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/kaynaklar`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Users className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Kaynaklar
          </h3>
          <p className="text-gray-600 text-sm">
            Daha fazla bilgi için kaynaklar
          </p>
        </Link>
      </div>
    </div>
  )
}
