import { useSelector } from 'react-redux'

const HiddenNum = () => {
  const {
    gameMessage,
    startNumber,
    endNumber,
    isCorrect,
    isLose,
    hiddenNumber,
    correctNumber,
  } = useSelector(store => store.game)
  return (
    <section className="container mx-auto">
      <div className="mt-10 p-5">
        <article className="rounded-md bg-skin-highlight p-2 sm:flex sm:justify-around">
          <div className="mx-auto -mt-14 flex h-24 w-24 items-center justify-center rounded-full border-4 border-highlight bg-skin-primary sm:mx-0 md:mt-0 md:rounded-md md:border-0">
            <h3 className="text-3xl font-bold text-skin-headline">
              {isCorrect || isLose ? correctNumber : hiddenNumber}
            </h3>
          </div>

          <div className="mt-3 text-center text-skin-base">
            <h5 className="mb-2 text-hidden-number">{gameMessage}</h5>
            <p className="sm:text-lg">
              <span className="mr-2 inline-block rounded-md bg-skin-primary px-2 py-1 text-skin-headline">
                {startNumber}
              </span>
              -
              <span className="ml-2 inline-block rounded-md bg-skin-primary px-2 py-1 text-skin-headline">
                {endNumber}
              </span>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HiddenNum
