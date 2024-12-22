import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Course from "../src/pages/Course";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/course" element={<Course />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

