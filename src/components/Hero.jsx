import React, { useState } from "react";

const Hero = () => {
  const cards = [
    {title:"SRMIST - Engineering And Technology", image:"src/assets/SRM main logo.png"},
    {title:"SRMIST - Science And Humanities", image:"src/assets/SRM main logo.png"}, 
    {title:"SRMIST - Dental College And Hospital", image:"src/assets/SRMDC logo.png"},
    {title:"SRMIST - Easwari Engineering College", image:"src/assets/SRM ES LOGO.png"}, 
    {title:"SRMIST - SEAD", image:"src/assets/SRM SEAD.png"},
    /* {title:"SRMIST - Hotel Management", image:""}, */
  ];

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="flex flex-row flex-wrap justify-center">{/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 */}
        {cards.map((card, index) => (
          <div className="flex flex-row flex-wrap justify-center m-10" key={index}>
            <Card title={card.title} image={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, image}) => {

  const handleCardClick = () => {
    window.location.href = '/dashboard'; 
  };

  return (
    <div
      className="w-72 h-80 rounded-xl shadow-md bg-blue-700 text-white cursor-pointer p-4"
      onClick={handleCardClick}
    >
      <img
        src={image}
        alt="University Logo"
        className="object-contain object-center w-full h-48 rounded-t-xl bg-white"
      />
      <div className="flex flex-col justify-between p-6 space-y-4 h-32">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold -tracking-tighter text-center">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;