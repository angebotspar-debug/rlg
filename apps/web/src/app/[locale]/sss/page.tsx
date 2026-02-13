import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Book, Heart } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'temel' | 'ibadet' | 'hayat' | 'diger'
}

const faqData: FAQItem[] = [
  // Temel Sorular
  {
    id: '1',
    category: 'temel',
    question: 'İslam nedir ve nasıl bir dindir?',
    answer: 'İslam, Arapça "barış, güvenlik ve teslimiyet" anlamına gelen bir kelimedir. Allah\'a tam teslimiyet ve O\'nun emirlerine boyun eğme anlamında kullanılır. İslam, Hz. Muhammed (s.a.v.) aracılığıyla insanlığa gönderilen son ilahi mesajdır ve evrensel bir dindir.'
  },
  {
    id: '2',
    category: 'temel',
    question: 'Müslüman olmak için ne yapmam gerekiyor?',
    answer: 'Müslüman olmak için Kelime-i Şehadet\'i söylemeniz yeterlidir: "Eşhedü en lâ ilâhe illallahu ve eşhedü enne Muhammeden abduhû ve rasûluh" (Şahitlik ederim ki Allah\'tan başka ilah yoktur ve şahitlik ederim ki Muhammed O\'nun kulu ve elçisidir). Bu sözü kalben inanarak ve anlamını bilerek söylemek İslam\'a girmeniz için yeterlidir.'
  },
  {
    id: '3',
    category: 'temel',
    question: 'İslam\'ın beş şartı nelerdir?',
    answer: 'İslam\'ın beş şartı şunlardır: 1) Şehadet getirmek (İman ettiğini söylemek), 2) Namaz kılmak (günde beş vakit), 3) Zekat vermek (maldan pay ayırmak), 4) Oruç tutmak (Ramazan ayında), 5) Hac yapmak (gücü yetene Kabe\'yi ziyaret etmek).'
  },
  
  // İbadet Soruları
  {
    id: '4',
    category: 'ibadet',
    question: 'Namaz nasıl kılınır? Yeni Müslüman olarak nereden başlamalıyım?',
    answer: 'Namaza başlamadan önce abdest almalısınız. Namaz, belirli dualar ve hareketlerle kılınır. Yeni Müslüman olarak önce 2 rekatlık namazları öğrenmenizi öneririz. Yakınınızdaki camiye giderek imam veya müezzinden yardım isteyebilir, namaz öğrenme kurslarına katılabilirsiniz.'
  },
  {
    id: '5',
    category: 'ibadet',
    question: 'Abdest nasıl alınır?',
    answer: 'Abdest şu sırayla alınır: 1) Besmele çekin, 2) Ellerinizi bileklerinize kadar yıkayın (3 kez), 3) Ağzınızı çalkalayın (3 kez), 4) Burnunuzu temizleyin (3 kez), 5) Yüzünüzü yıkayın (3 kez), 6) Kollarınızı dirseklerinize kadar yıkayın (3 kez), 7) Başınızı meshedin (1 kez), 8) Ayaklarınızı topuklarınıza kadar yıkayın (3 kez).'
  },
  {
    id: '6',
    category: 'ibadet',
    question: 'Namaz vakitleri nelerdir?',
    answer: 'Beş vakit namaz şunlardır: 1) Sabah namazı (fecirden güneş doğumuna kadar), 2) Öğle namazı (güneş tepe noktasından ikindiye kadar), 3) İkindi namazı (öğleden sonra güneş batımına kadar), 4) Akşam namazı (güneş battıktan sonra), 5) Yatsı namazı (akşam ezanından fecre kadar). Vakitler mevsime ve bulunduğunuz yere göre değişir.'
  },
  
  // Günlük Hayat
  {
    id: '7',
    category: 'hayat',
    question: 'Müslüman olarak günlük hayatımda nelere dikkat etmeliyim?',
    answer: 'Günlük hayatınızda şunlara dikkat edebilirsiniz: Helal yemek tüketmek, beş vakit namaz kılmaya çalışmak, dürüst olmak, iyilik yapmak, kötülükten kaçınmak, ailene ve çevrendeki insanlara iyi davranmak, sabırlı olmak ve Allah\'ı hatırlamak. Yavaş yavaş öğrenip uygulayabilirsiniz.'
  },
  {
    id: '8',
    category: 'hayat',
    question: 'Helal ve haram yiyecekler nelerdir?',
    answer: 'Haram yiyecekler: Domuz eti, alkol, ölü hayvan, kan, Allah\'tan başkası adına kesilen hayvan. Helal et için hayvanın İslami usullere göre kesilmiş olması gerekir. Deniz ürünleri genellikle helaldir. Şüpheye düştüğünüzde araştırabilir veya bilgili kişilere sorabilirsiniz.'
  },
  
  // Diğer Sorular
  {
    id: '9',
    category: 'diger',
    question: 'Ailem Müslüman değil, onlarla ilişkim nasıl olmalı?',
    answer: 'İslam, anne babaya ve aileye saygı göstermeyi emreder. Müslüman olmayan ailenizle iyi ilişkiler kurabilir, onlara iyilik yapabilirsiniz. Sadece sizi dininizden alıkoymaya çalıştıklarında nazikçe reddetmelisiniz. Sabırlı olun ve güzel ahlakınızla örnek olun.'
  },
  {
    id: '10',
    category: 'diger',
    question: 'İslam\'ı öğrenmek için hangi kaynakları kullanmalıyım?',
    answer: 'Kur\'an-ı Kerim\'i okuyun (Türkçe mealini), güvenilir hadis kitaplarını inceleyin, yerel camideki derslere katılın, güvenilir İslami web sitelerini takip edin. Bu web sitesi de yeni Müslümanlar için hazırlanmış güvenilir bir kaynaktır. Ayrıca bilgili Müslümanlardan yardım isteyebilirsiniz.'
  }
]

const categories = {
  temel: { title: 'Temel Sorular', icon: Book, color: 'bg-blue-100 text-blue-800' },
  ibadet: { title: 'İbadet Soruları', icon: Heart, color: 'bg-green-100 text-green-800' },
  hayat: { title: 'Günlük Hayat', icon: MessageCircle, color: 'bg-purple-100 text-purple-800' },
  diger: { title: 'Diğer Sorular', icon: HelpCircle, color: 'bg-orange-100 text-orange-800' }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Sık Sorulan Sorular | İslam Rehberi',
    description: 'Yeni Müslümanların en çok merak ettiği sorular ve cevapları. İslam hakkında temel bilgiler.',
  }
}

export default async function FAQPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sık Sorulan Sorular
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Yeni Müslümanların en çok merak ettiği sorular ve detaylı cevapları. 
          Aradığınız soruyu bulamazsanız bizimle iletişime geçebilirsiniz.
        </p>
      </header>

      {/* FAQ Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon
          const categoryQuestions = faqData.filter(faq => faq.category === key)
          
          return (
            <div key={key} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {categoryQuestions.length} soru
              </p>
            </div>
          )
        })}
      </div>

      {/* FAQ Sections */}
      <div className="space-y-12">
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categoryQuestions = faqData.filter(faq => faq.category === categoryKey)
          const Icon = category.icon
          
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

              {/* Questions */}
              <div className="divide-y divide-gray-200">
                {categoryQuestions.map((faq) => (
                  <details key={faq.id} className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <ChevronDown className="h-5 w-5 text-gray-500 group-open:hidden" />
                        <ChevronUp className="h-5 w-5 text-gray-500 hidden group-open:block" />
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Sorunuz Burada Yok mu?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Merak ettiğiniz başka sorular varsa bizimle iletişime geçmekten çekinmeyin. 
          Size yardımcı olmaktan mutluluk duyarız.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/iletisim`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            İletişime Geç
          </Link>
          <Link
            href={`/${params.locale}/kaynaklar`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-islamic-green transition-colors font-semibold"
          >
            <Book className="mr-2 h-4 w-4" />
            Daha Fazla Kaynak
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/islam-nedir`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İslam Nedir?
          </h3>
          <p className="text-gray-600 text-sm">
            İslam dininin temel prensiplerini öğrenin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/30-gunluk-plan`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            30 Günlük Plan
          </h3>
          <p className="text-gray-600 text-sm">
            Yeni Müslümanlar için adım adım rehber
          </p>
        </Link>

        <Link
          href={`/${params.locale}/ogrenme-yollari`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
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
