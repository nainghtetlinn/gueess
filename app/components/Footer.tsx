import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='mt-10 text-secondary'>
      <div className='container mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
        <div className='flex flex-col items-center sm:flex-row'>
          <h4 className='text-xl sm:text-3xl'>Gueess</h4>
          <div className='divider divider-secondary divider-horizontal hidden text-sm sm:flex sm:text-base'></div>
          <p>
            © 2024 Gueess —
            <a
              href='https://twitter.com/naingdev'
              target='_blank'
            >
              @naingdev
            </a>
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <a
            href='https://twitter.com/naingdev'
            target='_blank'
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/naingdev/'
            target='_blank'
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href='https://github.com/nainghtetlinn'
            target='_blank'
          >
            <BsGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
