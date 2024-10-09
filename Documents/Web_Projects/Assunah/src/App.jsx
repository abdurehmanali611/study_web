import { Route, Routes } from "react-router-dom"
import Navbar from "./Constants/Navbar"
import Footer from "./Constants/Footer"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import Contacts from "./Components/Contacts"
import Services from "./Components/Services"
import QiratCenter from "./Components/QiratCenter"
import AdminLogin from "./Components/AdminLogin"
import AdminMain from "./Components/AdminMain"
import Gallery from "./Components/Gallery"

const App = () => {
  return (
   <div>
    <Navbar />
     <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/about" element = {<AboutUs />}/>
      <Route path="/contact" element = {<Contacts />}/>
      <Route path="/service" element = {<Services />}/>
      <Route path="/qirat" element = {<QiratCenter />}/>
      <Route path="/admin" element = {<AdminLogin/>}/>
      <Route path="/main" element = {<AdminMain/>}/>
      <Route path="/gallery" element = {<Gallery/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App