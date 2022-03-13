const About = () => {
  return (
    <section>
      <header className="p-5">
        <h3 className="text-center text-2xl font-bold underline">About</h3>
      </header>
      <main>
        <ul className="space-y-3">
          <li>
            <h4>Language</h4>
            <div className="space-x-2">
              <span className="inline-block whitespace-nowrap rounded bg-gray-200 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-gray-700">
                Nextjs
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-gray-200 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-gray-700">
                React
              </span>
            </div>
          </li>
          <li>
            <h4>CSS</h4>
            <div>
              <span className="inline-block whitespace-nowrap rounded bg-gray-200 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-gray-700">
                Tailwindcss
              </span>
            </div>
          </li>
          <li>
            <h4>State management</h4>
            <div className="space-x-2">
              <span className="inline-block whitespace-nowrap rounded bg-gray-200 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-gray-700">
                React-redux
              </span>
              <span className="inline-block whitespace-nowrap rounded bg-gray-200 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-gray-700">
                Redux-toolkit
              </span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default About
