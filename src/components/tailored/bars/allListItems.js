import Home from "../../pages/Home";
import About from "../../pages/About";
import HowItWorks from "../../pages/HowItWorks";
import Blogs from "../../pages/Blogs";
import TestCentres from "../../pages/TestCentres";
import Faqs from "../../pages/Faqs";
import ContactUs from "../../pages/ContactUs";
import Events from "../../pages/Events";

const allListItems = [
  { order: "0", path: "home", name: "Home", component: Home },
  { order: "0", path: "about", name: "About", component: About },
  {
    order: "0",
    path: "how_it_works",
    name: "How It Works",
    component: HowItWorks,
  },
  { order: "0", path: "news", name: "News", component: Blogs },
  {
    order: "0",
    path: "test_centres",
    name: "Test Centres",
    component: TestCentres,
  },

  { order: "1", path: "faqs", name: "FAQ", component: Faqs },
  { order: "1", path: "contact_us", name: "Contact Us", component: ContactUs },
  { order: "2", path: "events", name: "Events", component: Events },
];

export default allListItems;
