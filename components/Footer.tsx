"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, X } from "lucide-react"

export default function Footer() {
  const router = useRouter()

  const handleContactNavigation = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">LuxeStudio</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A creative technology studio delivering exceptional digital solutions across automation, accessibility,
              development, and design.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <X className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43c-.526.24-.973.56-1.416 1.002C3.16 1.874 2.84 2.321 2.6 2.847c-.226.5-.348 1.074-.383 2.021C2.184 5.816 2.171 6.223 2.171 9.844v4.312c0 3.621.013 4.028.048 4.976.035.947.157 1.521.383 2.021.24.526.56.973 1.002 1.416.443.443.89.763 1.416 1.002.5.226 1.074.348 2.021.383.948.035 1.355.048 4.976.048h4.312c3.621 0 4.028-.013 4.976-.048.947-.035 1.521-.157 2.021-.383.526-.24.973-.56 1.416-1.002.443-.443.763-.89 1.002-1.416.226-.5.348-1.074.383-2.021.035-.948.048-1.355.048-4.976V9.844c0-3.621-.013-4.028-.048-4.976-.035-.947-.157-1.521-.383-2.021-.24-.526-.56-.973-1.002-1.416C20.345.877 19.898.557 19.372.317c-.5-.226-1.074-.348-2.021-.383C16.403.013 15.996 0 12.375 0h-.358zm-.683 2.171c.329-.002.693-.002 1.091-.002h.358c3.443 0 3.85.013 4.760.048.836.035 1.29.162 1.592.269.4.155.686.34.985.639.299.3.484.585.639.985.107.302.234.756.269 1.592.035.91.048 1.317.048 4.76v.611c0 3.443-.013 3.85-.048 4.76-.035.836-.162 1.29-.269 1.592-.155.4-.34.686-.639.985-.3.299-.585.484-.985.639-.302.107-.756.234-1.592.269-.91.035-1.317.048-4.76.048h-.611c-3.443 0-3.85-.013-4.76-.048-.836-.035-1.29-.162-1.592-.269-.4-.155-.686-.34-.985-.639-.299-.3-.484-.585-.639-.985-.107-.302-.234-.756-.269-1.592-.035-.91-.048-1.317-.048-4.76v-.611c0-3.443.013-3.85.048-4.76.035-.836.162-1.29.269-1.592.155-.4.34-.686.639-.985.3-.299.585-.484.985-.639.302-.107.756-.234 1.592-.269.91-.035 1.317-.048 4.76-.048z"/>
                  <path d="M12.017 15.33a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zM12.017 7.677a4.653 4.653 0 1 0 0 9.306 4.653 4.653 0 0 0 0-9.306zm5.943-.306a1.086 1.086 0 1 1-2.172 0 1.086 1.086 0 0 1 2.172 0z"/>
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nuvo" className="text-gray-300 hover:text-white transition-colors">
                  Nuvo
                </Link>
              </li>
              <li>
                <Link href="/accessa" className="text-gray-300 hover:text-white transition-colors">
                  Accessa
                </Link>
              </li>
              <li>
                <Link href="/webora" className="text-gray-300 hover:text-white transition-colors">
                  Webora
                </Link>
              </li>
              <li>
                <Link href="/creava" className="text-gray-300 hover:text-white transition-colors">
                  Creava
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleContactNavigation}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-gray-300 hover:text-white transition-colors">
                  Service Delivery
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-gray-300 hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/billing-policy" className="text-gray-300 hover:text-white transition-colors">
                  Billing Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a 
                href="mailto:hello@luxestudio.live" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@luxestudio.live
              </a>
              
              
            </div>
            <div className="text-gray-300 md:text-right">© 2025 LuxeStudio. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
