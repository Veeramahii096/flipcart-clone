import React from "react";
import "./Home.css";

import SimpleImageSlider from "react-simple-image-slider";

function Home() {
  const images = [
    { url: "https://m.media-amazon.com/images/I/71nqaV173zL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71QkSMqD5CL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61f720t266L._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61AQSNQQBaL._SX3000_.jpg" },

    { url: "https://m.media-amazon.com/images/I/61gzEy1KqCL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61nhlTOivrL._SX3000_.jpg" },
  ];
  return (
    
    <div className="Home">
      <div className="home__container">
        <div className="slider">
          <SimpleImageSlider
            width={1340}
            height={300}
            images={images}
            showBullets={false}
            autoPlay={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>



  );
}

export default Home;
