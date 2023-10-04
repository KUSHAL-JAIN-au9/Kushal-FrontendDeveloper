import { Card } from "flowbite-react";
import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import FALBAN2 from "../assets/FALBAN2.png";
import FALBAN3 from "../assets/FALBAN3.png";
import FALBAN4 from "../assets/FALBAN4.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: `  FALCON 9 is
      First Orbital Class Rocket Capable of Reflight`,
      image: FALBAN2,
    },
    {
      id: 2,
      title: "Service to Earth Orbit,Moon,Mars and beyond",
      image: FALBAN3,
    },
    {
      id: 3,
      title: "TAKING HUMANS TO SPACE",
      image: FALBAN4,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Make life Multiplanetary
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          SpaceX envisions a future where humanity can colonize Mars and explore
          other celestial bodies, reducing the risk of extinction and expanding
          human civilization beyond Earth.
        </p>
      </motion.div>

      {/* all blogs */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between mt-16"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto  relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="mx-auto h-72 hover:scale-95 transition-all duration-300 rounded-xl border border-white"
            />

            <div className="text-center px-4 py-8 bg-black shadow-lg border border-white rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex gap-8 items-center justify-center">
                <Link
                  // href="/"
                  to="/capsules"
                  className="font-bold text-brandPrimary hover:text-neutralBlack"
                >
                  Check all Capsules
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
