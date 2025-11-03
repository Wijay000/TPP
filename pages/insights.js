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
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">“What if your second act could be your strongest yet?”</h2>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
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
      </section>

      <header className="mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-left">6 Community Principles</h1>
        <p className="text-base sm:text-lg text-gray-600">Guidelines to help you contribute, learn and grow with the group.</p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#b80a2c] text-white flex items-center justify-center font-semibold">{i + 1}</div>
                </div>
                <div>
                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}