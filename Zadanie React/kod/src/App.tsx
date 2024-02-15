import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { routes } from "./Helpers/routing";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {routes.map((route)=> (
            <Route
                key={route.path}
                path={route.path}
                element={route.element} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  )
}
