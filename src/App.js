import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Root.css";
import MyNavbar from "./components/MyNavbar";
import MyAccordion from "./components/Accordion";
import MyFooter from "./components/MyFooter";
import Team from "./components/Team";
import Mint from "./components/Mint";
import About from "./components/About";

function App() {
  return (
    <>
      <MyNavbar />
      <About />
      <Mint />
      <Team />
      <MyAccordion />
      <MyFooter />
    </>
  );
}

export default App;
