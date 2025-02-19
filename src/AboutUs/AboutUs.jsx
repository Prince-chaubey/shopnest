import React from 'react'
import img from "../assets/about.png"
import img2 from "../assets/jobs.webp"

const AboutUs = () => {
  return (
    <div className='py-[100px] px-[20px]'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={img} width="100%"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get to Know Us
        
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to ShopNest,your one-stop destination for quality products at unbeatable prices!
       At ShopNest, we are committed to providing a seamless and enjoyable shopping experience. Our platform offers a wide range of products, from fashion and electronics to home essentials and more. With a user-friendly interface, secure payment options, and fast delivery, we ensure that your shopping journey is smooth and hassle-free.</p>

       <p>At ShopNest, we believe in building a better future by making conscious choices. We are committed to sustainability and actively work towards reducing our environmental impact. Here’s how we contribute:
      <p>♻️ Eco-Friendly Packaging – We use recyclable and biodegradable packaging materials to reduce waste.</p>
      <p>🌍 Sustainable Sourcing – We collaborate with brands that prioritize ethical and eco-friendly production.</p>
     <p>🚚 Carbon Footprint Reduction – We optimize our logistics to minimize emissions and promote green delivery options.</p>
     <p>💚 Community Initiatives – We support programs that promote sustainability and environmental awareness.</p>
      <p>By shopping with ShopNest, you’re not just getting great products—you’re also contributing to a greener, more sustainable world.</p>
 </p>
</div>
</div>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Careers at ShopNest
    
      </h1>
      <p className="mb-8 leading-relaxed">At ShopNest, we are more than just an online store—we are a passionate team dedicated to revolutionizing the shopping experience. We believe in innovation, creativity, and excellence, and we are always looking for talented individuals to join our growing family.</p> 
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={img2} width="100%"/>
    </div>
  </div>
</section>
</section>
    </div>
  )
}

export default AboutUs