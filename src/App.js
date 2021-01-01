import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import Blogs from "./components/pages/Blogs";
import TestCentres from "./components/pages/TestCentres";

import Toolbar from "./components/tailored/bars/Toolbar";
import FooterBar from "./components/tailored/bars/FooterBar";

function App() {
  let HomePage;
  HomePage = Home;

  return (
    <Router>
      <div className="App">
        <Toolbar />
        <Route exact path="" component={HomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="about" component={About} />
        <Route exact path="how_it_works" component={HowItWorks} />
        {/*
        <Route path="/expressTest" component={HowItWorks} />
        <Route path="expressTest/" component={HowItWorks} />
        <Route path="expressTest" component={HowItWorks} />
        <Route path="/expressTest/" component={HowItWorks} /> 
        */}
        <Route exact path="/news" component={Blogs} />
        <Route exact path="/test_centres" component={TestCentres} />
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
