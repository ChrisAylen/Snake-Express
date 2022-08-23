import React from "react";
import Navbar from "./Navbar"

const NewRules = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full h-screen ">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
           
            <div>
              <h1 className="text-5xl font-bold text-green-700">
                SNAKE EXPRESS
              </h1>
              <p className="py-6 text-2xl">
              On a bounded plane, the player controls a dot, square, or object. It leaves a snake-like trail in its wake as it crawls forward.
              </p>
              <p className="py-6 text-lg">The snake keeps getting longer as it advances since the trail's finish is in a fixed location.</p>
              <p className="py-6 text-lg">The snake is a fixed length and has a moving tail that is a fixed distance from the head.</p>
              <p className="py-6 text-lg">When the snake collides with another object, the screen boundary, or itself, the player loses.</p>
            
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default NewRules;
