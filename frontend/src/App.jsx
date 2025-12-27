import { BrowserRouter, Route, Router, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import HowIWork from "./components/HowWeWork"
import { Services } from "./components/Services"
import ChatBot from "./components/chatbot"
import { About } from "./components/AboutUs"
import { Courses } from "./components/Courses"
import BookMySession from "./components/BookMySession"
import AboutInstructors from "./components/teachers"
import { TestimonialsSeparatePage } from "./components/testimonialsPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/bookMySession" element={<BookMySession />} />
            <Route path="/aboutOurInstructors" element={<AboutInstructors />} />
            {/* <Route index element={<ChatBot />} /> */}
            {/* <Route path='/how-do-we-work' element={<HowIWork />} /> */}
            <Route path='/services' element={<Services />} />
            <Route path='/testimonials' element={<TestimonialsSeparatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
