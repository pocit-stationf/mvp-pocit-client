'use client'

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from 'next/link'
import { Mic, FileText, Layout } from 'lucide-react'
import Navbar from "@/components/navbar/page";

// Main component for the home page
export default function Home() {
  return (
    <>
      {/* Main container with flex layout */}
      <div className="flex flex-col min-h-screen bg-gray-50">

        {/* Header section with navigation and authentication buttons */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          {/* Hero section with gradient background */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                Transform Your Voice into <br className="hidden sm:inline" />
                <span className="text-blue-600">Backlogs and Wireframes</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                poc-it leverages AI to convert your spoken ideas into structured backlogs and visual wireframes, revolutionizing your product development process.
              </p>
              {/* CTA button */}
              {/* Conditional rendering based on authentication state */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                    Start Your Free Trial
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="bg-gray-600 text-black font-semibold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                  Start Your Free Trial
                </button>
              </SignedIn>
            </div>
          </section>

          {/* Features section */}
          <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {/* Voice Input feature */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-6">
                    <Mic className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Voice Input</h3>
                  <p className="text-gray-600 leading-relaxed">Articulate your ideas naturally, and watch as our AI transforms them into actionable items.</p>
                </div>
                {/* Automated Backlogs feature */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-6">
                    <FileText className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Automated Backlogs</h3>
                  <p className="text-gray-600 leading-relaxed">Effortlessly generate structured backlogs from your voice input, saving time and enhancing clarity.</p>
                </div>
                {/* AI Wireframing feature */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-6">
                    <Layout className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Wireframing</h3>
                  <p className="text-gray-600 leading-relaxed">Visualize your concepts with AI-generated wireframes based on your spoken descriptions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action section */}
          <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Product Development?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                Join innovative product managers and developers who are already using poc-it to streamline their workflow and bring ideas to life faster.
              </p>
              {/* CTA button for sign up */}
              {/* Conditional rendering based on authentication state */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
                    Start Your Free Trial Now
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="bg-gray-600 text-black font-semibold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                  Start Your Free Trial
                </button>
              </SignedIn>
            </div>
          </section>
        </main>

        {/* Footer section */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 poc-it. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
