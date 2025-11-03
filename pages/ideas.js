import { motion } from 'framer-motion'

export default function Ideas() {
  const items = [
    {
      title: "TEDx: Leadership as a space",
      url: "https://www.youtube.com/watch?v=jwSb0RI9inQ&t=33s",
      thumbnail: "/images/Ideas - TEDx.jpeg",
      type: "talk"
    },
    {
      title: "Book: A selfie with words",
      url: "https://www.amazon.com/Selfie-Words-Exploration-Global-Leadership/dp/B0CPYJWX4P",
      thumbnail: "/images/Book.jpeg",
      type: "book"
    },
    {
      title: "Podcast: Innovation as an Inner journey",
      url: "https://creators.spotify.com/pod/profile/fluid-labs/episodes/Innovation-As-A-Inner-Journey-e2bhrbb/a-aa50an7",
      thumbnail: "/images/Ideas - Podcast.jpeg.jpeg",
      type: "article"
    },
    {
      title: "DLC Talks: Responsible Innovation",
      url: "https://www.youtube.com/watch?v=xx6_3oSlVcc&t=2s",
      thumbnail: "/images/Ideas - DLC.jpg",
      type: "talk"
    },
    {
      title: "WEF: Global Shapers ACM 2016",
      url: "https://www.youtube.com/results?search_query=ACM+Plenary+vijay",
      thumbnail: "/images/Ideas - WEF.jpg",
      type: "talk"
    },
    {
      title: "Davos: Interview with Adi Godrej",
      url: "https://www.youtube.com/watch?v=6Cv_HcEdhLI",
      thumbnail: "/images/Ideas - Davos1.jpg",
      type: "talk"
    },
    {
      title: "Cannes Lions: The AI Disruption",
      url: "https://vgthinks.medium.com/cannes-lions-the-ai-disruption-1bc1607a4bb7",
      thumbnail: "/images/Ideas - Cannes.jpg",
      type: "article"
    },
    {
      title: "Davos: Interview with Prof. Hausmann",
      url: "https://www.youtube.com/watch?v=gg05B3_soH0",
      thumbnail: "/images/Ideas - Davos2.jpg",
      type: "talk"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          The Principles
        </h1>
      </motion.div>

      {/* 6 Community Principles moved from The Community page */}
      <header className="mb-10 sm:mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">6 Community Principles</h2>
        <p className="text-base sm:text-lg text-gray-600">Guidelines to help you contribute, learn and grow with the group.</p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            [
              `You are in the community to get value and most importantly, give value. Value comes from your daily actions, consistency and your sharing in the group. If not, you cannot be part of the community. This community is not for spectators. You are expected to do physical activity at least 4 times a week and share your progress on a daily basis (even when on off days).`,
              `Be kind and respectful to other members of the community. Encourage and motivate others. This is not a space for ridiculing, insulting others or for chatting and debating endlessly. Also, please help to maintain privacy. It is a space to reflect and share our daily actions.`,
              `Please share content that meets the objectives of the community which is physical fitness and holistic wellbeing. While sharing content, please share your learning as well. If you just share or forward links without your commentary on your learning, the post will be removed.`,
              `Maintain quality of discourse. Share authentic experiences reflecting on your personal experiences. Keep discussions focused on techniques, practice, habit formation and results. The discussions need to focus on holistic well being - mind, body(physical activities), food, nutrition.`,
              `This is a community of practice, not a community of friends. Be very selective if you want to invite someone to join the community - Either you see them taking action or they talk about it or they demonstrate interest towards transforming themselves.`,
              `Take ownership of your journey. Document your journey. Be accountable for your own progress as well as for the community members. Be vulnerable and seek support with respect to your fitness goals.`
            ].map((p, i) => (
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
            ))
          }
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className={`relative bg-gray-100 ${item.type === 'video' ? 'aspect-video' : item.type === 'podcast' ? 'aspect-square' : 'aspect-[2/3]'}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#b80a2c] transition-colors">
                {item.title}
              </h2>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}