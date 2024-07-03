import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Home from "./Pages/Header/Middle/Home";
import Navbar1 from "./Components/Navbar1";
import Navbar3 from "./Components/Navbar1";
import Navbar4 from "./Components/Navbar4";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar1 /> */}
      {/* <Navbar3/> */}
      <Navbar4/>
      <AllRoutes />
      <Home />
      <Footer />
    </>
  );
}

export default App;
