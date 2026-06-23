import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Team } from "../components/Team"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"
import { VkBanner } from "../components/VkBanner"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <VkBanner />
      <Philosophy />
      <Projects />
      <Expertise />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}