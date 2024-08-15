const Hero = () => {
  return (
    <div id="home" className=" p-4 h-screen text-white bg-primary">
      <div className="container mx-auto ">
      <div className="md:flex justify-between items-end gap-10 ">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-semibold leading-snug">
            There is always something new for us to learn
          </h1>
          <p className="text-xs md:w-1/2 my-4">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </p>
          <button className="btn-primary">Start Journey</button>
          <div className="flex items-center mt-4 gap-8">
            <p>🔗 Bridging the Gap</p>
            <p>😎 Contribute Community</p>
            <p>🚀 Innovation Hub</p>
          </div>
        </div>

        <div className="md:w-1/2 md:p-4 flex items-end">
        <img src="https://keycommunitybank.com/wp-content/uploads/Stock-Person-KCB-website-1024x1024.png" alt="" /></div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
