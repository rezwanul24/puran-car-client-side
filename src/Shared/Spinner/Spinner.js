import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="hero min-h-screen lg:max-w-md mx-auto max-w-sm">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
