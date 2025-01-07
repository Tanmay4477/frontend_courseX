import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Courses from "./pages/Courses";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Purchased from "./pages/Purchased";
import Course from "./pages/Course";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/course/add" element={<AddCourse />} />
        <Route path="/course/edit/:id" element={<EditCourse />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

