import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Droplets, Heart, ArrowRight, Sun, Sunset, Moon } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo.prayerGuide' })
  
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function PrayerGuidePage({ params }: PageProps) {
  // Enable static rendering
  setRequestLocale(params.locale)
  
  const content = {
    tr: {
      title: 'Namaz Rehberi',
      description: 'Namaz nasıl kılınır? Abdest nasıl alınır? Yeni Müslümanlar için adım adım namaz rehberi.',
      prayerTimes: [
        { name: 'Sabah Namazı', time: 'Fecir', icon: Sun, description: 'Güneş doğmadan önce kılınan namaz' },
        { name: 'Öğle Namazı', time: 'Zuhr', icon: Sun, description: 'Güneş tepe noktasından sonra' },
        { name: 'İkindi Namazı', time: 'Asr', icon: Sun, description: 'Öğleden sonra kılınan namaz' },
        { name: 'Akşam Namazı', time: 'Maghrib', icon: Sunset, description: 'Güneş battıktan sonra' },
        { name: 'Yatsı Namazı', time: 'Isha', icon: Moon, description: 'Akşam alacası kaybolunca' }
      ],
      ablutionSteps: [
        'Besmele çekerek niyetlenir',
        'Eller üç kez yıkanır',
        'Ağız üç kez çalkalanır',
        'Burun üç kez temizlenir',
        'Yüz üç kez yıkanır',
        'Kollar dirseklere kadar yıkanır',
        'Başın üzeri mesh edilir',
        'Ayaklar topuklara kadar yıkanır'
      ]
    },
    en: {
      title: 'Prayer Guide',
      description: 'How to pray? How to perform ablution? Step-by-step prayer guide for new Muslims.',
      prayerTimes: [
        { name: 'Fajr Prayer', time: 'Dawn', icon: Sun, description: 'Prayer before sunrise' },
        { name: 'Dhuhr Prayer', time: 'Noon', icon: Sun, description: 'Prayer after sun reaches zenith' },
        { name: 'Asr Prayer', time: 'Afternoon', icon: Sun, description: 'Afternoon prayer' },
        { name: 'Maghrib Prayer', time: 'Sunset', icon: Sunset, description: 'Prayer after sunset' },
        { name: 'Isha Prayer', time: 'Night', icon: Moon, description: 'Prayer after twilight disappears' }
      ],
      ablutionSteps: [
        'Begin with Bismillah and intention',
        'Wash hands three times',
        'Rinse mouth three times',
        'Clean nose three times',
        'Wash face three times',
        'Wash arms up to elbows',
        'Wipe over the head',
        'Wash feet up to ankles'
      ]
    },
    de: {
      title: 'Gebetsanleitung',
      description: 'Wie betet man? Wie führt man die Waschung durch? Schritt-für-Schritt Gebetsanleitung für neue Muslime.',
      prayerTimes: [
        { name: 'Fajr-Gebet', time: 'Morgendämmerung', icon: Sun, description: 'Gebet vor Sonnenaufgang' },
        { name: 'Dhuhr-Gebet', time: 'Mittag', icon: Sun, description: 'Gebet nach Sonnenhöchststand' },
        { name: 'Asr-Gebet', time: 'Nachmittag', icon: Sun, description: 'Nachmittagsgebet' },
        { name: 'Maghrib-Gebet', time: 'Sonnenuntergang', icon: Sunset, description: 'Gebet nach Sonnenuntergang' },
        { name: 'Isha-Gebet', time: 'Nacht', icon: Moon, description: 'Gebet nach Verschwinden der Dämmerung' }
      ],
      ablutionSteps: [
        'Mit Bismillah und Absicht beginnen',
        'Hände dreimal waschen',
        'Mund dreimal ausspülen',
        'Nase dreimal reinigen',
        'Gesicht dreimal waschen',
        'Arme bis zu den Ellbogen waschen',
        'Über den Kopf streichen',
        'Füße bis zu den Knöcheln waschen'
      ]
    }
  }

  const pageContent = content[params.locale as keyof typeof content] || content.tr

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {pageContent.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {pageContent.description}
        </p>
      </header>

      {/* Prayer Times */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Namaz Vakitleri' : 
           params.locale === 'en' ? 'Prayer Times' : 
           'Gebetszeiten'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageContent.prayerTimes.map((prayer, index) => {
            const Icon = prayer.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-islamic-green text-white mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{prayer.name}</h3>
                    <p className="text-sm text-gray-600">{prayer.time}</p>
                  </div>
                </div>
                <p className="text-gray-700">{prayer.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Ablution Guide */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Abdest Nasıl Alınır?' : 
           params.locale === 'en' ? 'How to Perform Ablution?' : 
           'Wie führt man die Waschung durch?'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                {params.locale === 'tr' ? 'Abdest Adımları' : 
                 params.locale === 'en' ? 'Ablution Steps' : 
                 'Waschungsschritte'}
              </h3>
            </div>
            <ol className="space-y-3">
              {pageContent.ablutionSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-islamic-green text-white text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {params.locale === 'tr' ? 'Önemli Notlar' : 
               params.locale === 'en' ? 'Important Notes' : 
               'Wichtige Hinweise'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Temiz su kullanın' : 
                 params.locale === 'en' ? 'Use clean water' : 
                 'Verwenden Sie sauberes Wasser'}
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Sağ taraftan başlayın' : 
                 params.locale === 'en' ? 'Start from the right side' : 
                 'Beginnen Sie von der rechten Seite'}
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Hiçbir yeri atlamayın' : 
                 params.locale === 'en' ? 'Do not skip any part' : 
                 'Lassen Sie keinen Teil aus'}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-islamic-green text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {params.locale === 'tr' ? 'Öğrenmeye Devam Edin' : 
           params.locale === 'en' ? 'Continue Learning' : 
           'Weiter lernen'}
        </h2>
        <p className="text-islamic-cream mb-6">
          {params.locale === 'tr' ? 'Namaz öğrendikten sonra günlük Müslüman hayatını keşfedin.' : 
           params.locale === 'en' ? 'After learning prayer, discover daily Muslim life.' : 
           'Nach dem Erlernen des Gebets entdecken Sie das tägliche muslimische Leben.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/gunluk-hayat`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg font-semibold hover:bg-islamic-cream transition-colors"
          >
            {params.locale === 'tr' ? 'Günlük Hayat' : 
             params.locale === 'en' ? 'Daily Life' : 
             'Tägliches Leben'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={`/${params.locale}/iman-esaslari`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
          >
            {params.locale === 'tr' ? 'İman Esasları' : 
             params.locale === 'en' ? 'Faith Principles' : 
             'Glaubensprinzipien'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
