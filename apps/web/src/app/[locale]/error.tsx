'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Bir Hata Oluştu
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Üzgünüz, sayfa yüklenirken bir sorun oluştu. 
          Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-red-800 mb-2">
              Hata Detayları (Geliştirme Modu):
            </h3>
            <p className="text-xs text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Hata ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-islamic-green text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold w-full justify-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Sayfayı Yenile
          </button>
          
          <Link
            href="/tr"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full justify-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Sorun devam ederse bizimle iletişime geçebilirsiniz:
          </p>
          <Link
            href="/tr/iletisim"
            className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
          >
            İletişim Sayfası →
          </Link>
        </div>
      </div>
    </div>
  )
}
