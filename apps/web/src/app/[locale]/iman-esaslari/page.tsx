import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Book, Heart, Star, Users, Globe, ArrowRight } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo.faithPrinciples' })
  
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function FaithPrinciplesPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale, namespace: 'faithPrinciples' })
  
  const principleKeys = ['allah', 'angels', 'books', 'prophets', 'afterlife', 'destiny']
  const icons = [Star, Users, Book, Heart, Globe, Star]
  const colors = [
    'bg-yellow-100 text-yellow-800',
    'bg-blue-100 text-blue-800', 
    'bg-green-100 text-green-800',
    'bg-red-100 text-red-800',
    'bg-purple-100 text-purple-800',
    'bg-indigo-100 text-indigo-800'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-4">
          {t('introTitle')}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t('introText')}
        </p>
        <div className="bg-white rounded-lg p-4 border-l-4 border-islamic-green">
          <p className="text-gray-800 font-medium">
            <strong>Hadis-i Şerif:</strong> "{t('hadithText')}"
          </p>
        </div>
      </div>

      {/* Faith Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {principleKeys.map((key, index) => {
          const Icon = icons[index]
          const color = colors[index]
          
          return (
            <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${color} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t(`principles.${key}.title`)}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t(`principles.${key}.description`)}
                </p>
              </div>

              {/* Details */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Detaylar:</h4>
                <ul className="space-y-2">
                  {(t.raw(`principles.${key}.details`) as string[]).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-islamic-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* Importance Section */}
      <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-6">
          {params.locale === 'tr' ? 'İman Esaslarının Önemi' : 
           params.locale === 'en' ? 'Importance of Faith Principles' : 
           'Bedeutung der Glaubensprinzipien'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {params.locale === 'tr' ? 'Neden Önemli?' : 
               params.locale === 'en' ? 'Why Important?' : 
               'Warum wichtig?'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Kalbi temizler ve huzur verir' : 
                 params.locale === 'en' ? 'Purifies the heart and brings peace' : 
                 'Reinigt das Herz und bringt Frieden'}
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Hayata anlam ve yön verir' : 
                 params.locale === 'en' ? 'Gives meaning and direction to life' : 
                 'Gibt dem Leben Sinn und Richtung'}
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Evrenle uyum içinde yaşamayı sağlar' : 
                 params.locale === 'en' ? 'Enables living in harmony with the universe' : 
                 'Ermöglicht ein Leben in Harmonie mit dem Universum'}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {params.locale === 'tr' ? 'Nasıl Öğrenilir?' : 
               params.locale === 'en' ? 'How to Learn?' : 
               'Wie lernen?'}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Book className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Kur\'an-ı Kerim okuyarak' : 
                 params.locale === 'en' ? 'By reading the Quran' : 
                 'Durch das Lesen des Quran'}
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Bilgili kişilerden öğrenerek' : 
                 params.locale === 'en' ? 'By learning from knowledgeable people' : 
                 'Durch Lernen von sachkundigen Menschen'}
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                {params.locale === 'tr' ? 'Düzenli ibadet ederek' : 
                 params.locale === 'en' ? 'Through regular worship' : 
                 'Durch regelmäßige Anbetung'}
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
          {params.locale === 'tr' ? 'İman esaslarını öğrendikten sonra namaz kılmayı öğrenmeye başlayabilirsiniz.' : 
           params.locale === 'en' ? 'After learning the principles of faith, you can start learning how to pray.' : 
           'Nach dem Erlernen der Glaubensprinzipien können Sie anfangen zu lernen, wie man betet.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/namaz-rehberi`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg font-semibold hover:bg-islamic-cream transition-colors"
          >
            {params.locale === 'tr' ? 'Namaz Rehberi' : 
             params.locale === 'en' ? 'Prayer Guide' : 
             'Gebetsanleitung'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={`/${params.locale}/30-gunluk-plan`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
          >
            {params.locale === 'tr' ? '30 Günlük Plan' : 
             params.locale === 'en' ? '30-Day Plan' : 
             '30-Tage-Plan'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/islam-nedir`}
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
        >
          <h3 className="font-semibold text-gray-900 mb-2">
            {params.locale === 'tr' ? 'İslam Nedir?' : 
             params.locale === 'en' ? 'What is Islam?' : 
             'Was ist Islam?'}
          </h3>
          <p className="text-gray-600 text-sm">
            {params.locale === 'tr' ? 'İslam\'ın temel kavramlarını öğrenin' : 
             params.locale === 'en' ? 'Learn the basic concepts of Islam' : 
             'Lernen Sie die Grundkonzepte des Islam'}
          </p>
        </Link>
        <Link
          href={`/${params.locale}/gunluk-hayat`}
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
        >
          <h3 className="font-semibold text-gray-900 mb-2">
            {params.locale === 'tr' ? 'Günlük Hayat' : 
             params.locale === 'en' ? 'Daily Life' : 
             'Tägliches Leben'}
          </h3>
          <p className="text-gray-600 text-sm">
            {params.locale === 'tr' ? 'Müslüman olarak günlük yaşam rehberi' : 
             params.locale === 'en' ? 'Daily life guide as a Muslim' : 
             'Leitfaden für das tägliche Leben als Muslim'}
          </p>
        </Link>
        <Link
          href={`/${params.locale}/sss`}
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200"
        >
          <h3 className="font-semibold text-gray-900 mb-2">
            {params.locale === 'tr' ? 'Sık Sorulan Sorular' : 
             params.locale === 'en' ? 'FAQ' : 
             'Häufig gestellte Fragen'}
          </h3>
          <p className="text-gray-600 text-sm">
            {params.locale === 'tr' ? 'Merak ettiğiniz soruların cevapları' : 
             params.locale === 'en' ? 'Answers to your questions' : 
             'Antworten auf Ihre Fragen'}
          </p>
        </Link>
      </div>
    </div>
  )
}

