'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-islamic-green mb-4">404</div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Ana sayfaya dönerek aradığınızı bulabilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/tr"
            className="inline-flex items-center px-6 py-3 bg-islamic-green text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold w-full justify-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Git
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popüler Sayfalar
          </h2>
          <div className="space-y-2">
            <Link
              href="/tr/islam-nedir"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              İslam Nedir?
            </Link>
            <Link
              href="/tr/30-gunluk-plan"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              30 Günlük Başlangıç Planı
            </Link>
            <Link
              href="/tr/sss"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              Sık Sorulan Sorular
            </Link>
            <Link
              href="/tr/kaynaklar"
              className="block text-primary-600 hover:text-primary-700 transition-colors"
            >
              Kaynaklar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
