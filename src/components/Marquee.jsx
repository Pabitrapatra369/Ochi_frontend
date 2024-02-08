// import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className=" w-full h-[25vw]  py-12 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className=" w-full h-[20vw]  border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <h1 className="  text-white text-[22vw] -mt-28 uppercase font-semibold font-mono ">
          We are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
