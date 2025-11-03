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
          <div className="mb-6 -mt-6 md:-mt-10">
            <img src="/images/TPP - Logo.png" alt="TPP Logo" className="mx-auto w-32 sm:w-40 md:w-48" />
          </div>
        <h1 className="text-6xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight md:leading-relaxed lg:whitespace-nowrap">
          Reinvent Yourself. Start Today.
        </h1>

        <p className="text-2xl md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 leading-relaxed">
          Join the Community.
        </p>
      </motion.div>
    </div>
  )
}
