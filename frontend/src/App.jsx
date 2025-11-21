import { BrowserRouter, Route, Router, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
