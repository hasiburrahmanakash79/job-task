import { FaCheck } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div id="subscribe" className="md:w-2/3 mx-auto md:h-screen p-3">
      <div className="text-center pt-16 pb-7">
        <h1 className="text-3xl font-semibold">Subscribe with us now</h1>
        <p className="text-xs leading-6 md:w-1/3 mx-auto p-3">
          by subscribing now you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit
        </p>
      </div>

      <div className="md:grid grid-cols-3 gap-6 ">
        <div className="space-y-3 p-9 rounded-2xl">
          <h1 className="text-3xl">
            $50<span className="text-sm">/1 month</span>
          </h1>
          <h2 className="text-xl font-semibold">Base</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Access all videos
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Get Certificate
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Chat support
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Update Notification
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Download material
            </li>
            <li className="flex items-center mt-4">
              <a
                className="bg-[#FED1BA] bg-opacity-25 text-primary w-full text-center p-1 rounded-full hover:cursor-pointer"
              >
                Choose plan
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3 bg-primary p-9 rounded-2xl text-white my-5 md:my-0 ">
            <p className="uppercase text-xs bg-[#CB8461] w-1/2 text-center p-1 rounded-full ml-auto">Most Popular</p>
          <h1 className="text-3xl">
            $100<span className="text-sm">/6 month</span>
          </h1>
          <h2 className="text-xl font-semibold">Pro</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-50 bg-opacity-20 rounded-full p-1" />
              Access all videos
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-50 bg-opacity-20 rounded-full p-1" />
              Get Certificate
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-50 bg-opacity-20 rounded-full p-1" />
              Chat support
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-50 bg-opacity-20 rounded-full p-1" />
              Update Notification
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-50 bg-opacity-20 rounded-full p-1" />
              Download material
            </li>
            <li className="flex items-center mt-4">
              <a
                className="bg-[#CB8461]  w-full text-center p-1 rounded-full hover:cursor-pointer"
              >
                Choose plan
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3  p-9 rounded-2xl">
          <h1 className="text-3xl">
            $200<span className="text-sm">/12 month</span>
          </h1>
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Access all videos
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Get Certificate
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Chat support
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Update Notification
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className="w-4 h-4 mr-2 bg-blue-gray-100 rounded-full p-1" />
              Download material
            </li>
            <li className="flex items-center mt-4">
              <a
                
                className="bg-[#FED1BA] bg-opacity-25 text-primary w-full text-center p-1 rounded-full hover:cursor-pointer"
              >
                Choose plan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
