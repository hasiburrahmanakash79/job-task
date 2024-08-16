import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const Testimonial = () => {
  const cardDetails = [
    {
      id: 1,
      reviewerName: "John Doe",
      message:
        "This course changed my life! The content is top-notch and the instructors are incredibly knowledgeable.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      message:
        "I highly recommend these courses to anyone looking to advance their career. The practical were especially helpful.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      reviewerName: "Samuel Jackson",
      message:
        "A fantastic learning experience. The interactive elements and community support made a big difference.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 4,
      reviewerName: "Emily Clark",
      message:
        "These courses are well-organized and easy to follow. I learned so much in a short amount of time.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 5,
      reviewerName: "Michael Brown",
      message:
        "The instructors are true experts in their fields. I felt confident applying what I learned immediately.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 6,
      reviewerName: "Jessica Lee",
      message:
        "I appreciate the real-world examples and hands-on projects. They helped me grasp complex concepts with ease.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 7,
      reviewerName: "Daniel Martin",
      message:
        "An excellent resource for professionals looking to upgrade their skills. Highly engaging and informative.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div id="testimonial" className="h-screen flex flex-col justify-center items-center py-20 bg-[#F8F8F8] relative">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          What do they <span className="text-primary">say?</span>
        </h1>
        <p className="text-xs py-3">
          This is an honest review from members who have joined us
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative container mx-auto px-4 mt-10 sm:px-6 lg:px-8">
        <div className="keen-slider" ref={sliderRef}>
          {cardDetails.map((card, index) => (
            <div
              key={card.id}
              className={`keen-slider__slide bg-transparent p-10 rounded ${
                index === (currentSlide + 1) % cardDetails.length
                  ? "bg-white border-b-8 border-[#245D51]" // Apply different background to the middle slide
                  : ""
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex items-center justify-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={card.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-center items-center text-yellow-700 pt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                </div>
                <div className="text-center">
                  <div className="px-3 py-5">
                    <a className="md:text-xl text-black font-semibold text-sm ">
                      {card.reviewerName}
                    </a>
                    <p>{card.message}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white hover:bg-[#CB8461] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white hover:bg-[#CB8461] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
