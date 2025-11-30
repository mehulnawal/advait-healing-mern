import { BrowserRouter, Route, Router, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import HowIWork from "./components/HowWeWork"
import { Services } from "./components/Services"
import ChatBot from "./components/chatbot"
import { About } from "./components/AboutUs"
import { Courses } from "./components/Courses"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            {/* <Route index element={<ChatBot />} /> */}
            {/* <Route path='/how-do-we-work' element={<HowIWork />} /> */}
            <Route path='/services' element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
