import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "COST AS LOW AS $275K",
      decription:
        "$275k for 50kg to SSO with additional mass at $5.5k/kg. Affordable rates also available to Mid-Inclination LEO, GTO, and TLI.",
      image: "/src/assets/money.png",
    },
    {
      id: 2,
      title: "SCHEDULE CERTAINTY",
      decription:
        "SSO missions approximately every 4 months. Frequent launches to mid-inclination. Inquire for other orbits.",
      image: "/src/assets/schedule.png",
    },
    {
      id: 3,
      title: "CONTRACT FLEXIBILITY",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/contract.png",
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
          <img src="../assets/icons/company1.png" alt="" />
          <img src="../assets/icons/company2.png" alt="" />
          <img src="../assets/icons/company3.png" alt="" />
          <img src="../assets/icons/company4.png" alt="" />
          <img src="../assets/icons/company5.png" alt="" />
          <img src="../assets/icons/company6.png" alt="" />
          <img src="../assets/icons/company7.png" alt="" />
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
