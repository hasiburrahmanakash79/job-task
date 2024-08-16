

const Courses = () => {
  return (
    <div id="about" className="container mx-auto p-4 pt-20">
      <div className="text-center space-y-5">
        <h2 className="text-4xl font-semibold">
          Trusted more than <span className="text-primary">100+ </span>in the
          world
        </h2>
        <p>
          they have asked us more than 3 times to teach their employees <br />{" "}
          about various things. to improve their skills
        </p>
        <div className="grid grid-cols-6 items-center w-2/3 mx-auto gap-20 pt-7">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt=""
          />
          <img
            src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x547-tu0aql1a.png"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1Q2lh7aweiNuE3LObL2pp_kWhtffSJckKw&s"
            alt=""
          />
          <img
            src="https://brandlogos.net/wp-content/uploads/2023/10/dribbble-logo_brandlogos.net_if8uk.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Evaly_logo.svg/2560px-Evaly_logo.svg.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#F2E7DB] p-10 rounded-lg my-16">
        <div className="md:grid grid-cols-2">
          <div className="space-y-7 sm:flex sm:flex-col sm:justify-center sm:items-center lg:items-start">
            <h1 className="text-4xl font-semibold">
              Happy <span className="text-primary">Chinese New Year,</span> 20%
              discount for you today
            </h1>
            <button className="btn-error">Subscribe Course</button>
          </div>
          <div className="w-1/2 -mb-10 hidden md:flex">
            <img src="https://i.ibb.co/4SRSvk4/image3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-2 pb-16">
        <div className="md:w-2/3 space-y-4 md:text-start text-center">
          <h1 className="text-4xl font-semibold">
            Why do we <span className="text-primary">exist?</span>
          </h1>
          <p className="leading-7">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center border-b pb-2">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
                <p className="font-semibold">Jerony Pulquosta</p>
                <p className="text-xs">CEO Skill Shoot</p>
            </div>
          </div>
          
          <div className="flex items-center md:justify-start justify-center py-5 gap-10">
          <div>
            <h1 className="text-4xl font-semibold">100+</h1>
            <p className="text-xs">Updated Material</p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">15k</h1>
            <p className="text-xs">Member Join</p>
          </div>
          </div>
        </div>
        <div className="md:grid grid-cols-2">
            <div className="space-y-2 p-4  flex flex-col md:justify-start justify-center md:items-start items-center">
                <p className="text-5xl">icon</p>
                <h2 className="text-secondary text-2xl font-semibold">Material Limitations</h2>
                <p className="text-xs md:w-2/3 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="space-y-2 p-4 flex flex-col md:justify-start justify-center md:items-start items-center">
                <p className="text-5xl">icon</p>
                <h2 className="text-secondary text-2xl font-semibold">Material Limitations</h2>
                <p className="text-xs md:w-2/3 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="space-y-2 p-4  flex flex-col md:justify-start justify-center md:items-start items-center">
                <p className="text-5xl">icon</p>
                <h2 className="text-secondary text-2xl font-semibold">Material Limitations</h2>
                <p className="text-xs md:w-2/3 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="space-y-2 p-4  flex flex-col md:justify-start justify-center md:items-start items-center">
                <p className="text-5xl">icon</p>
                <h2 className="text-secondary text-2xl font-semibold">Material Limitations</h2>
                <p className="text-xs md:w-2/3 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
