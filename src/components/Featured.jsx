function Featured() {
  return (
    <div className=" w-full bg-white ">
      <div>
        <h1 className=" text-black text-5xl pt-28 ml-10">Featured Projects:</h1>
      </div>
      <div className=" border-t-2 border-zinc-400 mt-10 mb-10"></div>
      <div className=" w-full flex flex-wrap justify-around">
        <div className=" ml-10">
          <div className="flex gap-3 mt-4 mb-8 ">
            <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
            <p className=" text-black text-center">FYDE</p>
          </div>
          <img
            className=" w-[43vw]  rounded-lg "
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
          />
          <div>
            <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
              audit
            </p>
          </div>
        </div>
        <div className=" ml-10">
          <div className="flex gap-3 mt-4 mb-8">
            <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
            <p className=" text-black text-center">VISE</p>
          </div>
          <img
            className=" w-[43vw]  rounded-lg "
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
          <div>
            <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
              audit
            </p>
          </div>
        </div>
        <div className=" ml-10">
          <div className="flex gap-3 mt-4 mb-8 ">
            <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
            <p className=" text-black text-center">TRAWA</p>
          </div>
          <img
            className=" w-[43vw]  rounded-lg "
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
          <div>
            <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
              audit
            </p>
          </div>
        </div>
        <div className=" ml-10">
          <div className="flex gap-3 mt-4  mb-8 ">
            <div className=" w-3 h-3 rounded-full bg-black mt-1"></div>
            <p className=" text-black text-center">PREMIUM BLEND</p>
          </div>
          <img
            className=" w-[43vw]  rounded-lg "
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt=""
          />
          <div>
            <p className=" uppercase border-2 border-black text-black inline-block rounded-full px-2 mt-4">
              audit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
