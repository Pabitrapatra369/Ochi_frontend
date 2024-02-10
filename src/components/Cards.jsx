function Cards() {
  return (
    <div className=" bg-white w-full h-screen pt-20 px-10 flex gap-5 pb-10">
      <div className=" relative w-2/3 h-[60vh]  bg-[#004d43] rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className=" w-40"
          />
        </div>
        <button className=" px-5 py-1 border-2  rounded-full text-yellow-300 border-yellow-300 absolute left-6 bottom-6">
            &copy;2019-2022
          </button>
      </div>
      <div className=" relative w-1/3 h-[60vh] bg-[#212121] rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
        </div>
        <button className=" px-5 py-1 border-2  rounded-full text-zinc-300 border-zinc-300 absolute left-6 bottom-6">
            RATING 5.0 ON CLUTCH
          </button>
      </div>
      <div className=" relative w-1/3 h-[60vh] bg-[#212121] rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " >
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className=" w-24" />
        </div>
        <button className=" px-5 py-1 border-2  rounded-full text-zinc-300 border-zinc-300 absolute left-6 bottom-6">
            BUSINESS BOOTCAMP ALUMNI
           </button>
      </div>
    </div>
  );
}

export default Cards;
