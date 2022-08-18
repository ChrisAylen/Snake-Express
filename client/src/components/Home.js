import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const Home = () => {

  return (
    <>
    <Navbar />
    <div className="Homepage flex flex-row items-center justify-center">
      
        <div>
            <Link to = "/snake" ><button className="bg-[#000000] hover:bg-orange-700 text-white font-bold py-2 px-4 border border-[#f06c00] rounded mr-10">
                Play Snake
            </button></Link>
        </div>
    
    </div>
    </>
  );
};

export default Home;





