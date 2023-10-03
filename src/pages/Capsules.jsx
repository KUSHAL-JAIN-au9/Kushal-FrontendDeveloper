import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import CapsuleItems from "../components/CapsuleItems";
import axios from "axios";
import { BASEURL } from "../constants";

const Capsules = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    getCapsules();
  }, []);

  const getCapsules = useCallback(async () => {
    const { data } = await axios(BASEURL);

    console.log(data);
    setCapsules(data);
    return data;
  }, []);

  console.log("capsules", capsules);
  return (
    <>
      <Navbar />
      <Home />
      <CapsuleItems capsules={[...capsules]} setCapsules={setCapsules} />
    </>
  );
};

export default Capsules;
