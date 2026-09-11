
export default function HeroHome() {
  return (
    <section className="hero hero--home py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          Home Page Hero Section
        </h1>
       <p>
        Welcome to our home page!
       </p>

          <a
            href="#"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get Started
          </a>
      </div>
    </section>
  )
}