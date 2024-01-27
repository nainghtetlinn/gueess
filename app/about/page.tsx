const AboutPage = () => {
  return (
    <section className='card mx-auto max-w-96'>
      <main className='card-body'>
        <h2 className='card-title'>Language</h2>
        <ul className='flex gap-2'>
          <li className='badge badge-primary'>Typescript</li>
        </ul>

        <h2 className='card-title'>Framework</h2>
        <ul className='flex gap-2'>
          <li className='badge badge-primary'>ReactJs</li>
          <li className='badge badge-primary'>NextJs</li>
        </ul>

        <h2 className='card-title'>Tools</h2>
        <ul className='flex gap-2'>
          <li className='badge badge-primary'>Redux</li>
        </ul>

        <h2 className='card-title'>CSS</h2>
        <ul className='flex gap-2'>
          <li className='badge badge-primary'>TailwindCss</li>
          <li className='badge badge-primary'>DaisyUi</li>
        </ul>
      </main>
    </section>
  )
}

export default AboutPage
