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
    <nav className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-islamic-green to-primary-600 rounded-2xl flex items-center justify-center shadow-islamic group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">IG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-neutral-800 group-hover:text-islamic-green transition-colors">İslam Rehberi</span>
              <span className="text-xs text-neutral-500 font-medium">Islamic Guidance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-neutral-700 hover:text-islamic-green hover:bg-islamic-cream/30 rounded-xl transition-all duration-200 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-islamic-green group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-200 hover:border-islamic-green/30 hover:bg-islamic-cream/20 transition-all duration-200 shadow-soft hover:shadow-medium"
              >
                <Globe className="h-4 w-4 text-islamic-green" />
                <span className="text-sm font-medium text-neutral-700">
                  {currentLanguage?.flag} {currentLanguage?.name}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-strong border border-neutral-100 py-3 z-50 animate-slide-up">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 hover:bg-islamic-cream/30 transition-all duration-200 mx-2 rounded-xl',
                        locale === lang.code && 'bg-islamic-green/10 text-islamic-green border-l-4 border-islamic-green'
                      )}
                      onClick={() => setIsLangOpen(false)}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium text-neutral-700">{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-islamic-cream/30 transition-all duration-200 shadow-soft hover:shadow-medium"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-neutral-700" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-100 py-6 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-islamic-green hover:bg-islamic-cream/30 transition-all duration-200 font-medium py-3 px-4 rounded-xl mx-2"
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
