import { useReveal } from './hooks/useReveal'
import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Tenets from './components/Tenets'
import Programs from './components/Programs'
import Belts from './components/Belts'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import './App.css'

export default function App() {
  useReveal()

  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tenets />
        <Programs />
        <Belts />
        <Instructors />
        <Schedule />
        <Locations />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
