
import { motion } from "framer-motion";

function Marquee() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className=" w-full h-[25vw]  py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className=" w-full h-[20vw]  border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden ">
       
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{  repeat:Infinity ,ease:"linear",duration:10}}  className="  text-white text-[22vw] -mt-28 uppercase font-semibold font-mono pr-20 ">
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{  repeat:Infinity ,ease:"linear",duration:10}}  className="  text-white text-[22vw] -mt-28 uppercase font-semibold font-mono  pr-20 ">
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{  repeat:Infinity ,ease:"linear",duration:10}}  className="  text-white text-[22vw] -mt-28 uppercase font-semibold font-mono pr-20 ">
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
