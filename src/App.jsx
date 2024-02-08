import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import Navbar from "./components/NavBar";
function App() {
  return (
    <div className=" w-full min-h-screen  text-white bg-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
    </div>
  );
}

export default App;
