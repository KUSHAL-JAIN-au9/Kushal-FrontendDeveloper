import React from "react";
import DragonImg from "../assets/DRAGON.jpg";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Dragon = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id= 'dragon'>
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={DragonImg} alt="" className="w-auto h-72 rounded-xl " />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5 mx-auto"
        >
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            DRAGON
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
            The Dragon spacecraft is capable of carrying up to 7 passengers to
            and from Earth orbit, and beyond. It is the only spacecraft
            currently flying that is capable of returning significant amounts of
            cargo to Earth, and is the first private spacecraft to take humans
            to the space station.
          </p>
          <button className="btn-primary"> Check Capsules</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dragon;
