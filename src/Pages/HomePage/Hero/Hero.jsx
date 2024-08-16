import { FaDiscord, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="home" className=" p-4 md:h-screen text-white bg-primary pt-20">
      <div className="container mx-auto ">
        <div className="md:flex justify-between items-center gap-10 ">
          <div className="md:w-1/2 md:h-screen flex flex-col justify-center items-center">
            <div>
              <h1 className="md:text-6xl text-4xl font-semibold leading-snug">
                There is always something new for us to learn
              </h1>
              <p className="text-xs md:w-1/2 my-4">
                we have created more than 100+ materials on various things that
                will help your career, with mentors who are experienced in their
                fields.
              </p>
            </div>

            <div className="flex items-center mt-4 gap-8">
              <button className="btn-primary">Start Journey</button>
              <FaSquareInstagram className="text-3xl" />
              <FaTwitter className="text-3xl" />
              <FaDiscord className="text-3xl" />
            </div>
          </div>

          <div className="md:w-1/2 md:p-4 md:flex items-end hidden">
          <img src="https://i.ibb.co/qDxsnpn/S.png" alt="" />
            {/* <img src="https://i.ibb.co/NNmc6FR/banner-Image.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
