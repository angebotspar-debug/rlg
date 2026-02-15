'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Heart, Mail, Globe } from 'lucide-react'

const Footer = () => {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-islamic-dark-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-islamic-green to-primary-600 rounded-2xl flex items-center justify-center shadow-islamic">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">İslam Rehberi</span>
                <span className="text-xs text-neutral-400 font-medium">Islamic Guidance</span>
              </div>
            </div>
            <p className="text-neutral-300 text-base leading-relaxed mb-6 max-w-md">
              Yeni Müslümanlar için kapsamlı, güvenilir ve sade anlatımlı rehber. 
              İslam'ı öğrenmeye adım adım başlayın.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-neutral-400">
                <Globe className="mr-2 h-4 w-4 text-islamic-green" />
                3 Dil Desteği
              </div>
              <div className="flex items-center text-sm text-neutral-400">
                <Heart className="mr-2 h-4 w-4 text-islamic-green" />
                Güvenilir İçerik
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Hızlı Erişim</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`/${locale}/islam-nedir`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  İslam Nedir?
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/namaz-rehberi`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  Namaz Rehberi
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/30-gunluk-plan`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  30 Günlük Plan
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/sss`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Paths */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Öğrenme Yolları</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`/${locale}/iman-esaslari`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  İman Esasları
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/namaz-rehberi`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  Günlük İbadetler
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/gunluk-hayat`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  Günlük Hayat
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/kaynaklar`}
                  className="text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                >
                  Kaynaklar
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages & Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">Diller</h3>
            <div className="space-y-3 mb-8">
              <Link 
                href="/tr"
                className="flex items-center space-x-3 text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1"
              >
                <span className="text-lg">🇹🇷</span>
                <span>Türkçe</span>
              </Link>
              <Link 
                href="/en"
                className="flex items-center space-x-3 text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1"
              >
                <span className="text-lg">🇺🇸</span>
                <span>English</span>
              </Link>
              <Link 
                href="/de"
                className="flex items-center space-x-3 text-neutral-300 hover:text-islamic-green transition-all duration-200 text-sm hover:translate-x-1"
              >
                <span className="text-lg">🇩🇪</span>
                <span>Deutsch</span>
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-400 text-sm">
                <Mail className="h-4 w-4 text-islamic-green" />
                <span>iletisim@islamrehberi.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400 text-sm">
                <Globe className="h-4 w-4 text-islamic-green" />
                <span>www.islamrehberi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-neutral-400 mb-4 md:mb-0">
              <span>© 2024 İslam Rehberi. Tüm hakları saklıdır.</span>
              <Heart className="h-4 w-4 text-islamic-green mx-1 animate-pulse" />
              <span>ile yapılmıştır.</span>
            </div>
            
            <div className="flex space-x-8 text-sm">
              <Link 
                href={`/${locale}/gizlilik`}
                className="text-neutral-400 hover:text-islamic-green transition-all duration-200"
              >
                Gizlilik Politikası
              </Link>
              <Link 
                href={`/${locale}/kullanim-kosullari`}
                className="text-neutral-400 hover:text-islamic-green transition-all duration-200"
              >
                Kullanım Koşulları
              </Link>
              <Link 
                href={`/${locale}/iletisim`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
