import Link from 'next/link'

const HowToPlayPage = () => {
  return (
    <section className='container card mx-auto'>
      <main className='card-body'>
        <h2 className='card-title'>How To Play?</h2>

        <ul className='list-disc space-y-2'>
          <li>Press &ldquo;start&rdquo; to start the game.</li>
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

        <div className='card-actions justify-center'>
          <Link
            href='/playground'
            className='btn btn-primary'
          >
            Start Game
          </Link>
        </div>
      </main>
    </section>
  )
}

export default HowToPlayPage
