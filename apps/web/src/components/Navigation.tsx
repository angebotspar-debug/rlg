'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const t = useTranslations('navigation')
  const locale = useLocale()

  const navigationItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/islam-nedir`, label: t('islamIntro') },
    { href: `/${locale}/iman-esaslari`, label: t('faithPrinciples') },
    { href: `/${locale}/namaz-rehberi`, label: t('prayerGuide') },
    { href: `/${locale}/gunluk-hayat`, label: t('dailyLife') },
    { href: `/${locale}/30-gunluk-plan`, label: t('thirtyDayPlan') },
    { href: `/${locale}/sss`, label: t('faq') },
    { href: `/${locale}/kaynaklar`, label: t('resources') },
  ]

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-islamic-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">IG</span>
            </div>
            <span className="text-xl font-bold text-islamic-green">
              İslam Rehberi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-islamic-green transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {currentLanguage?.flag} {currentLanguage?.name}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors',
                        locale === lang.code && 'bg-islamic-green/10 text-islamic-green'
                      )}
                      onClick={() => setIsLangOpen(false)}
                    >
                      <span>{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-islamic-green transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
