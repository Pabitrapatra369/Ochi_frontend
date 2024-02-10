import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";

function Landingpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className=" w-full h-screen bg-zinc-900 pt-2    ">
      <div className="textstructure mt-40 mx-24 font-['gilroy']">
        <h1 className="masker uppercase text-8xl leading-[5vw] tracking-tighter font-semibold">
          we create
        </h1>
      </div>
      <div className="textstructure flex  mx-24 font-['gilroy']">
        <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1} } className="h-[5vw] w-[8vw] rounded-md bg-red-300 relative top-1"></motion.div>
        <h1 className="masker uppercase text-8xl leading-[6vw] tracking-tighter font-semibold">
          eye-opening
        </h1>
      </div>
      <div className="textstructure  mx-24 font-['gilroy']">
        <h1 className="masker uppercase text-8xl leading-[5vw] tracking-tighter font-semibold">
         presentations
        </h1>
      </div>
      <div className=" border-[1px] border-slate-500 mt-[150px]"></div>

      <div className="flex justify-between mx-10 my-5 text-base ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <div className="flex">
          <p className=" uppercase border-[1px] rounded-full px-3 hover:bg-white hover:text-zinc-950">
            Start The Project
          </p>
          <p className=" text-3xl">
            <FaCircleArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
