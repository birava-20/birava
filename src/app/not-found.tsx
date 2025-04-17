import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">404</h2>
        <p className="mt-4 text-base text-gray-600">Page not found</p>
        <div className="mt-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
} 