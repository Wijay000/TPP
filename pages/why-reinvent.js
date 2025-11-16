import SEO from '../components/SEO'

export default function WhyReinvent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO title="Why Reinvent?" description="Why reinvention matters" url="/why-reinvent" image="/images/og-image.svg" />
      
      {/* Section 1: The Relevance Test - Hero Impact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-logo-green py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            THE RELEVANCE TEST.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            You've mastered the rules of the last economy. Are you designing the future, or are you about to be replaced by obsolescence and burnout?
          </p>
        </div>
      </section>

      {/* Section 2: The Obsolescence Gap */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl border border-red-100 overflow-hidden">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  THE OBSOLESCENCE GAP: YOUR CLOCK IS RUNNING.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The challenge you feel is threefold: the <span className="font-semibold text-gray-900">internal fear of a career plateauing</span> sooner than expected, the <span className="font-semibold text-gray-900">external threat of automation</span>, and the <span className="font-semibold text-gray-900">daily grind consuming the time</span> you need for meaningful action. You built your life on speed, but the rules are changing, and your time is shrinking.
                </p>
                <p className="text-xl font-medium text-gray-900 pt-4 border-t border-red-200">
                  You've mastered the rules of the last economy. Are you designing the future, or are you about to be replaced by an algorithm?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Wisdom Is Not Enough - Action Card */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-logo-green to-green-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-logo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  WISDOM IS NOT ENOUGH, ACTION IS.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-white leading-relaxed">
                <p className="text-green-50">
                  The time for reflection is over. You need a strategy to protect yourself from the internal slump, the external threat, and the daily grind. The Perennial Project provides the framework to leverage your executive judgment into the irreplaceable, high-value component that technology cannot touch, ensuring your second half is defined by impact, not consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pass The Test - CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 lg:p-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-logo-green mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pass The Test. Imagine your place in the future.
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              The moment to reinvent is now. Stop betting your future on the past, and start imagining and engineering your place in the future.
            </p>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejyrmbr8n50AGP6UpAQoSjiEM-0hCekJ5LdTNs6cn-KDLgYQ/viewform?fbzx=3478091300017295426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-logo-green hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Join the Community
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
