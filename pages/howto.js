import StartBtn from '../components/StartBtn'

const howto = () => {
  return (
    <section>
      <header className="p-5">
        <h3 className="text-center text-2xl font-bold underline">
          How To Play?
        </h3>
      </header>
      <main>
        <ul className="list-disc space-y-2 p-5">
          <li>Press start to start the game.</li>
          <li>When the game started, it will generate a random number.</li>
          <li>
            The game will give you the start number and the end number so that
            you can know the hidden number is between those two numbers.
          </li>
          <li>You can type your guess in the input field.</li>
          <li>
            When your guess is wrong, the game will check your guess is higher
            or lower than the hidden number.
          </li>
          <li>
            When your guess is lower than hidden number, your guess will become
            first number and vice versa.
          </li>
        </ul>
      </main>
      <div>
        <StartBtn />
      </div>
    </section>
  )
}

export default howto
