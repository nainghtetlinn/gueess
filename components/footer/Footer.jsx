import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="body-font mt-10 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <h4 className="text-skin-headline sm:text-3xl">Gueess</h4>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2022 Gueess —
          <a
            href="https://twitter.com/Naing_95"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Naing_95
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://twitter.com/Naing_95"
            className="text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/naing-htet-linn-111252228/"
            className="ml-3 text-gray-500"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://github.com/NaingHtetLinn"
            className="ml-3 text-gray-500"
          >
            <BsGithub size={20} />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
