import React from "react";
import Header from "../Header/Header";
import LowerHeader from "../Header/LowerHeader";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      <LowerHeader /> {/* 👈 Add this here */}
      {children}
    </div>
  );
}

export default LayOut;
