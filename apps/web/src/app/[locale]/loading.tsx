export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header Skeleton */}
      <div className="mb-12 text-center">
        <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto animate-pulse"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-8">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Content Skeleton */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center space-x-2 text-gray-500">
          <div className="w-4 h-4 bg-islamic-green rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-islamic-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-islamic-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <span className="ml-2 text-sm font-medium">Yükleniyor...</span>
        </div>
      </div>
    </div>
  )
}
