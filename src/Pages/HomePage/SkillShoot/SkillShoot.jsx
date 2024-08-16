import { FaRegUser, FaUserCheck, FaVideo } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const SkillShoot = () => {
  return (
    <div id="skill" className="container mx-auto h-screen p-3">
      <div className="md:grid grid-cols-2 justify-center items-center gap-10 py-14">
        <div className=" w-1/2 mx-auto hidden md:flex">
          <img
            src="https://i.ibb.co/7RYjDJx/image34.png"
            alt="Centered Image"
          />
        </div>
        <div className="space-y-4 md:w-2/3">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Let us <span className="text-[#245D51]">Skill Shoot</span>
          </h1>
          <p className="text-xs leading-6">
            We are a company engaged in education with the aim of improving the
            skills of many people and so that younger people can reach the
            career paths they want.
          </p>
          <p className="text-xs leading-6">
            we have been around since 2019 with currently 100+ updated materials
            and 15K members who have joined.
          </p>
          <div className="pt-4 grid  grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <FaRegUser className="text-2xl" />
              <h1 className="text-md font-semibold">15K People Join</h1>
            </div>
            <div className="flex items-center gap-3">
              <FaUserCheck className="text-2xl" />
              <h1 className="text-md font-semibold">Trusted Mentor</h1>
            </div>
            <div className="flex items-center gap-3">
              <FaVideo className="text-2xl" />
              <h1 className="text-md font-semibold">30+ Free Videos</h1>
            </div>
            <div className="flex items-center gap-3">
              <FaCirclePlay className="text-2xl" />
              <h1 className="text-md font-semibold">100+ Premium Videos</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#CB8461] bg-opacity-20 rounded-md p-10 md:grid grid-cols-2 gap-5">
        <h1 className="text-3xl font-semibold">
          <span className="text-primary">Improve</span> your skills, and reach
          your career as soon as possible
        </h1>
        <div className="flex justify-center items-center gap-5 mt-10 md:mt-0">
          <button className="btn-primary">Join Now</button>
          <button className="btn-error">Subscribe Courses</button>
        </div>
      </div>
    </div>
  );
};

export default SkillShoot;
