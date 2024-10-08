import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PopularCourses = () => {
  const cardDetails = [
    {
      id: 1,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Solayman Khan",
      authorDesignation: "Software Engineer",
      image:
        "https://us.images.westend61.de/0001588849pw/aerial-view-of-dhaka-city-centre-with-residential-district-at-sunset-dhaka-bangladesh-AAEF11013.jpg",
      title: "The Future of Urban Development in Dhaka",
      participator: 150,
      price: 120,
      totalVideo: 33
    },
    {
      id: 2,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Ayesha Rahman",
      authorDesignation: "Data Scientist",
      image:
        "https://as2.ftcdn.net/v2/jpg/03/14/80/03/1000_F_314800369_EbZflpJIAiDOA6ssWHd1KMEtOQHI15x6.jpg",
      title: "Exploring the Natural Beauty of Bangladesh",
      participator: 200,
      price: 130,
      totalVideo: 30
    },
    {
      id: 3,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Rafiq Ahmed",
      authorDesignation: "Civil Engineer",
      image:
        "https://us.images.westend61.de/0001890900pw/aerial-view-of-dhaka-city-with-residential-area-at-sunset-dhaka-bangladesh-AAEF22036.jpg",
      title: "Infrastructure Improvements in Dhaka Bangladesh",
      participator: 175,
      price: 200,
      totalVideo: 20
    },
    {
      id: 4,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Nusrat Jahan",
      authorDesignation: "Environmental Scientist",
      image:
        "https://media.istockphoto.com/id/1418012316/photo/tea-garden.jpg?s=612x612&w=0&k=20&c=yk7d_zIIoDISNQAO_yFHtj_QQY7xCpVY8Bg33CD28hY=",
      title: "The Impact of Tea Gardens on Local Ecosystems",
      participator: 120,
      price: 100,
      totalVideo: 22
    },
    {
      id: 5,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Mahmudul Hasan",
      authorDesignation: "Architect",
      image:
        "https://www.bhmpics.com/downloads/bangladesh-nature/1.feat_30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg",
      title: "Sustainable Architecture in Rural Bangladesh",
      participator: 130,
      price: 150,
      totalVideo: 24
    },
    {
      id: 6,
      authorImage:
        "https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg",
      authorName: "Farhana Karim",
      authorDesignation: "Political Analyst",
      image:
        "https://images.prothomalo.com/prothomalo-english%2F2023-04%2Fc9065616-4564-443f-b409-066dce650145%2FJatiya_Sangsad.webp?rect=0%2C111%2C800%2C420&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
      title: "Political Landscape of Dhaka Bangladesh",
      participator: 140,
      price: 300,
      totalVideo: 27
    },
  ];

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
  });

  return (
    <div id="course" className="bg-primary h-screen flex flex-col justify-center items-center py-10">
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold">Popular courses of the week</h1>
        <p className="md:w-1/2 mx-auto text-xs py-3">
          List of the most popular lists that are often studied by our members
        </p>
      </div>
      
      {/* Cards Slider */}
      <div className="relative container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="keen-slider" ref={sliderRef}>
          {cardDetails.map((card) => (
            <div key={card.id} className="keen-slider__slide bg-white rounded-lg">
              <div className="overflow-hidden hover:shadow-xl">
                <div className="m-0 rounded-none">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>

                <div className="">
                  <div className="px-3 py-5">
                    <a
                      className="md:text-xl text-black font-semibold text-sm "
                    >
                      {card.title}
                    </a>
                  </div>
                  <div className="flex gap-10 items-center px-3 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={card.authorImage} alt="" />
                        </div>
                      </div>
                      <div>
                        <p>{card.authorName}</p>
                        <p className="text-xs">{card.authorDesignation}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <p>{card.participator}</p>
                        <p className="text-xs">Participator</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-gray-50">
                    <div>
                      <button className="btn-error">Buy Now</button>
                    </div>
                    <div className="">
                      <h1 className="text-3xl font-semibold text-black">${card.price}<span className="text-xs font-normal text-blue-gray-600">/{card.totalVideo} Video</span> </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 border-2 bg-white hover:bg-[#245D51] text-black hover:text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 border-2 bg-white hover:bg-[#245D51] text-black hover:text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;

