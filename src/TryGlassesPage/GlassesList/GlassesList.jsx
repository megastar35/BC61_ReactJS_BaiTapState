import React from "react";
import GlassesItem from "../GlassesItem/GlassesItem";

const GlassesList = ({ glassesList, picked }) => {
  return (
    <div className="grid grid-cols-5 gap-5 bg-white p-10 mx-10 shadow-lg">
      {glassesList.map((item, index) => {
        return <GlassesItem glasses={item} key={index} picked={picked} />;
      })}
    </div>
  );
};

export default GlassesList;
