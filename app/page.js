"use client";

import React from "react";
import Map from "./components/Map.js";

const Main = () => {
  const center = { lat: 35.6764, lng: 139.65 };

  return (
    <div>
      <div className="container mx-auto mt-20 h-custom">
        <Map center={center} />
      </div>
    </div>
  );
};

export default Main;
