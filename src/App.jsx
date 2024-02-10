import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import Navbar from "./components/NavBar";
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-full min-h-screen  text-white bg-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
      <Cards/>
    </div>
  );
}

export default App;
