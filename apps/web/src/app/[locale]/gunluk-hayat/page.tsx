import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Home, Utensils, Briefcase, Users, BookOpen, Heart, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo.dailyLife' })
  
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function DailyLifePage({ params }: PageProps) {
  const content = {
    tr: {
      title: 'Günlük Müslüman Hayatı',
      description: 'Müslüman olarak günlük hayatta nelere dikkat edilmeli? Helal yaşam rehberi ve pratik öneriler.',
      lifeAreas: [
        { name: 'Aile Hayatı', icon: Home, description: 'Eş, çocuk ve aile ilişkileri' },
        { name: 'Beslenme', icon: Utensils, description: 'Helal gıda ve beslenme kuralları' },
        { name: 'İş Hayatı', icon: Briefcase, description: 'Çalışma hayatında İslami prensipler' },
        { name: 'Sosyal İlişkiler', icon: Users, description: 'Toplumsal yaşam ve arkadaşlık' },
        { name: 'Kişisel Gelişim', icon: BookOpen, description: 'Öğrenme ve kendini geliştirme' },
        { name: 'İbadet', icon: Heart, description: 'Günlük ibadetler ve zikir' }
      ],
      halalPrinciples: [
        'Helal kazanç elde etmek',
        'Dürüst ve güvenilir olmak',
        'Adaletli davranmak',
        'Yardımsever olmak'
      ],
      avoidThings: [
        'Faiz almak ve vermek',
        'Kumar oynamak',
        'Alkol tüketmek',
        'Yalan söylemek'
      ]
    },
    en: {
      title: 'Daily Muslim Life',
      description: 'What should be considered in daily life as a Muslim? Halal living guide and practical suggestions.',
      lifeAreas: [
        { name: 'Family Life', icon: Home, description: 'Spouse, children and family relationships' },
        { name: 'Nutrition', icon: Utensils, description: 'Halal food and dietary rules' },
        { name: 'Work Life', icon: Briefcase, description: 'Islamic principles in work life' },
        { name: 'Social Relations', icon: Users, description: 'Social life and friendship' },
        { name: 'Personal Development', icon: BookOpen, description: 'Learning and self-improvement' },
        { name: 'Worship', icon: Heart, description: 'Daily worship and remembrance' }
      ],
      halalPrinciples: [
        'Earning halal income',
        'Being honest and trustworthy',
        'Acting justly',
        'Being helpful'
      ],
      avoidThings: [
        'Taking and giving interest',
        'Gambling',
        'Consuming alcohol',
        'Lying'
      ]
    },
    de: {
      title: 'Tägliches muslimisches Leben',
      description: 'Was sollte im täglichen Leben als Muslim beachtet werden? Halal-Lebensführung und praktische Vorschläge.',
      lifeAreas: [
        { name: 'Familienleben', icon: Home, description: 'Ehepartner, Kinder und Familienbeziehungen' },
        { name: 'Ernährung', icon: Utensils, description: 'Halal-Nahrung und Ernährungsregeln' },
        { name: 'Arbeitsleben', icon: Briefcase, description: 'Islamische Prinzipien im Arbeitsleben' },
        { name: 'Soziale Beziehungen', icon: Users, description: 'Gesellschaftliches Leben und Freundschaft' },
        { name: 'Persönliche Entwicklung', icon: BookOpen, description: 'Lernen und Selbstverbesserung' },
        { name: 'Anbetung', icon: Heart, description: 'Tägliche Anbetung und Gedenken' }
      ],
      halalPrinciples: [
        'Halal-Einkommen erzielen',
        'Ehrlich und vertrauenswürdig sein',
        'Gerecht handeln',
        'Hilfsbereit sein'
      ],
      avoidThings: [
        'Zinsen nehmen und geben',
        'Glücksspiel',
        'Alkohol konsumieren',
        'Lügen'
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

      {/* Life Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Yaşam Alanları' : 
           params.locale === 'en' ? 'Life Areas' : 
           'Lebensbereiche'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageContent.lifeAreas.map((area, index) => {
            const Icon = area.icon
            const colors = [
              'bg-blue-100 text-blue-800',
              'bg-green-100 text-green-800',
              'bg-purple-100 text-purple-800',
              'bg-red-100 text-red-800',
              'bg-yellow-100 text-yellow-800',
              'bg-indigo-100 text-indigo-800'
            ]
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colors[index]} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
                  </div>
                </div>
                <p className="text-gray-700">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Halal vs Haram */}
      <div className="mb-12 grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-green-800">
              {params.locale === 'tr' ? 'Helal Yaşam İlkeleri' : 
               params.locale === 'en' ? 'Halal Living Principles' : 
               'Halal-Lebensprinzipien'}
            </h2>
          </div>
          <ul className="space-y-3">
            {pageContent.halalPrinciples.map((principle, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <XCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-800">
              {params.locale === 'tr' ? 'Kaçınılacaklar' : 
               params.locale === 'en' ? 'Things to Avoid' : 
               'Zu vermeidende Dinge'}
            </h2>
          </div>
          <ul className="space-y-3">
            {pageContent.avoidThings.map((thing, index) => (
              <li key={index} className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{thing}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Günlük Program Önerisi' : 
           params.locale === 'en' ? 'Daily Schedule Suggestion' : 
           'Täglicher Zeitplan Vorschlag'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {params.locale === 'tr' ? 'Sabah' : 
               params.locale === 'en' ? 'Morning' : 
               'Morgen'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• {params.locale === 'tr' ? 'Sabah namazı' : params.locale === 'en' ? 'Fajr prayer' : 'Fajr-Gebet'}</li>
              <li>• {params.locale === 'tr' ? 'Kur\'an okuma' : params.locale === 'en' ? 'Quran reading' : 'Quran lesen'}</li>
              <li>• {params.locale === 'tr' ? 'Dua ve zikir' : params.locale === 'en' ? 'Prayer and remembrance' : 'Gebet und Gedenken'}</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {params.locale === 'tr' ? 'Gündüz' : 
               params.locale === 'en' ? 'Daytime' : 
               'Tagsüber'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• {params.locale === 'tr' ? 'Öğle ve ikindi namazı' : params.locale === 'en' ? 'Dhuhr and Asr prayers' : 'Dhuhr- und Asr-Gebete'}</li>
              <li>• {params.locale === 'tr' ? 'Helal kazanç' : params.locale === 'en' ? 'Halal earning' : 'Halal-Einkommen'}</li>
              <li>• {params.locale === 'tr' ? 'İyi davranış' : params.locale === 'en' ? 'Good behavior' : 'Gutes Verhalten'}</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {params.locale === 'tr' ? 'Akşam' : 
               params.locale === 'en' ? 'Evening' : 
               'Abend'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• {params.locale === 'tr' ? 'Akşam ve yatsı namazı' : params.locale === 'en' ? 'Maghrib and Isha prayers' : 'Maghrib- und Isha-Gebete'}</li>
              <li>• {params.locale === 'tr' ? 'Aile zamanı' : params.locale === 'en' ? 'Family time' : 'Familienzeit'}</li>
              <li>• {params.locale === 'tr' ? 'İlim öğrenme' : params.locale === 'en' ? 'Learning knowledge' : 'Wissen lernen'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-islamic-green text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {params.locale === 'tr' ? 'Sistematik Öğrenme' : 
           params.locale === 'en' ? 'Systematic Learning' : 
           'Systematisches Lernen'}
        </h2>
        <p className="text-islamic-cream mb-6">
          {params.locale === 'tr' ? '30 günlük planımızla İslam\'ı adım adım öğrenin.' : 
           params.locale === 'en' ? 'Learn Islam step by step with our 30-day plan.' : 
           'Lernen Sie den Islam Schritt für Schritt mit unserem 30-Tage-Plan.'}
        </p>
        <Link
          href={`/${params.locale}/30-gunluk-plan`}
          className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg font-semibold hover:bg-islamic-cream transition-colors"
        >
          {params.locale === 'tr' ? '30 Günlük Plan' : 
           params.locale === 'en' ? '30-Day Plan' : 
           '30-Tage-Plan'}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

