import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <SEO title="Home" description="Enabling middle aged people to reinvent" />

  <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl px-4"
      >
          {/* center logo removed per request */}
        <h1 className="text-6xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight md:leading-relaxed lg:whitespace-nowrap">
          Reinvent Yourself. Start Today.
        </h1>

        <p className="text-2xl md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 leading-relaxed">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSejyrmbr8n50AGP6UpAQoSjiEM-0hCekJ5LdTNs6cn-KDLgYQ/viewform?fbzx=3478091300017295426" className="hover:text-logo-green transition-colors">Join the Community.</a>
        </p>

        {/* Button to make the link more visible */}
        <div className="mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSejyrmbr8n50AGP6UpAQoSjiEM-0hCekJ5LdTNs6cn-KDLgYQ/viewform?fbzx=3478091300017295426"
            className="inline-flex items-center px-6 py-2 bg-logo-green hover:bg-logo-green/90 text-white font-semibold rounded-lg shadow-md transition-colors"
            aria-label="Join the Community"
          >
            Join the Community
          </a>
        </div>
      </motion.div>
    </div>
  )
}
