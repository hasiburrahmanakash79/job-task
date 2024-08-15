import Courses from './Courses/Courses';
import PopularCourses from './Courses/PopularCourses';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Testimonial from './Testimonial/Testimonial';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Courses/>
            <PopularCourses/>
            <Testimonial/>
        </div>
    );
};

export default LandingPage;