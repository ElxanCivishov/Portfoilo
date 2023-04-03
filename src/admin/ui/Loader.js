import { TailSpin } from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Loader;
