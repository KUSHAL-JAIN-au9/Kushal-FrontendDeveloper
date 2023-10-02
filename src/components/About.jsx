import React from "react";
import FALHEAVY from "../assets/FALHEAVY.png";
import aboutImg2 from "../assets/mobile-login.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
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
            <button className="btn-primary"> Check Capsules</button>
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
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>7</h4>
                  <p>FALCON HEAVY LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>192</h4>
                  <p>TOTAL REFLIGHTS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>13</h4>
                  <p>FALCON HEAVY LANDINGS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>10</h4>
                  <p>FALCON HEAVY REFLIGHTS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md: mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>42</h4>
                  <p>DRAGON LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>38</h4>
                  <p>DRAGON REFLIGHTS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>42</h4>
                  <p>DRAGON LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    38
                  </h4>
                  <p>DRAGON REFLIGHTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div> */}

          {/* stats */}
          <div className="md: mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/group.png" alt="" /> */}
                <div className="lan-info">
                  <h4>257</h4>
                  <p>TOTAL LAUNCHES</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/clubs.png" alt="" /> */}
                <div className="lan-info">
                  <h4>217</h4>
                  <p>TOTAL LANDINGS</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/click.png" alt="" /> */}
                <div className="lan-info">
                  <h4>192</h4>
                  <p>TOTAL REFLIGHTS</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <img src="/src/assets/icons/payments.png" alt="" /> */}
                <div className="lan-info">
                  <h4>192</h4>
                  <p>TOTAL REFLIGHTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
