import SEO from '../components/SEO'

export default function WhyReinvent() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Why Reinvent?" description="Why reinvention matters" url="/why-reinvent" image="/images/og-image.svg" />
      
      {/* Section 2: The Obsolescence Gap */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-logo-green"></div>
            
            <div className="pl-8 sm:pl-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                THE OBSOLESCENCE GAP: YOUR CLOCK IS RUNNING.
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Three threat cards */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-logo-green transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Internal Fear</h3>
                  <p className="text-gray-700">Career plateauing sooner than expected</p>
                </div>
                
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-logo-green transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">External Threat</h3>
                  <p className="text-gray-700">Automation replacing expertise</p>
                </div>
                
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-logo-green transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Daily Grind</h3>
                  <p className="text-gray-700">Time consumed without meaningful action</p>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-8 sm:p-10">
                <p className="text-xl sm:text-2xl text-white leading-relaxed">
                  You built your life on speed, but the rules are changing, and your time is shrinking.
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-logo-green mt-6 leading-relaxed">
                  You've mastered the rules of the last economy. Are you designing the future, or are you about to be replaced by an algorithm, obsolescence and irrelevance?
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
              Imagine your place in the future. Become a Perennial.
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
