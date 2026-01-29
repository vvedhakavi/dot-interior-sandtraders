import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Residential from './Pages/Residential';
import Commercial from './Pages/Commercial';
import Gallery from './Pages/Gallery';
import Contact_details from './Pages/Contact_details';
import Aboutus from './Pages/Aboutus';
import Projects from './Pages/Projects';
import Renovation from './Pages/Renovation';
import JointVenture from './Pages/JointVenture';
import ScrollToTop from './Components/ScrollToTop';
import InteriorDesign from './Pages/InteriorDesign';
import AboutMain from './Pages/AboutMain';
import Sitemap from './Pages/Sitemap';
import Test from './Pages/Test';
import OurClients from './Pages/OurClients'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className='container-fluid p-0 pb-5'>
          <Navbar />
          <div className='main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/renovation" element={<Renovation />} />
              <Route path="/interior-design" element={<InteriorDesign />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/joint-venture" element={<JointVenture />} />
              <Route path="/residential" element={<Residential />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/contact-us" element={<Contact_details />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path ='/our-clients' element={<OurClients/>}/>
            </Routes>
          </div>

        </div>
        <Footer />
      </BrowserRouter>
    </>
    // <Test/>
  )
}

export default App
