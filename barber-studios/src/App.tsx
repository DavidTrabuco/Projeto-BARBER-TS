import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Booking from './components/Booking'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Hero onOpenBooking={() => setBookingOpen(true)} />
      <About />
      <Services onOpenBooking={() => setBookingOpen(true)} />
      <Testimonials />
      <Location />
      <Subscribe />
      <Footer />
      <Booking isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
