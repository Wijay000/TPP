import SEO from '../components/SEO'

export default function Insights() {
  const principles = [
    `You are in the community to get value and most importantly, give value. Value comes from your daily actions, consistency and your sharing in the group. If not, you cannot be part of the community. This community is not for spectators. You are expected to do physical activity at least 4 times a week and share your progress on a daily basis (even when on off days).`,
    `Be kind and respectful to other members of the community. Encourage and motivate others. This is not a space for ridiculing, insulting others or for chatting and debating endlessly. Also, please help to maintain privacy. It is a space to reflect and share our daily actions.`,
    `Please share content that meets the objectives of the community which is physical fitness and holistic wellbeing. While sharing content, please share your learning as well. If you just share or forward links without your commentary on your learning, the post will be removed.`,
    `Maintain quality of discourse. Share authentic experiences reflecting on your personal experiences. Keep discussions focused on techniques, practice, habit formation and results. The discussions need to focus on holistic well being - mind, body(physical activities), food, nutrition.`,
    `This is a community of practice, not a community of friends. Be very selective if you want to invite someone to join the community - Either you see them taking action or they talk about it or they demonstrate interest towards transforming themselves.`,
    `Take ownership of your journey. Document your journey. Be accountable for your own progress as well as for the community members. Be vulnerable and seek support with respect to your fitness goals.`
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <SEO title="The Community" description="Community principles for participation and practice." url="/insights" image="/images/og-image.svg" />

      <section className="mb-8">
        {/* Why Reinvent? section */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Why Reinvent?</h2>
          <p className="text-base sm:text-lg text-gray-600">Ideas and research that explain why reinvention matters in midlife.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.youtube.com/watch?v=iGSkpIRs6pc"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
              aria-label="Increasing Lifespans & Decreasing Healthspans"
            >
              <h3 className="font-semibold text-lg text-gray-900">Increasing Lifespans &amp; Decreasing Healthspans</h3>
            </a>

            <a
              href="#"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
              aria-label="Professional decline starts much earlier than we think - Your Work Peak Is Earlier Than You Think - The Atlantic"
            >
              <h3 className="font-semibold text-lg text-gray-900">Professional decline starts much earlier than we think</h3>
              <p className="text-sm text-gray-500 mt-2">Your Work Peak Is Earlier Than You Think - The Atlantic</p>
            </a>

            <a
              href="#"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
              aria-label="Uncertainty regarding purpose and meaning in life as we age - How to Find Purpose in Life: Strategies For Healthy Aging - Charter House"
            >
              <h3 className="font-semibold text-lg text-gray-900">Uncertainty regarding purpose and meaning in life as we age</h3>
              <p className="text-sm text-gray-500 mt-2">How to Find Purpose in Life: Strategies For Healthy Aging - Charter House</p>
            </a>

            <a
              href="#"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
              aria-label="Entrepreneurial success increases with age - Research: The Average Age of a Successful Startup Founder Is 45"
            >
              <h3 className="font-semibold text-lg text-gray-900">Entrepreneurial success increases with age</h3>
              <p className="text-sm text-gray-500 mt-2">Research: The Average Age of a Successful Startup Founder Is 45</p>
            </a>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: video card */}
          <div className="flex justify-center md:justify-start">
            <div className="relative rounded-3xl shadow-xl overflow-hidden border border-gray-200" style={{maxWidth: '380px', width: '100%'}}>
              {/* notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                <div className="w-20 h-2 bg-gray-800 rounded-full opacity-90" />
              </div>

              {/* screen area - portrait phone aspect */}
              <div style={{aspectRatio: '9/16', background: '#000'}}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ppQPiU-6PCE"
                  title="Community intro video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* bottom speaker / home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <div className="w-14 h-1 bg-gray-200 rounded-full opacity-30" />
              </div>
            </div>
            {/* Apply button removed as requested */}
          </div>

          {/* Right: heading + text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">“What if your second act could be your strongest yet?”</h2>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                There comes a moment in midlife when the old rhythms stop fitting. Fitness isn’t just about strength. It’s about reclaiming your energy, your confidence, your spark.
                {'\n'}
                If you’re a mid- or late-career professional ready to reinvent your path, this is your space.
                {'\n'}
                A place to find new friends who get it, a community that listens without judgment, and a circle that challenges you to grow beyond comfort.
                {'\n'}
                {'\n'}Because reinvention begins where routine ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles moved to The Principles page */}
    </div>
  )
}