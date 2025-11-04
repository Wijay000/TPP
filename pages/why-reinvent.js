import SEO from '../components/SEO'

export default function WhyReinvent() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <SEO title="Why Reinvent?" description="Research and resources on why reinvention matters" url="/why-reinvent" image="/images/og-image.svg" />

      <header className="mb-8 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Why Reinvent?</h2>
        <p className="text-base sm:text-lg text-gray-600">Ideas and research that explain why reinvention matters in midlife.</p>
      </header>

      <section>
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
            href="https://www.theatlantic.com/magazine/archive/2019/07/work-peak-professional-decline/590650/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
            aria-label="Professional decline starts much earlier than we think - The Atlantic"
          >
            <h3 className="font-semibold text-lg text-gray-900">Professional decline starts much earlier than we think</h3>
            <p className="text-sm text-gray-500 mt-2">Your Work Peak Is Earlier Than You Think - The Atlantic</p>
          </a>

          <a
            href="https://charterhouse-mayo.org/news/how-to-find-purpose-in-life"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
            aria-label="Uncertainty regarding purpose and meaning in life as we age - Charter House"
          >
            <h3 className="font-semibold text-lg text-gray-900">Uncertainty regarding purpose and meaning in life as we age</h3>
            <p className="text-sm text-gray-500 mt-2">How to Find Purpose in Life: Strategies For Healthy Aging - Charter House</p>
          </a>

          <a
            href="https://hbr.org/2018/07/research-the-average-age-of-a-successful-startup-founder-is-45"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
            aria-label="Entrepreneurial success increases with age - Harvard Business Review"
          >
            <h3 className="font-semibold text-lg text-gray-900">Entrepreneurial success increases with age</h3>
            <p className="text-sm text-gray-500 mt-2">Research: The Average Age of a Successful Startup Founder Is 45</p>
          </a>
        </div>
      </section>
    </div>
  )
}
