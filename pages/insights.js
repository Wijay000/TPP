import SEO from '../components/SEO'

export default function Insights() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="The Community" description="Community principles for participation and practice." url="/insights" image="/images/og-image.svg" />

      {/* Pain Points & Pathways Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">You're Not Alone</h2>
            <p className="text-lg text-gray-600">Every challenge has a path forward. Here's how we help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "I'm struggling to adapt to tech-driven industries. I don't know where to start."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Learn to leverage your deep expertise in new contexts. Tech is a tool, not a barrier.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Ageism is real and I want to stay relevant."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Position your experience as premium value. Become undeniable through reinvention.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "I'm divorced and lonely. Life feels boring."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Rebuild from a place of strength. Design a life so compelling you're excited to wake up.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "I chased success and money. Now I want meaning."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Channel your drive toward impact. Success without meaning is empty—combine both.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "My health is declining. I don't want to be sick."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Take radical ownership of your body. Build strength, energy, and vitality for decades ahead.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-logo-green transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mt-1"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "I want a new career but don't know how to shift."
                </p>
              </div>
              <div className="pl-11">
                <h3 className="text-sm font-bold text-logo-green uppercase tracking-wide mb-2">Your Path Forward:</h3>
                <p className="text-gray-900 leading-relaxed">
                  Map your transferable skills and passions. Create a strategic roadmap with accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              The Community
            </h1>
            <div className="w-24 h-1 bg-logo-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Video with modern phone frame */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-gray-900 bg-gray-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-black" style={{aspectRatio: '9/19.5'}}>
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ppQPiU-6PCE"
                      title="Community intro video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-logo-green text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Content card */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  "What if your second act could be your strongest yet?"
                </h2>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    There comes a moment in midlife when the old rhythms stop fitting. Fitness isn't just about strength. It's about reclaiming your energy, your confidence, your spark.
                  </p>
                  
                  <p>
                    If you're a mid- or late-career professional ready to reinvent your path, this is your space.
                  </p>
                  
                  <p>
                    A place to find new friends who get it, a community that listens without judgment, and a circle that challenges you to grow beyond comfort.
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xl font-semibold text-logo-green">
                      Because reinvention begins where routine ends.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
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
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border-l-4 border-logo-green rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Circle</h3>
              <p className="text-gray-700">Connect with professionals who understand midlife transitions and support each other's growth.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-logo-green rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Take Action</h3>
              <p className="text-gray-700">Move beyond theory with a community focused on daily practice and tangible results.</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-logo-green rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grow Beyond Comfort</h3>
              <p className="text-gray-700">Challenge yourself with accountability and support that pushes you toward your best self.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
