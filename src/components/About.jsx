function About() {
  return (
    <div className=" w-full bg-[#004d43]">
      <div className=" w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
        <div>
          <h1 className=" text-black text-5xl ml-12 ">
            Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
            that need to raise funds, sell prod­ucts,
            <br /> ex­plain com­plex ideas, and hire great peo­ple.
          </h1>
        </div>
        <div className=" border-t-[1px] border-zinc-500 mt-8"></div>
        <div className="flex justify-between mt-9  mx-14 text-black">
          <p>What you can expect:</p>
          <p className=" w-52">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
            <br />
            <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
          <p>
            S:
            <br />
            Instagram
            <br />
            Behance
            <br />
            Facebook
            <br />
            Linkedin
          </p>
        </div>
        <div className=" border-t-[1px] border-zinc-500 mt-8"></div>
        <div className="flex justify-between">
        <div className=" ml-20 mt-6">
          <h1 className=" text-black font-semibold text-5xl">Our approach:</h1>
          <button className=" uppercase bg-black text-white rounded-full p-3 mt-5 ">
            Read more
          </button>

        </div>
         <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt=""  className="mt-6 mr-10  rounded-3xl"/>
        </div>
      </div>
    </div>
  );
}

export default About;
