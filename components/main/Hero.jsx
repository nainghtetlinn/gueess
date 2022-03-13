import { MdGames } from 'react-icons/md'
import { BsPercent, BsFillNutFill } from 'react-icons/bs'

const Hero = () => {
  return (
    <article className="p-5">
      <div className="relative z-0 space-y-5 overflow-hidden rounded-md bg-skin-highlight py-5 text-skin-base">
        <h2 className="text-center uppercase">Gueess</h2>
        <h5 className="text-center">Guess the hidden number game</h5>
        <div className="absolute -bottom-5 -right-5 -z-10 rotate-12">
          <BsFillNutFill className="text-9xl text-skin-paragraph opacity-40" />
        </div>
      </div>
    </article>
  )
}

export default Hero
