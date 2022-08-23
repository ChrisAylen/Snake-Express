import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const Home = () => {

  return (
    <>
    <Navbar />
    <div className="Homepage flex flex-row items-center justify-center">
      
        <div >
            <Link to = "/snake" ><button className="bg-green-800 hover:bg-green-500 text-white font-bold py-5 px-10 border border-black rounded mr-10">
                Play Snake
            </button></Link>
        </div>
    
    </div>
    </>
  );
};

export default Home;





