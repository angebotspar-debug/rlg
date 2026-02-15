'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Heart, Mail, Globe } from 'lucide-react'

const Footer = () => {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-islamic-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IG</span>
              </div>
              <span className="text-xl font-bold">İslam Rehberi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yeni Müslümanlar için kapsamlı, güvenilir ve sade anlatımlı rehber. 
              İslam'ı öğrenmeye adım adım başlayın.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href={`/${locale}/islam-nedir`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  İslam Nedir?
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/namaz-rehberi`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Namaz Rehberi
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/30-gunluk-plan`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  30 Günlük Plan
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/sss`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Paths */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Öğrenme Yolları</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href={`/${locale}/ogrenme-yolu/temel-islam`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Temel İslam Bilgisi
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/ogrenme-yolu/gunluk-ibadetler`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Günlük İbadetler
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/ogrenme-yolu/ahlak`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  İslam Ahlakı
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/kaynaklar`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kaynaklar
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages & Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Diller</h3>
            <div className="space-y-2 text-sm mb-6">
              <Link 
                href="/tr"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>🇹🇷</span>
                <span>Türkçe</span>
              </Link>
              <Link 
                href="/en"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>🇺🇸</span>
                <span>English</span>
              </Link>
              <Link 
                href="/de"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>🇩🇪</span>
                <span>Deutsch</span>
              </Link>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>iletisim@islamrehberi.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="h-4 w-4" />
                <span>www.islamrehberi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4 md:mb-0">
              <span>© 2024 İslam Rehberi. Tüm hakları saklıdır.</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>ile yapılmıştır.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link 
                href={`/${locale}/gizlilik`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link 
                href={`/${locale}/kullanim-kosullari`}
                className="text-gray-400 hover:text-white transition-colors"
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
