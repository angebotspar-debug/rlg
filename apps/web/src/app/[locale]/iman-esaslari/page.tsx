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
  return {
    title: 'İman Esasları | İslam Rehberi',
    description: 'İslam\'ın altı temel inanç esası. Allah\'a, meleklere, kitaplara, peygamberlere, ahiret gününe ve kadere iman.',
  }
}

const faithPrinciples = [
  {
    id: 1,
    title: 'Allah\'a İman',
    description: 'Allah\'ın varlığına, birliğine ve eşsizliğine inanmak. O\'nun yaratıcı, rızık veren ve her şeye gücü yeten olduğuna iman etmek.',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-800',
    details: [
      'Allah\'ın varlığı ve birliği (Tevhid)',
      'Allah\'ın 99 güzel ismi (Esma-ül Hüsna)',
      'Allah\'ın sıfatları ve özellikleri',
      'Allah\'a ortak koşmamak (Şirk\'ten kaçınma)'
    ]
  },
  {
    id: 2,
    title: 'Meleklere İman',
    description: 'Allah\'ın nurdan yarattığı, O\'na itaat eden ve hiç günah işlemeyen meleklerin varlığına inanmak.',
    icon: Users,
    color: 'bg-blue-100 text-blue-800',
    details: [
      'Cebrail (a.s.) - Vahiy meleği',
      'Mikail (a.s.) - Rızık meleği',
      'İsrafil (a.s.) - Sur üfleyecek melek',
      'Azrail (a.s.) - Can alma meleği'
    ]
  },
  {
    id: 3,
    title: 'Kitaplara İman',
    description: 'Allah\'ın peygamberlerine indirdiği kutsal kitapların varlığına ve Kur\'an\'ın son kitap olduğuna inanmak.',
    icon: Book,
    color: 'bg-green-100 text-green-800',
    details: [
      'Kur\'an-ı Kerim - Hz. Muhammed\'e (s.a.v.)',
      'İncil - Hz. İsa\'ya (a.s.)',
      'Tevrat - Hz. Musa\'ya (a.s.)',
      'Zebur - Hz. Davud\'a (a.s.)'
    ]
  },
  {
    id: 4,
    title: 'Peygamberlere İman',
    description: 'Allah\'ın insanlara hidayet için gönderdiği peygamberlerin varlığına ve Hz. Muhammed\'in (s.a.v.) son peygamber olduğuna inanmak.',
    icon: Heart,
    color: 'bg-red-100 text-red-800',
    details: [
      'Hz. Adem (a.s.) - İlk insan ve peygamber',
      'Hz. Nuh (a.s.) - Tufan peygamberi',
      'Hz. İbrahim (a.s.) - Halilullah',
      'Hz. Muhammed (s.a.v.) - Son peygamber'
    ]
  },
  {
    id: 5,
    title: 'Ahiret Gününe İman',
    description: 'Ölümden sonra dirilişin, hesap gününün, cennet ve cehennemin gerçek olduğuna inanmak.',
    icon: Globe,
    color: 'bg-purple-100 text-purple-800',
    details: [
      'Ölümden sonra diriliş (Ba\'s)',
      'Hesap günü (Yevmü\'d-din)',
      'Cennet - Müminlerin yeri',
      'Cehennem - Kafirlerin yeri'
    ]
  },
  {
    id: 6,
    title: 'Kadere İman',
    description: 'Allah\'ın her şeyi önceden bildiğine, takdir ettiğine ve hiçbir şeyin O\'nun izni olmadan olmayacağına inanmak.',
    icon: Star,
    color: 'bg-indigo-100 text-indigo-800',
    details: [
      'Allah\'ın her şeyi bilmesi (İlim)',
      'Her şeyi yazması (Kitabet)',
      'Her şeyi dilemesi (Meşiet)',
      'Her şeyi yaratması (Halk)'
    ]
  }
]

export default async function FaithPrinciplesPage({ params }: PageProps) {
  const t = await getTranslations({ locale: params.locale })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          İman Esasları
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İslam'ın altı temel inanç esası. Her Müslümanın kalben tasdik etmesi gereken 
          temel inançlar hakkında detaylı bilgi.
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-12 bg-islamic-cream rounded-lg p-8">
        <h2 className="text-2xl font-bold text-islamic-green mb-4">
          İman Nedir?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          İman, kalben tasdik etmek, dille ikrar etmek ve organlarla amel etmek demektir. 
          İslam'da iman, altı temel esasa dayanır ve bu esasların hepsine inanmak gerekir.
        </p>
        <div className="bg-white rounded-lg p-4 border-l-4 border-islamic-green">
          <p className="text-gray-800 font-medium">
            <strong>Hadis-i Şerif:</strong> "İman, Allah'a, meleklerine, kitaplarına, 
            peygamberlerine, ahiret gününe ve hayır şer kadere inanmandır."
          </p>
        </div>
      </div>

      {/* Faith Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {faithPrinciples.map((principle) => {
          const Icon = principle.icon
          
          return (
            <div key={principle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${principle.color} mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {principle.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {principle.id}. Esas
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Details */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Temel Konular:
                </h4>
                <ul className="space-y-2">
                  {principle.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
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

      {/* Detailed Explanation */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          İman Esaslarının Önemi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-3">
              Neden Önemli?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>İslam'ın temel yapı taşlarıdır</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Müslümanın dünya görüşünü şekillendirir</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>İbadetlere anlam ve değer katar</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Ahiret hayatının temelini oluşturur</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-islamic-green mb-3">
              Nasıl Öğrenilir?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Kur'an-ı Kerim'i okuyarak</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Hadisleri inceleyerek</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>İslami kitapları okuyarak</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-islamic-green mt-0.5 mr-2 flex-shrink-0" />
                <span>Bilgili kişilerden öğrenerek</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-islamic-green to-primary-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          İmanınızı Güçlendirin
        </h2>
        <p className="text-lg mb-6 opacity-90">
          İman esaslarını öğrendikten sonra, günlük hayatınızda nasıl yaşayacağınızı keşfedin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${params.locale}/namaz-rehberi`}
            className="inline-flex items-center px-6 py-3 bg-white text-islamic-green rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Namaz Öğren
          </Link>
          <Link
            href={`/${params.locale}/30-gunluk-plan`}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-islamic-green transition-colors font-semibold"
          >
            30 Günlük Plan
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href={`/${params.locale}/islam-nedir`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Book className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            İslam Nedir?
          </h3>
          <p className="text-gray-600 text-sm">
            İslam dininin temel prensiplerini öğrenin
          </p>
        </Link>

        <Link
          href={`/${params.locale}/sss`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Sık Sorulan Sorular
          </h3>
          <p className="text-gray-600 text-sm">
            İman ile ilgili sorularınızın cevapları
          </p>
        </Link>

        <Link
          href={`/${params.locale}/kaynaklar`}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Globe className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Kaynaklar
          </h3>
          <p className="text-gray-600 text-sm">
            İman konusunda daha fazla kaynak
          </p>
        </Link>
      </div>
    </div>
  )
}
