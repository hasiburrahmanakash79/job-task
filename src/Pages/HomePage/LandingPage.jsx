import Courses from './Courses/Courses';
import PopularCourses from './Courses/PopularCourses';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Courses/>
            <PopularCourses/>
        </div>
    );
};

export default LandingPage;