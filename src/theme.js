import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import primary from "@material-ui/core/colors/lightBlue";
// import secondary from/*  */ "@material-ui/core/colors/orange";
import danger from "@material-ui/core/colors/red";

// Object.assign(primary, { dark: "#0e5176", veryDark: "#166692" });

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: primary[200],
//     },
//     secondary: {
//       main: secondary[500],
//     },
//   },
// });

const theme = createMuiTheme({
  palette: { primary, secondary: { main: "#0e5176" } },
  status: { danger },
  headerHeight: "60px",
});

export default theme;
