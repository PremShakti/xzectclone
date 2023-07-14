
import Banner from './components/Banner'
import Booking from './components/Booking'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <Services/>
      <Expertise/>
      <Booking/>
      <Footer/>
    </main>
  )
}
