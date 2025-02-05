import React from "react";
import shoe from "../assets/shoe.jpg";
import girl from "../assets/girl.jpg";
import men from "../assets/men.jpg";
import beauty from "../assets/beauty.jpg";
import stuff from "../assets/stuff.jpg";
import lappy from "../assets/lappy.webp";

const Gallery = () => {
  return (
    <div className="py-8">
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
          
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="gallery"
              className="w-full object-cover rounded-lg aspect-[16/10] shadow-xl transition-transform duration-500 ease-in-out hover:skew-x-6 hover:scale-75"
              src={shoe}
            />
            <img
              alt="gallery"
              className="w-full object-cover rounded-lg aspect-[16/10] shadow-xl transition-transform duration-500 ease-in-out hover:skew-y-6 hover:scale-75"
              src={girl}
            />
            <img
              alt="gallery"
              className="w-full col-span-2 object-cover rounded-lg aspect-[16/9] shadow-xl transition-transform duration-500 ease-in-out hover:skew-x-6 hover:scale-75"
              src={men}
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="gallery"
              className="w-full col-span-2 object-cover rounded-lg aspect-[16/9] shadow-xl transition-transform duration-500 ease-in-out hover:skew-y-6 hover:scale-75"
              src={stuff}
            />
            <img
              alt="gallery"
              className="w-full object-cover rounded-lg aspect-[16/10] shadow-xl transition-transform duration-500 ease-in-out hover:skew-x-6 hover:scale-75"
              src={beauty}
            />
            <img
              alt="gallery"
              className="w-full object-cover rounded-lg aspect-[16/10] shadow-xl transition-transform duration-500 ease-in-out hover:skew-y-6 hover:scale-75"
              src={lappy}
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
