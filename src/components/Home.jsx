import React from "react";
import { Carousel } from "flowbite-react";
import FAL9 from "../assets/FALBAN1.png";
import FALHEAVY from "../assets/FALBAN2.png";
import STARSHIP from "../assets/FALBAN3.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  return (
    <div className=" bg-black " id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center rounded-xl">
        <Carousel className="w-full mx-auto rounded-xl ">
          <div className="banner-main-section bg-my-image-class1">
            <div>
              <img src={FAL9} alt="" className=" hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 h-[400px]">
              <h1 className="banner-main-heading md:text-4xl">
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
              <button
                className="btn-primary"
                onClick={() => {
                  history("/capsules");
                }}
              >
                Check Capsules
              </button>
            </div>
          </div>
          <div className="banner-main-section bg-my-image-class2">
            <div>
              <img src={FALHEAVY} alt="" className="hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 h-[400px]">
              <h1 className=" banner-main-heading md:text-3xl">
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
              <button
                className="btn-primary"
                onClick={() => {
                  history("/capsules");
                }}
              >
                Check Capsules
              </button>
            </div>
          </div>
          <div className="banner-main-section bg-my-image-class3">
            <div>
              <img src={STARSHIP} alt="" className="hidden" />
            </div>
            {/* hero text */}
            <div className="md:w-7/12 h-[400px]">
              <h1 className="banner-main-heading md:text-5xl">
                STARSHIP{" "}
                <span className="text-brandPrimary text-xl leading-snug">
                  Service to Earth Orbit,Moon,Mars and beyond
                </span>
              </h1>
              <p className=" text-neutralGrey mb-8 ">
                fully reusable spacecraft designed for a wide range of missions,
                including crewed missions to the Moon, Mars, and beyond, as well
                as satellite launches, cargo missions, and even point-to-point
                Earth travel. It represents one of SpaceX's most ambitious and
                groundbreaking projects.
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  history("/capsules");
                }}
              >
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
