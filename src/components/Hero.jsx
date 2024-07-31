import React, { useState } from "react";

const Hero = () => {
  const titles = [
    "SRMIST - Engineering And Technology",
    "SRMIST - Science And Humanities",
    "SRMIST - Dental College And Hospital",
    "SRMIST - Easwari Engineering College",
    "SRMIST - SEAD",
    "SRMIST - Hotel Management",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12">
        {titles.map((title, index) => (
          <div className="flex justify-center" key={index}>
            <Card title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleCardClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div
      className="w-80 h-80 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-full h-42 overflow-hidden rounded-t-md p-4 flex items-center justify-center">
        <img
          src="/Srmseal.png"
          alt=""
          className="object-contain w-40 max-h-40"
        />
      </div>
      <div className="flex flex-col justify-between p-6 space-y-4 h-32">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold -tracking-tighter">
            {title}
          </h2>
        </div>
        <button
          type="button"
          title="Like post"
          className={`flex items-center justify-center w-10 h-10 rounded-full ${liked ? 'bg-pink-500 text-white' : 'bg-white-200 text-gray-500'}`}
          onClick={handleLike}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6 fill-current"
          >
            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
