import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from './page/Home';
import Courses from './page/Courses';
import Webdev from './page/Webdev';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/webdesign" element={<Webdev />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
