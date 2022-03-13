import Hero from '../components/main/Hero'
import StartBtn from '../components/StartBtn'
import Setting from '../components/main/Setting'

export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <StartBtn />
      <Setting />
    </section>
  )
}
