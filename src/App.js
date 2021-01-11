import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";

// import About from "./components/pages/About";
// import HowItWorks from "./components/pages/HowItWorks";
// import Blogs from "./components/pages/Blogs";
// import TestCentres from "./components/pages/TestCentres";

// import Faqs from "./components/pages/Faqs";
// import ContactUs from "./components/pages/ContactUs";

import FooterBar from "./components/tailored/bars/FooterBar";
import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";

function App() {
  let HomePage;
  HomePage = Home;

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH}`}>
      <div className="App">
        <NavBars imgSrc="media/ExpressTest-logo-01.svg" />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/express-test" component={HomePage} />

        <AllRoutes />

        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
