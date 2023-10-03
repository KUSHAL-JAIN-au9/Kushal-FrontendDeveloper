import { TextInput } from "flowbite-react";
import React, { Suspense, useEffect, useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import Loading from "./Loading";
import cardImg from "../assets/FALBAN2.png";
import { useLocation, useParams } from "react-router-dom";

const CapsuleItems = ({ capsules, setCapsules }) => {
  //   const [capsulesList, setCapsulesList] = useState([...capsules]);
  const [capsulestatus, setCapsuleStatus] = useState("");
  const [capsuleType, setCapsuleType] = useState("");
  const [capsuleOriginalLaunch, setCapsuleOriginalLaunch] = useState("");

  //   const navParam = useLocation();

  //   console.log("param", navParam);

  //   useEffect(() => {}, [capsules]);

  const handleCapsuleStatus = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value.toLowerCase());

    setCapsuleStatus(value.toLowerCase());
  };

  const handleCapsuleType = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value.toLowerCase());
    setCapsuleType(value.toLowerCase());
  };

  const handleCapsuleOrigLaunch = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value.toLowerCase());

    setCapsuleOriginalLaunch(value.toLowerCase());
  };

  const handleSubmit = () => {
    console.log("submitted");
    console.log(capsuleOriginalLaunch);
    console.log(capsuleType);
    console.log(capsulestatus);

    if (capsuleOriginalLaunch) {
      if (capsuleType && capsulestatus) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.type.toLowerCase() === capsuleType &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsulestatus) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsuleType) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.type.toLowerCase() === capsuleType
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch
        );
        console.log("filters o launch only", filteredCapsules);
        setCapsules(filteredCapsules);
      }
    }
    if (capsuleType) {
      if (capsuleOriginalLaunch && capsulestatus) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.type.toLowerCase() === capsuleType &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsuleOriginalLaunch) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.type.toLowerCase() === capsuleType
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsulestatus) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.type.toLowerCase() === capsuleType &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else {
        const filteredCapsules = capsules.filter(
          (item, index) => item.type.toLowerCase() === capsuleType
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      }
    }
    if (capsulestatus) {
      if (capsuleOriginalLaunch && capsuleType) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.type.toLowerCase() === capsuleType &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsuleOriginalLaunch) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.original_launch.toLowerCase() === capsuleOriginalLaunch &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else if (capsuleType) {
        const filteredCapsules = capsules.filter(
          (item, index) =>
            item.type.toLowerCase() === capsuleType &&
            item.status.toLowerCase() === capsulestatus
        );
        console.log("filters", filteredCapsules);
        setCapsules(filteredCapsules);
      } else {
        const filteredCapsules = capsules.filter(
          (item, index) => item.status.toLowerCase() === capsulestatus
        );
        console.log("filters status only", filteredCapsules);
        setCapsules(filteredCapsules);
      }
    }
  };

  console.log("capsules in cart items", capsules);
  return (
    <div className="w-full h-[500px]">
      <div className="flex flex-col items-center justify-around md:space-x-12  py-8 md:flex-row px-2 ">
        <div className="max-w-md text-white">
          <div className="mb-2 block"></div>
          <TextInput
            id="email4"
            placeholder="search by status"
            required
            rightIcon={SiMinutemailer}
            type="email"
            onChange={handleCapsuleStatus}
          />
        </div>
        <div className="max-w-md text-white">
          <div className="mb-2 block"></div>
          <TextInput
            id="email4"
            placeholder="search by original launch"
            required
            rightIcon={SiMinutemailer}
            type="email"
            onChange={handleCapsuleOrigLaunch}
          />
        </div>
        <div className="max-w-md text-white">
          <div className="mb-2 block"></div>
          <TextInput
            id="email4"
            placeholder="search by type"
            required
            rightIcon={SiMinutemailer}
            type="email"
            onChange={handleCapsuleType}
          />
        </div>

        <div className="max-w-md text-white">
          <div className="mb-2 block"></div>
          <button
            className=" h-11 bg-brandPrimary rounded-xl text-white  py-2 px-4 transition-all duration-300  hover:bg-neutralSilver hover:border border-white"
            onClick={handleSubmit}
            disabled={
              capsuleOriginalLaunch == "" &&
              capsuleType == "" &&
              capsulestatus == ""
            }
            // disabled
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-around items-center gap-8 mt-4 py-8">
        <Suspense fallback={<Loading />}>
          {Array.isArray(capsules) && capsules.length > 0 ? (
            capsules.map((capsule, index) => {
              return (
                <div
                  key={capsule.capsule_serial}
                  className=" w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:max-w-sm mx-2 "
                >
                  <img className="rounded-t-lg" src={cardImg} alt="" />

                  <div className="p-5">
                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      Capsule Serial: {capsule?.capsule_serial}
                    </p>
                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      Capsule Status: {capsule?.status}
                    </p>
                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      Original launch: {capsule?.original_launch || "NA"}
                    </p>
                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      Landings: {capsule?.landings}
                    </p>
                    <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      Type: {capsule?.type}
                    </p>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <strong className=" text-l font-bold text-gray-900 dark:text-gray-400">
                        details :{" "}
                      </strong>
                      {capsule?.details}
                    </p>
                    {/* <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>
              );
            })
          ) : (
            <h5 className="text-white text-5xl">No data available</h5>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(CapsuleItems);
