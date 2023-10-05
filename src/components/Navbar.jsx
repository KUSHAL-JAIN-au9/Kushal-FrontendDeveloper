import { useEffect, useState } from "react";
import logo from "../assets/spacx-logo.png";

import { Link } from "react-scroll";

// import icons from react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as Navlink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const history = useNavigate();
  const navParam = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToExternalWebsite = () => {
    const externalWebsiteURL = "https://www.starlink.com/";

    // Open the external website in a new tab or window.
    window.open(externalWebsiteURL, "_blank");
  };

  const handleScrollToHome = () => {
    console.log("clicked");
    history("/");
  };

  const navItems = [
    // { link: "Home", path: "home" },
    // { link: "Service", path: "service" },
    { link: "FALCON HEAVY", path: "FALCONHEAVY" },
    { link: "FALCON 9", path: "FALCON9" },
    { link: "DRAGON", path: "dragon" },
    { link: "SUBSCRIBE", path: "subscribe" },
    // { link: "STAR LINK", href: "https://www.starlink.com/" },
    // { link: "FAQ", path: "faq" },
  ];
  return (
    <header className="w-full bg-black md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 border bg-black border-transparent transition-all duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to={"/"}
            onClick={handleScrollToHome}
            className="text-2xl font-semibold flex items-center space-x-3 cursor-pointer"
          >
            <img
              src={logo}
              alt=""
              className="w-full inline-block items-center"
              data-testid="SPACE X"
            />
            {/* <span>SPACE X</span> */}
          </Link>
          {navParam.pathname !== "/capsules" && (
            <ul className={`md:flex space-x-12 hidden`}>
              {navItems.map(({ link, path, href }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  href={path || href}
                  className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
                >
                  {link}
                </Link>
              ))}
              <Link
                to={"/"}
                onClick={handleScrollToExternalWebsite}
                spy={true}
                smooth={true}
                offset={-100}
                target={"_blank"}
                href={"https://www.starlink.com/"}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                STAR LINK
              </Link>
            </ul>
          )}

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white  py-2 px-4 transition-all duration-300 rounded hover:bg-neutralSilver hover:border border-white">
              Sign up
            </button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              data-testid="menu-button"
              className="text-gray900 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary open" />
              )}
            </button>
          </div>
        </div>

        {navParam.pathname !== "/capsules" && (
          <div
            data-testid="menu"
            className={`space-y-4 px-4 mt-16 py-7 x ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path, href }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-90}
                key={link}
                href={path || href}
                onClick={toggleMenu}
                className="block  text-white hover:text-gray-500"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
