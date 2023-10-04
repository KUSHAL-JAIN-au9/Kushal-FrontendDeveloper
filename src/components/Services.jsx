import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";
import Company6 from "../assets/company6.png";
import Company7 from "../assets/company7.png";
import money from "../assets/money.png";
import schedule from "../assets/schedule.png";
import contact from "../assets/contract.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "COST AS LOW AS $275K",
      decription:
        "$275k for 50kg to SSO with additional mass at $5.5k/kg. Affordable rates also available to Mid-Inclination LEO, GTO, and TLI.",
      image: money,
    },
    {
      id: 2,
      title: "SCHEDULE CERTAINTY",
      decription:
        "SSO missions approximately every 4 months. Frequent launches to mid-inclination. Inquire for other orbits.",
      image: schedule,
    },
    {
      id: 3,
      title: "CONTRACT FLEXIBILITY",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: contact,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Make life multiplanetary by enabling Humans to become a
          multi-planetary Species.
        </h2>
        <p className="text-neutralGrey">
          We have been collaborating with Fortune 500+ vendors to build
          incredible Rockets.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src={Company1} alt="" />
          <img src={Company2} alt="" />
          <img src={Company3} alt="" />
          <img src={Company4} alt="" />
          <img src={Company5} alt="" />
          <img src={Company6} alt="" />
          <img src={Company7} alt="" />
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        {/* <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Make life multiplanetary by enabling Humans to become a
          multi-planetary Species.
        </h2> */}
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          SMALLSAT RIDESHARE PROGRAM
        </h2>
        {/* <p className="text-neutralGrey">
          We have been collaborating with Fortune 500+ vendors to build
          incredible Rockets to launch other planets.
        </p> */}
        <p className="text-neutralGrey">
          DEDICATED RIDESHARE MISSIONS AS LOW AS $275K*. SEARCH FLIGHTS BELOW.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-16 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
