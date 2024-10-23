'use client'

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Header section with navigation and authentication buttons */}
      < header className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm" >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Home link */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            poc-it
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link></li>

              {/* Conditional rendering based on authentication state */}
              <li>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10"
                      }
                    }}
                  />
                </SignedIn>
              </li>

            </ul>
          </nav>
        </div>
      </header >
    </>
  )

}
