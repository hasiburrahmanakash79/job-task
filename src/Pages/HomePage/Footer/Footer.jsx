import { Link } from "react-scroll";

const Footer = () => {
  const footerItems = (
    <>
      <li>
        <Link to="home" activeClass="active" smooth={true} spy={true}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" activeClass="active" smooth={true} spy={true}>
          About
        </Link>
      </li>
      <li>
        <Link to="course" activeClass="active" smooth={true} spy={true}>
          Course
        </Link>
      </li>
      <li>
        <Link to="skill" activeClass="active" smooth={true} spy={true}>
          Skill
        </Link>
      </li>
      <li>
        <Link to="subscribe" activeClass="active" smooth={true} spy={true}>
          Subscribe
        </Link>
      </li>

      <li>
        <Link to="testimonial" activeClass="active" smooth={true} spy={true}>
          Testimonial
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto">
        <div className="md:p-20 p-10 text-center space-y-5">
          <h1 className="text-2xl">Subscribe to get notified about update</h1>
          <p className="text-xs">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="flex justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-white bg-opacity-15 p-3 rounded"
            />
            <button className="bg-[#CC8663] p-3 rounded">Subscribe us</button>
          </div>
        </div>
        <div className="flex-row-reverse md:flex justify-between items-center text-center p-5">
          <div className="md:flex">
            <ul className="text-md px-1 md:flex gap-5 md:space-y-0 space-y-4">
              {footerItems}
            </ul>
          </div>
          <div className=" md:py-0 py-5">
            <a className="md:text-3xl text-2xl font-semibold">
              Skill <span className="text-primary">Shoot</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
