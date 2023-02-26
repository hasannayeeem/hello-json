import React from "react";
import fakeData from "../FakeData/fakeData.json";
import { renderElement } from "./renderFunction";
const Hero = () => {
  const allJson = { ...fakeData };
  return (
    <div>{renderElement(allJson.data[allJson.rootNodeId], allJson.data)}</div>
  );
};

export default Hero;
