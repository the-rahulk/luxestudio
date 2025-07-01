"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Optional: Track 404 errors for analytics
    console.log('404 Page accessed:', window.location.pathname)
  }, [])

  const brandLinks = [
    { name: "Nuvo", href: "/nuvo", description: "Automation Solutions", color: "from-purple-500 to-violet-600" },
    { name: "Webora", href: "/webora", description: "Web Development", color: "from-blue-500 to-cyan-500" },
    { name: "Accessa", href: "/accessa", description: "Accessibility Services", color: "from-green-500 to-emerald-500" },
    { name: "Creava", href: "/creava", description: "Design Solutions", color: "from-yellow-500 to-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => router.push("/")}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Brand Links */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Or explore our specialized brands:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandLinks.map((brand) => (
                <button
                  key={brand.name}
                  onClick={() => router.push(brand.href)}
                  className="group p-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-left"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${brand.color} mb-2`}>
                    <Search className="h-4 w-4" />
                  </div>
                  <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {brand.description}
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-sm text-gray-400 mt-8">
          If you believe this is an error, please{" "}
          <button
            onClick={() => router.push("/#contact")}
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            contact our support team
          </button>
        </p>
      </div>
    </div>
  )
}
