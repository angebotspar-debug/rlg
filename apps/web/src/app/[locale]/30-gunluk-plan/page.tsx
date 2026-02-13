import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, BookOpen, Target, ArrowRight, CheckCircle, Clock, Users, Heart } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo.thirtyDayPlan' })
  
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ThirtyDayPlanPage({ params }: PageProps) {
  const content = {
    tr: {
      title: '30 Günlük Başlangıç Planı',
      description: 'Yeni Müslümanlar için 30 günlük adım adım öğrenme planı. İslam\'ı sistematik olarak öğrenin.',
      weeks: [
        {
          title: '1. Hafta: Temel Bilgiler',
          days: ['İslam nedir?', 'İman esasları', 'İslam\'ın şartları', 'Peygamber Efendimiz', 'Kur\'an-ı Kerim', 'Hadis nedir?', 'Müslüman kimdir?']
        },
        {
          title: '2. Hafta: İbadete Giriş',
          days: ['Abdest nasıl alınır?', 'Namaz nedir?', 'Sabah namazı', 'Öğle namazı', 'İkindi namazı', 'Akşam namazı', 'Yatsı namazı']
        },
        {
          title: '3. Hafta: Günlük Yaşam',
          days: ['Helal-haram', 'Aile hayatı', 'İş hayatı', 'Sosyal ilişkiler', 'Beslenme kuralları', 'Temizlik', 'Ahlak']
        },
        {
          title: '4. Hafta: Derinleşme',
          days: ['Zekât', 'Oruç', 'Hac', 'Dua etmek', 'Kur\'an okuma', 'İlim öğrenme', 'Toplum']
        },
        {
          title: '5. Hafta: Gelecek Planları',
          days: ['Öğrenmeye devam', 'Toplumla bağ', 'Aile kurma']
        }
      ],
      successTips: [
        'Her gün düzenli çalışın',
        'Anlamadığınız yerleri sorun',
        'Pratik yapmaya odaklanın',
        'Sabırlı olun'
      ]
    },
    en: {
      title: '30-Day Beginner Plan',
      description: '30-day step-by-step learning plan for new Muslims. Learn Islam systematically.',
      weeks: [
        {
          title: 'Week 1: Basic Knowledge',
          days: ['What is Islam?', 'Principles of faith', 'Pillars of Islam', 'Prophet Muhammad', 'The Quran', 'What is Hadith?', 'Who is a Muslim?']
        },
        {
          title: 'Week 2: Introduction to Worship',
          days: ['How to perform ablution?', 'What is prayer?', 'Fajr prayer', 'Dhuhr prayer', 'Asr prayer', 'Maghrib prayer', 'Isha prayer']
        },
        {
          title: 'Week 3: Daily Life',
          days: ['Halal-Haram', 'Family life', 'Work life', 'Social relations', 'Dietary rules', 'Cleanliness', 'Morality']
        },
        {
          title: 'Week 4: Deepening Knowledge',
          days: ['Zakat', 'Fasting', 'Hajj', 'Making dua', 'Reading Quran', 'Learning knowledge', 'Community']
        },
        {
          title: 'Week 5: Future Plans',
          days: ['Continue learning', 'Community connection', 'Starting a family']
        }
      ],
      successTips: [
        'Study regularly every day',
        'Ask about what you don\'t understand',
        'Focus on practice',
        'Be patient'
      ]
    },
    de: {
      title: '30-Tage-Anfängerplan',
      description: '30-tägiger Schritt-für-Schritt Lernplan für neue Muslime. Lernen Sie den Islam systematisch.',
      weeks: [
        {
          title: 'Woche 1: Grundwissen',
          days: ['Was ist Islam?', 'Glaubensprinzipien', 'Säulen des Islam', 'Prophet Muhammad', 'Der Quran', 'Was ist Hadith?', 'Wer ist ein Muslim?']
        },
        {
          title: 'Woche 2: Einführung in die Anbetung',
          days: ['Wie führt man die Waschung durch?', 'Was ist Gebet?', 'Fajr-Gebet', 'Dhuhr-Gebet', 'Asr-Gebet', 'Maghrib-Gebet', 'Isha-Gebet']
        },
        {
          title: 'Woche 3: Tägliches Leben',
          days: ['Halal-Haram', 'Familienleben', 'Arbeitsleben', 'Soziale Beziehungen', 'Ernährungsregeln', 'Sauberkeit', 'Moral']
        },
        {
          title: 'Woche 4: Vertiefung des Wissens',
          days: ['Zakat', 'Fasten', 'Hajj', 'Dua machen', 'Quran lesen', 'Wissen lernen', 'Gemeinschaft']
        },
        {
          title: 'Woche 5: Zukunftspläne',
          days: ['Weiter lernen', 'Gemeinschaftsverbindung', 'Familie gründen']
        }
      ],
      successTips: [
        'Täglich regelmäßig studieren',
        'Nach dem fragen, was Sie nicht verstehen',
        'Sich auf die Praxis konzentrieren',
        'Geduldig sein'
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

      {/* Plan Overview */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Plan Özellikleri' : 
           params.locale === 'en' ? 'Plan Features' : 
           'Plan-Eigenschaften'}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-islamic-green text-white mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">30 {params.locale === 'tr' ? 'Gün' : params.locale === 'en' ? 'Days' : 'Tage'}</h3>
            <p className="text-gray-600 text-sm">
              {params.locale === 'tr' ? 'Kapsamlı program' : 
               params.locale === 'en' ? 'Comprehensive program' : 
               'Umfassendes Programm'}
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {params.locale === 'tr' ? 'Adım Adım' : 
               params.locale === 'en' ? 'Step by Step' : 
               'Schritt für Schritt'}
            </h3>
            <p className="text-gray-600 text-sm">
              {params.locale === 'tr' ? 'Sistematik öğrenme' : 
               params.locale === 'en' ? 'Systematic learning' : 
               'Systematisches Lernen'}
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {params.locale === 'tr' ? 'Hedefli' : 
               params.locale === 'en' ? 'Goal-oriented' : 
               'Zielorientiert'}
            </h3>
            <p className="text-gray-600 text-sm">
              {params.locale === 'tr' ? 'Net hedefler' : 
               params.locale === 'en' ? 'Clear objectives' : 
               'Klare Ziele'}
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {params.locale === 'tr' ? 'Pratik' : 
               params.locale === 'en' ? 'Practical' : 
               'Praktisch'}
            </h3>
            <p className="text-gray-600 text-sm">
              {params.locale === 'tr' ? 'Uygulamalı öğrenme' : 
               params.locale === 'en' ? 'Applied learning' : 
               'Angewandtes Lernen'}
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'Haftalık Program' : 
           params.locale === 'en' ? 'Weekly Schedule' : 
           'Wöchentlicher Zeitplan'}
        </h2>
        <div className="space-y-8">
          {pageContent.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-islamic-green text-white p-6">
                <h3 className="text-xl font-bold">{week.title}</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-7 gap-4">
                  {week.days.map((day, dayIndex) => (
                    <div key={dayIndex} className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-islamic-cream text-islamic-green font-bold mb-2">
                        {weekIndex * 7 + dayIndex + 1}
                      </div>
                      <p className="text-sm text-gray-700">{day}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Tips */}
      <div className="mb-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-islamic-green mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {params.locale === 'tr' ? 'Başarı İpuçları' : 
               params.locale === 'en' ? 'Success Tips' : 
               'Erfolgstipps'}
            </h2>
          </div>
          <ul className="space-y-3">
            {pageContent.successTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-islamic-cream rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-islamic-green mr-3" />
            <h2 className="text-2xl font-bold text-islamic-green">
              {params.locale === 'tr' ? 'Günlük Süre' : 
               params.locale === 'en' ? 'Daily Duration' : 
               'Tägliche Dauer'}
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {params.locale === 'tr' ? 'Okuma' : 
                 params.locale === 'en' ? 'Reading' : 
                 'Lesen'}
              </span>
              <span className="font-semibold text-islamic-green">15-20 {params.locale === 'tr' ? 'dk' : params.locale === 'en' ? 'min' : 'Min'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {params.locale === 'tr' ? 'Pratik' : 
                 params.locale === 'en' ? 'Practice' : 
                 'Praxis'}
              </span>
              <span className="font-semibold text-islamic-green">10-15 {params.locale === 'tr' ? 'dk' : params.locale === 'en' ? 'min' : 'Min'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {params.locale === 'tr' ? 'Tekrar' : 
                 params.locale === 'en' ? 'Review' : 
                 'Wiederholung'}
              </span>
              <span className="font-semibold text-islamic-green">5-10 {params.locale === 'tr' ? 'dk' : params.locale === 'en' ? 'min' : 'Min'}</span>
            </div>
            <hr className="border-islamic-green" />
            <div className="flex justify-between items-center font-bold">
              <span className="text-islamic-green">
                {params.locale === 'tr' ? 'Toplam' : 
                 params.locale === 'en' ? 'Total' : 
                 'Gesamt'}
              </span>
              <span className="text-islamic-green">30-45 {params.locale === 'tr' ? 'dk' : params.locale === 'en' ? 'min' : 'Min'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-islamic-green text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {params.locale === 'tr' ? 'Öğrenmeye Başlayın' : 
           params.locale === 'en' ? 'Start Learning' : 
           'Mit dem Lernen beginnen'}
        </h2>
        <p className="text-islamic-cream mb-6">
          {params.locale === 'tr' ? 'İman esaslarını öğrenerek başlayın, sonra namaz rehberine geçin.' : 
           params.locale === 'en' ? 'Start by learning the principles of faith, then move on to the prayer guide.' : 
           'Beginnen Sie mit dem Erlernen der Glaubensprinzipien und gehen Sie dann zur Gebetsanleitung über.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/iman-esaslari`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg font-semibold hover:bg-islamic-cream transition-colors"
          >
            {params.locale === 'tr' ? 'İman Esasları' : 
             params.locale === 'en' ? 'Faith Principles' : 
             'Glaubensprinzipien'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={`/${params.locale}/namaz-rehberi`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
          >
            {params.locale === 'tr' ? 'Namaz Rehberi' : 
             params.locale === 'en' ? 'Prayer Guide' : 
             'Gebetsanleitung'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

