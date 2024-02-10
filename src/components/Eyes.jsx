import { useEffect, useState } from "react";

function Eyes() {
  const [rotete, setrotet] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
     
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    //   console.log(angle)
      setrotet(angle-180);
    });
  });
  return (
    <div className=" w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className=" relative w-full h-full bg-cover  bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center gap-10">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
            <div className=" relative  w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotete}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
            <div className="relative flex items-center justify-center   w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotete}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
