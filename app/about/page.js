import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-yellow-50">About This Project</h1>
            <p className="mb-5 text-yellow-50 prose">
              This is a website designed to track Sora the Troll when he is streaming. 
               The location is manually updated by various fans around the world. 
            </p>
            <button className="btn btn-primary">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
