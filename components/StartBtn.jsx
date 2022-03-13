import Link from 'next/link'

const StartBtn = () => {
  return (
    <article className="flex justify-center py-5">
      <Link href="/playing">
        <button className="rounded-full bg-skin-highlight px-10 py-3 text-3xl font-bold text-skin-base transition-colors hover:bg-skin-tertiary">
          Start Game
        </button>
      </Link>
    </article>
  )
}

export default StartBtn
