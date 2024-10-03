import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";

function App() {
  return (
    <div id="main-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
