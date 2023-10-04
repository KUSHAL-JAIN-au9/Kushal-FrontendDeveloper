import React from "react";
import FALHEAVY from "../assets/FALHEAVY.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";

const About = () => {
  const history = useNavigate();

  return (
    <div>
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="FALCONHEAVY"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={FALHEAVY} alt="" className="w-auto h-72 rounded-xl" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              FALCON HEAVY
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Falcon Heavy is composed of three reusable Falcon 9 nine-engine
              cores whose 27 Merlin engines together generate more than 5
              million pounds of thrust at liftoff, equal to approximately
              eighteen 747 aircraft. As one of the world’s most powerful
              operational rockets, Falcon Heavy can lift nearly 64 metric tons
              (141,000 lbs) to orbit.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                history("/capsules");
              }}
            >
              {" "}
              Check Capsules
            </button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="md:w-full mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
          <div className="md: mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>259</h4>
                  <p>FALCON 9 LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>192</h4>
                  <p>FALCON 9 LANDINGS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>192</h4>
                  <p>FALCON 9 REFLIGHTS</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>7</h4>
                  <p>FALCON HEAVY LAUNCHES</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md: mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>20</h4>
                  <p>DRAGON REFLIGHTS</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>38</h4>
                  <p>DRAGON VISITS TO THE ISS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>42</h4>
                  <p>DRAGON LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    13
                  </h4>
                  <p>FALACON HEAVY LANDINGS</p>
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          {/* <div className="md: mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
           
                <div className="lan-info">
                  <h4>10</h4>
                  <p>FALACON REFLIGHTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
     
                <div className="lan-info">
                  <h4>217</h4>
                  <p>TOTAL LANDINGS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
             
                <div className="lan-info">
                  <h4>192</h4>
                  <p>TOTAL REFLIGHTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
               
                <div className="lan-info">
                  <h4>192</h4>
                  <p>TOTAL REFLIGHTS</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
