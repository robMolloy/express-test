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
import NavBars from "./components/tailored/bars/NavBars";
import allListItems from "./components/tailored/bars/allListItems";

function App() {
  let HomePage;
  HomePage = Home;

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH}`}>
      <div className="App">
        <NavBars />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/express-test" component={HomePage} />
        {allListItems.map((listItem, j) => (
          <Route
            key={j}
            exact
            path={`/${listItem.path}`}
            component={listItem.component}
          />
        ))}

        {/* 
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/how_it_works" component={HowItWorks} />
          <Route exact path="/news" component={Blogs} />
          <Route exact path="/test_centres" component={TestCentres} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/contact_us" component={ContactUs} /> 
        */}
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
