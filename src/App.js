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

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out-cubic",
  //     mirror: true,
  //   });
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="margin_cont">
                <Home />
                <Banner />

                <Roadmap />
              </div>
              <Showcase />
              <div className="margin_cont">
                <Freeze />
                <Faqs />
                <Team />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
