import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import Blogs from "./components/pages/Blogs";
import TestCentres from "./components/pages/TestCentres";
import Faqs from "./components/pages/Faqs";
import ContactUs from "./components/pages/ContactUs";

import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocationIcon from "@material-ui/icons/LocationOn";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import BookIcon from "@material-ui/icons/Book";
import ArrowIcon from "@material-ui/icons/ArrowForward";

const config = {
  pages: [
    { order: "0", path: "home", name: "Home", Component: Home, Icon: HomeIcon },
    {
      order: "0",
      path: "about",
      name: "About",
      Component: About,
      Icon: BookIcon,
    },
    {
      order: "0",
      path: "how_it_works",
      name: "How It Works",
      Component: HowItWorks,
      Icon: ArrowIcon,
    },
    {
      order: "0",
      path: "news",
      name: "News",
      Component: Blogs,
      Icon: AnnouncementIcon,
    },
    {
      order: "0",
      path: "test_centres",
      name: "Test Centres",
      Component: TestCentres,
      Icon: LocationIcon,
    },

    {
      order: "1",
      path: "faqs",
      name: "FAQ",
      Component: Faqs,
      Icon: QuestionAnswerIcon,
    },
    {
      order: "1",
      path: "contact_us",
      name: "Contact Us",
      Component: ContactUs,
      Icon: MailIcon,
    },
  ],
};

export default config;
