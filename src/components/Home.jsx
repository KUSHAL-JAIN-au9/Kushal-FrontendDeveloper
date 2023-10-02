import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/FALBAN1.png";
import banner2 from "../assets/FALBAN2.png";
import banner3 from "../assets/FALBAN3.png";

const Home = () => {
  const backgroundImageUrl = "../assets/FALBAN1.png";
  return (
    <div className=" bg-black " id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center rounded-xl">
        <Carousel className="w-full mx-auto rounded-xl ">
          <div className="my-28 md:my-8 py-12  flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12 bg-my-image-class1 bg-cover  rounded-xl">
            <div>
              <img src={banner} alt="" className=" hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 h-[400px]">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                FALCON 9{" "}
                <span className="text-brandPrimary leading-snug">
                  First Orbital Class Rocket Capable of Reflight
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Falcon 9 is a two-stage rocket designed and manufactured by
                SpaceX for the reliable and safe transport of satellites and the
                Dragon spacecraft into orbit.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Check Capsules
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12 bg-my-image-class2 bg-cover  rounded-xl">
            <div>
              <img src={banner2} alt="" className="hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 h-[400px]">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                FALCON HEAVY{" "}
                <span className="text-brandPrimary leading-snug">
                  OVER 5 MILLION LBS OF THRUST
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                With the ability to lift into orbit over 54 metric tons (119,000
                lb)--a mass equivalent to a 737 jetliner loaded with passengers,
                crew, luggage and fuel--Falcon Heavy can lift more than twice
                the payload of the next closest operational vehicle, the Delta
                IV Heavy, at one-third the cost.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Check Capsules
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12 bg-my-image-class3 bg-cover bg-center rounded-xl">
            <div>
              <img src={banner3} alt="" className="hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 h-[400px]">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                STARSHIP{" "}
                <span className="text-brandPrimary leading-snug">
                  Service to Earth Orbit,Moon,Mars and beyond
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                fully reusable spacecraft designed for a wide range of missions,
                including crewed missions to the Moon, Mars, and beyond, as well
                as satellite launches, cargo missions, and even point-to-point
                Earth travel. It represents one of SpaceX's most ambitious and
                groundbreaking projects.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Check Capsules
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
