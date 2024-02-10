import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className=" w-full bg-white ">
      <div>
        <h1 className=" text-black text-5xl pt-28 ml-10">Featured Projects:</h1>
      </div>
      <div className=" border-t-2 border-zinc-400 mt-10 mb-10"></div>
      <div className=" w-full flex flex-wrap justify-around">
        <div className=" relative w-full flex">
          <motion.div
           
            className=" ml-10"
          >
            <div className="flex gap-3 mt-4 mb-8 ">
              <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
              <p className=" text-black text-center">FYDE</p>
            </div>
            <motion.div className=" text-7xl  flex overflow-hidden text-[#CDEA68] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#CDEA68] ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            <motion.img  onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
              className=" w-[43vw]  rounded-lg "
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
            <div className=" flex gap-4">
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                audit
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                copyright
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                sales desk
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                slides design
              </p>
            </div>
          </motion.div>
          <motion.div
           
            className=" ml-10"
          >
            <div className="flex gap-3 mt-4 mb-8">
              <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
              <p className=" text-black text-center">VISE</p>
            </div>
            <div className=" text-7xl flex overflow-hidden text-[#CDEA68] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#CDEA68] ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <motion.img  onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
              className=" w-[43vw]  rounded-lg "
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
            <div className=" flex gap-4">
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                agency
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                COmpany presentation
              </p>
            </div>
          </motion.div>
        </div>
        <div className=" relative w-full flex">
          <motion.div className=" ml-10">
            <div className="flex gap-3 mt-4 mb-8 ">
              <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
              <p className=" text-black text-center">TRAWA</p>
            </div>
            <div className=" text-7xl flex overflow-hidden text-[#CDEA68] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#CDEA68] ">
              {"TRAWA".split("").map((item, index) => (
                 <motion.span
                 initial={{ y: "100%" }}
                 animate={cards[0]}
                 transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                 className="inline-block"
                 key={index}
               >
                 {item}
               </motion.span>
              ))}
            </div>
            <motion.img  onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
              className=" w-[43vw]  rounded-lg "
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
            <div className=" flex gap-4">
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                brand identity
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                design research
              </p>
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                investor desk
              </p>
            </div>
          </motion.div>
          <motion.div className=" ml-10">
            <div className="flex gap-3 mt-4  mb-8 ">
              <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
              <p className=" text-black text-center">PREMIUM BLEND</p>
            </div>
            <div className=" text-7xl flex overflow-hidden text-[#CDEA68] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#CDEA68] ">
              {"PREMIUM ".split("").map((item, index) => (
                 <motion.span
                 initial={{ y: "100%" }}
                 animate={cards[1]}
                 transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                 className="inline-block"
                 key={index}
               >
                 {item}
               </motion.span>
              ))}
            </div>
            <motion.img  onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
              className=" w-[43vw]  rounded-lg "
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
            <div className=" flex gap-4">
              <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
                branded templet
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
