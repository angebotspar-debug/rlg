import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CheckCircle, Clock, Star, ArrowRight, BookOpen, Heart } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: '30 Günlük Başlangıç Planı | İslam Rehberi',
    description: 'Yeni Müslümanlar için hazırlanmış 30 günlük adım adım İslam öğrenme planı. Temel bilgilerden günlük hayata kadar.',
  }
}

const weeklyPlans = [
  {
    week: 1,
    title: 'Temel Bilgiler',
    description: 'İslam\'ın temellerini öğrenin',
    color: 'bg-blue-100 text-blue-800',
    days: [
      { day: 1, title: 'İslam Nedir?', topics: ['İslam\'ın anlamı', 'Temel prensipler', 'Kelime-i Şehadet'] },
      { day: 2, title: 'Allah\'a İman', topics: ['Tevhid inancı', 'Allah\'ın sıfatları', 'Şirk\'ten kaçınma'] },
      { day: 3, title: 'Peygamber Sevgisi', topics: ['Hz. Muhammed (s.a.v.)', 'Peygamber\'in hayatı', 'Sünnet\'in önemi'] },
      { day: 4, title: 'Kur\'an-ı Kerim', topics: ['Kur\'an\'ın önemi', 'Temel sureler', 'Okuma adabı'] },
      { day: 5, title: 'İman Esasları', topics: ['6 iman esası', 'Ahiret inancı', 'Kader inancı'] },
      { day: 6, title: 'İslam\'ın Şartları', topics: ['5 şart', 'Şehadet', 'Namaz'] },
      { day: 7, title: 'Hafta Değerlendirmesi', topics: ['Öğrenilenlerin tekrarı', 'Sorular', 'Pekiştirme'] }
    ]
  },
  {
    week: 2,
    title: 'İbadetlere Başlangıç',
    description: 'Temel ibadetleri öğrenin',
    color: 'bg-green-100 text-green-800',
    days: [
      { day: 8, title: 'Temizlik ve Abdest', topics: ['Temizlik kuralları', 'Abdest alma', 'Gusül abdesti'] },
      { day: 9, title: 'Namaz Vakitleri', topics: ['5 vakit namaz', 'Ezan', 'Kıble yönü'] },
      { day: 10, title: 'Namaz Öğrenme 1', topics: ['Niyet', 'Tekbir', 'Sübhaneke duası'] },
      { day: 11, title: 'Namaz Öğrenme 2', topics: ['Fatiha suresi', 'Rükû', 'Secde'] },
      { day: 12, title: 'Namaz Öğrenme 3', topics: ['Tahiyyat', 'Salavat', 'Selam'] },
      { day: 13, title: 'İlk Namaz Denemesi', topics: ['2 rekat namaz', 'Pratik yapma', 'Hata düzeltme'] },
      { day: 14, title: 'Hafta Değerlendirmesi', topics: ['Namaz pratiği', 'Sorular', 'Pekiştirme'] }
    ]
  },
  {
    week: 3,
    title: 'Günlük Hayat',
    description: 'İslami yaşam tarzını benimseyin',
    color: 'bg-purple-100 text-purple-800',
    days: [
      { day: 15, title: 'Helal-Haram', topics: ['Helal gıdalar', 'Haram gıdalar', 'Şüpheli durumlar'] },
      { day: 16, title: 'Aile İlişkileri', topics: ['Anne-baba hakları', 'Eş hakları', 'Çocuk terbiyesi'] },
      { day: 17, title: 'Sosyal İlişkiler', topics: ['Komşu hakları', 'Arkadaşlık', 'Toplumsal sorumluluk'] },
      { day: 18, title: 'İş ve Ticaret', topics: ['Helal kazanç', 'Dürüstlük', 'Faiz yasağı'] },
      { day: 19, title: 'Ahlak ve Adab', topics: ['Güzel ahlak', 'Sabır', 'Şükür'] },
      { day: 20, title: 'Günlük Dualar', topics: ['Sabah duaları', 'Akşam duaları', 'Yemek duaları'] },
      { day: 21, title: 'Hafta Değerlendirmesi', topics: ['Yaşam tarzı', 'Alışkanlıklar', 'Gelişim'] }
    ]
  },
  {
    week: 4,
    title: 'Derinleşme ve Pekiştirme',
    description: 'Bilgilerinizi pekiştirin ve ilerleyin',
    color: 'bg-orange-100 text-orange-800',
    days: [
      { day: 22, title: 'Zekat ve Sadaka', topics: ['Zekat nedir', 'Sadaka', 'Yardımlaşma'] },
      { day: 23, title: 'Oruç', topics: ['Oruç nedir', 'Ramazan', 'Oruç adabı'] },
      { day: 24, title: 'Hac ve Umre', topics: ['Hac nedir', 'Umre', 'Kutsal yerler'] },
      { day: 25, title: 'İslam Tarihi', topics: ['Peygamber dönemi', 'Sahabe', 'İslam\'ın yayılışı'] },
      { day: 26, title: 'Kur\'an Okuma', topics: ['Arapça harfler', 'Tecvid kuralları', 'Meal okuma'] },
      { day: 27, title: 'Dua ve Zikir', topics: ['Dua adabı', 'Tesbih', 'İstiğfar'] },
      { day: 28, title: 'Toplum ve Hizmet', topics: ['Müslüman toplum', 'Hizmet', 'Davet'] }
    ]
  },
  {
    week: 5,
    title: 'Gelecek Planları',
    description: 'İleriye dönük hedefler belirleyin',
    color: 'bg-red-100 text-red-800',
    days: [
      { day: 29, title: 'Öğrenme Planı', topics: ['Gelecek hedefler', 'Kaynak belirleme', 'Mentor bulma'] },
      { day: 30, title: 'Değerlendirme ve Kutlama', topics: ['30 günün değerlendirmesi', 'Başarılar', 'Gelecek adımlar'] }
    ]
  }
]

export default async function ThirtyDayPlanPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          30 Günlük Başlangıç Planı
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Yeni Müslümanlar için özel olarak hazırlanmış adım adım öğrenme programı. 
          Her gün yeni bir konu ile İslam'ı sistematik olarak öğrenin.
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-4">
          Bu Plan Nasıl Çalışır?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu 30 günlük plan, İslam'ın temellerinden başlayarak günlük hayata kadar 
              her konuyu kapsayacak şekilde tasarlanmıştır. Her hafta farklı bir tema 
              üzerine odaklanır.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Her gün 15-30 dakika ayırın</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Kendi hızınızda ilerleyin</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Sorularınızı not alın</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-islamic-green mb-3">
              Plan Özellikleri:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-islamic-green mr-2" />
                <span className="text-gray-700">30 gün, 5 hafta</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-islamic-green mr-2" />
                <span className="text-gray-700">Günde 15-30 dakika</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-islamic-green mr-2" />
                <span className="text-gray-700">Başlangıç seviyesi</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-islamic-green mr-2" />
                <span className="text-gray-700">Kapsamlı içerik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Plans */}
      <div className="space-y-12">
        {weeklyPlans.map((week) => (
          <div key={week.week} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Week Header */}
            <div className={`p-6 ${week.color.replace('text-', 'bg-').replace('-800', '-50')} border-b border-gray-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {week.week}. Hafta: {week.title}
                  </h2>
                  <p className="text-gray-700">
                    {week.description}
                  </p>
                </div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${week.color} font-bold text-2xl`}>
                  {week.week}
                </div>
              </div>
            </div>

            {/* Days */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {week.days.map((day) => (
                  <div key={day.day} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-islamic-green text-white rounded-full text-sm font-bold mr-3">
                        {day.day}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {day.title}
                      </h3>
                    </div>
                    <ul className="space-y-1">
                      {day.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-islamic-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Başarılı Olmak İçin İpuçları
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Öğrenme Stratejileri:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Her gün aynı saatte çalışın</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Öğrendiklerinizi not alın</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Sorularınızı bir yere yazın</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Pratik yapmayı ihmal etmeyin</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-4">
              Motivasyon İçin:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Sabırlı olun, acele etmeyin</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Başarılarınızı kutlayın</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Diğer Müslümanlarla iletişim kurun</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Dua etmeyi unutmayın</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Bugün Başlayın!
        </h2>
        <p className="text-lg mb-6 opacity-90">
          30 günlük yolculuğunuza bugün başlayın. Her gün yeni bir şey öğrenmenin 
          heyecanını yaşayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/islam-nedir`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            1. Gün: İslam Nedir?
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href={`/${params.locale}/sss`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-islamic-green transition-colors font-semibold"
          >
            Sorularım Var
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/iman-esaslari`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Star className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İman Esasları
          </h3>
          <p className="text-gray-600 text-sm">
            İslam'ın temel inanç esasları
          </p>
        </Link>

        <Link
          href={`/${params.locale}/namaz-rehberi`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Clock className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Namaz Rehberi
          </h3>
          <p className="text-gray-600 text-sm">
            Adım adım namaz öğrenme
          </p>
        </Link>

        <Link
          href={`/${params.locale}/ogrenme-yollari`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <BookOpen className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Öğrenme Yolları
          </h3>
          <p className="text-gray-600 text-sm">
            Sistematik öğrenme programları
          </p>
        </Link>
      </div>
    </div>
  )
}
