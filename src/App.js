import "./App.css";

import { useEffect } from "react";

import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import Roadmap from "./components/Roadmap";
import Showcase from "./components/Showcase";
import Faqs from "./components/Faqs";
import Team from "./components/Team";
import Freeze from "./components/Freeze";
import RoadMap2 from "./components/RoadMap2";
import AOS from "aos";
import "aos/dist/aos.css";
import Terms from "./pages/Terms";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [home, setHome] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="App">
      <Header home={home} setHome={setHome} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="margin_cont">
                <Home />
                <Banner />

                {/* <Roadmap /> */}
                <RoadMap2 />
              </div>
              <Showcase />
              <div className="margin_cont">
                <Freeze />
                <Faqs />
                <Team home={home} setHome={setHome} />
              </div>
            </>
          }
        ></Route>
        <Route path="/termsandconditions" element={<Terms />}></Route>
      </Routes>
    </div>
  );
}

export default App;
