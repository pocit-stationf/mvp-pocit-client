import { CheckCircle } from 'lucide-react'
import Navbar from '@/components/navbar/page'

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      '20 tickets per month',
      '1 PRD per month',
      'Save tickets',
      'Data privacy',
      'Accept additional instructions as input for creating tickets/PRDs'
    ],
    cta: 'Your current plan',
    popular: false
  },
  {
    name: 'Basic',
    price: '$9',
    features: [
      '50 tickets per month',
      '3 PRDs per month',
      'Save tickets',
      'Data privacy',
      'Accept additional instructions as input for creating tickets/PRDs'
    ],
    cta: 'Upgrade now',
    popular: true
  },
  {
    name: 'Business',
    price: '$39',
    features: [
      '500 tickets per month',
      '30 PRDs per month',
      'Save tickets',
      'Data privacy',
      '24/7 live support',
      'Accept additional instructions as input for creating tickets/PRDs'
    ],
    cta: 'Upgrade now',
    popular: false
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: [
      'Unlimited tickets per month',
      'Unlimited PRDs per month',
      'Save tickets',
      'Data privacy',
      '24/7 live support',
      'Accept additional instructions as input for creating tickets/PRDs'
    ],
    cta: 'Upgrade now',
    popular: false
  }
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
              Create product requirements and engineering task tickets 10x faster
            </p>
          </div>

          <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-base font-medium text-gray-500">/per user per month</span>
                  </p>
                </div>
                <ul className="mt-6 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`w-full px-4 py-2 border border-transparent text-base font-medium rounded-md ${plan.name === 'Free'
                      ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                      : 'text-white bg-blue-600 hover:bg-blue-700'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
