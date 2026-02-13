import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, Droplets, Sun, Moon, ArrowRight, CheckCircle } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Namaz Rehberi | İslam Rehberi',
    description: 'Namaz kılmanın adımları, abdest alma, namaz vakitleri ve dualar. Yeni Müslümanlar için kapsamlı namaz rehberi.',
  }
}

const prayerTimes = [
  {
    name: 'Sabah (Fecir)',
    time: 'Fecir vaktinden güneş doğumuna kadar',
    rakats: '2 rekat farz + 2 rekat sünnet',
    icon: Sun,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    name: 'Öğle (Zuhr)',
    time: 'Güneş tepe noktasından ikindi vaktine kadar',
    rakats: '4 rekat farz + sünnetler',
    icon: Sun,
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    name: 'İkindi (Asr)',
    time: 'Öğleden sonra güneş batımına kadar',
    rakats: '4 rekat farz',
    icon: Sun,
    color: 'bg-amber-100 text-amber-800'
  },
  {
    name: 'Akşam (Maghrib)',
    time: 'Güneş battıktan sonra',
    rakats: '3 rekat farz + 2 rekat sünnet',
    icon: Moon,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Yatsı (Isha)',
    time: 'Akşam ezanından fecre kadar',
    rakats: '4 rekat farz + sünnetler',
    icon: Moon,
    color: 'bg-indigo-100 text-indigo-800'
  }
]

const ablutionSteps = [
  'Besmele çekin: "Bismillahirrahmanirrahim"',
  'Ellerinizi bileklerinize kadar yıkayın (3 kez)',
  'Ağzınızı çalkalayın (3 kez)',
  'Burnunuzu temizleyin (3 kez)',
  'Yüzünüzü yıkayın (3 kez)',
  'Kollarınızı dirseklerinize kadar yıkayın (3 kez)',
  'Başınızı meshedin (1 kez)',
  'Ayaklarınızı topuklarınıza kadar yıkayın (3 kez)'
]

const prayerSteps = [
  { step: 1, title: 'Niyet', description: 'Hangi namazı kılacağınıza niyet edin' },
  { step: 2, title: 'Tekbir', description: 'Ellerinizi kaldırarak "Allahu Ekber" deyin' },
  { step: 3, title: 'Sübhaneke', description: 'Açılış duasını okuyun' },
  { step: 4, title: 'Euzü-Besmele', description: 'Şeytandan sığınma ve besmele' },
  { step: 5, title: 'Fatiha', description: 'Fatiha suresini okuyun' },
  { step: 6, title: 'Sure', description: 'Bildiğiniz bir sure okuyun' },
  { step: 7, title: 'Rükû', description: 'Eğilerek rükû yapın' },
  { step: 8, title: 'Kıyam', description: 'Rükûdan doğrulun' },
  { step: 9, title: 'Secde', description: 'İki kez secde yapın' },
  { step: 10, title: 'Tahiyyat', description: 'Son oturuşta tahiyyat okuyun' },
  { step: 11, title: 'Salavat', description: 'Peygamberimize salavat getirin' },
  { step: 12, title: 'Selam', description: 'Sağa ve sola selam verin' }
]

export default async function PrayerGuidePage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Namaz Rehberi
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Namaz kılmanın adımları, abdest alma, namaz vakitleri ve dualar hakkında 
          kapsamlı rehber. Yeni Müslümanlar için hazırlanmış.
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-4">
          Namazın Önemi
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Namaz, İslam'ın beş şartından biridir ve Müslümanın Allah ile olan bağını 
          güçlendiren en önemli ibadettir. Günde beş vakit kılınır ve her namaz 
          belirli bir vakti vardır.
        </p>
        <div className="bg-white rounded-lg p-4 border-l-4 border-islamic-green">
          <p className="text-gray-800 font-medium">
            <strong>Kur'an-ı Kerim:</strong> "Namazı dosdoğru kılın, zekâtı verin ve 
            rükû edenlerle birlikte rükû edin." (Bakara, 43)
          </p>
        </div>
      </div>

      {/* Prayer Times */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Namaz Vakitleri
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayerTimes.map((prayer, index) => {
            const Icon = prayer.icon
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${prayer.color} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {prayer.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {index + 1}. Vakit
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 text-sm">
                  <Clock className="inline h-4 w-4 mr-1" />
                  {prayer.time}
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  <User className="inline h-4 w-4 mr-1" />
                  {prayer.rakats}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Ablution Guide */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Droplets className="h-8 w-8 text-blue-500 mr-3" />
          Abdest Nasıl Alınır?
        </h2>
        <p className="text-gray-600 mb-6">
          Namaza başlamadan önce abdest almak gerekir. Abdest, bedensel ve ruhsal temizliği sağlar.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Abdest Adımları:
            </h3>
            <ol className="space-y-3">
              {ablutionSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-islamic-green text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Önemli Notlar:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Her adımı dikkatli ve sakin yapın</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Su israfından kaçının</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Abdest duasını okuyun</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Temiz su kullanın</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prayer Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Namaz Kılmanın Adımları
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prayerSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-islamic-green text-white rounded-full text-sm font-bold mr-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Guide Link */}
      <div className="mb-12 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Detaylı Namaz Rehberi
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Namaz duaları, hareketler ve detaylı açıklamalar için kapsamlı rehberimizi inceleyin.
        </p>
        <Link
          href={`/${params.locale}/namaz-nasil-kilinir`}
          className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Detaylı Rehberi Oku
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Tips for Beginners */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Yeni Müslümanlar İçin Öneriler
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Başlangıç İçin:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Sabır gösterin, namaz öğrenmek zaman alır</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Önce 2 rekatlık namazları öğrenin</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Camideki imam veya müezzinden yardım isteyin</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Her gün biraz pratik yapın</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Öğrenme Sırası:
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-islamic-green text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>Abdest almayı öğrenin</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-islamic-green text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>Temel duaları ezberleyin</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-islamic-green text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>Namaz hareketlerini öğrenin</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-islamic-green text-white rounded-full text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <span>Namaz vakitlerini öğrenin</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/iman-esaslari`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <User className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İman Esasları
          </h3>
          <p className="text-gray-600 text-sm">
            İslam'ın temel inanç esaslarını öğrenin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/gunluk-hayat`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Sun className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Günlük Hayat
          </h3>
          <p className="text-gray-600 text-sm">
            Müslüman yaşam tarzını keşfedin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/sss`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <CheckCircle className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Sık Sorulan Sorular
          </h3>
          <p className="text-gray-600 text-sm">
            Namaz ile ilgili sorularınızın cevapları
          </p>
        </Link>
      </div>
    </div>
  )
}
