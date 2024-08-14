  import React from 'react'

  function HeroPage() {
    return (
      <div className="container mx-auto flex text-white pt-20">
        <div className="w-2/3">
          
          <h1 className='text-6xl font-bold mb-8 text-left'>The Ultimate Platform For Advanced Software <br /> Solutions And Professional Development</h1>

          <p className="text-lg mb-8 text-left w-3/4">
            Discover the future of technology with our innovative software solutions and
            top-tier technical training. We bridge the gap between industry needs and
            professional growth, ensuring success for businesses and students alike.
          </p>

          <div className="flex justify-start gap-8">
            <button className="bg-indigo-950 text-white font-bold py-4 px-14 rounded-full text-xl ">
              TRAININGS
            </button>
            <button className="bg-black outline outline-1 text-white font-bold py-4 px-14 rounded-full text-xl">
              SERVICES
            </button>
          </div>
        </div>
        {/* Add your image here on the right side */}
      </div>
    )
  }

  export default HeroPage