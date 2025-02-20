import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import u1 from "../assets/u1.jpg";
import u2 from "../assets/u2.jpg";
import u3 from "../assets/u3.jpg";
import u4 from "../assets/u4.jpg";
import u5 from "../assets/u5.jpg";

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 underline">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
   
        >
          {[  
            { 
              name: "HOLDEN CAULFIELD", 
              role: "Senior Product Designer", 
              img: u1, 
              statement: "The service was outstanding! The team went above and beyond my expectations."
            },
            { 
              name: "ALPER KAMU", 
              role: "UI Developer", 
              img: u2, 
              statement: "An excellent experience! The design and execution were flawless."
            },
            { 
              name: "HENRY LETHAM", 
              role: "CTO", 
              img: u3, 
              statement: "Highly professional and creative. Would definitely recommend their services."
            },
            { 
              name: "MARTIN MULLER", 
              role: "Software Engineer", 
              img: u4, 
              statement: "Their attention to detail and innovative approach really impressed me."
            },
            { 
              name: "EMILY WONG", 
              role: "Founder & CEO", 
              img: u5, 
              statement: "Exceptional service and support throughout the entire process."
            }
          ].map((person, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white shadow-xl p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mx-auto mb-6 object-cover object-center rounded-full border-4 border-indigo-500"
                  src={person.img}
                />
                <p className="leading-relaxed text-gray-700 mb-4">{person.statement}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-4"></span>
                <h3 className="text-gray-900 font-semibold text-lg">{person.name}</h3>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;