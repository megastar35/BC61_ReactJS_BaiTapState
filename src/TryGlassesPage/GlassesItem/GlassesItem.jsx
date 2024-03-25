import React from "react";

const GlassesItem = ({ glasses, picked }) => {
  return (
    <div className="border-2 p-5 rounded-md space-y-2 hover:scale-110 " onClick={()=>{
      picked(glasses)
    }}>
      <img src={glasses.url} alt="" className=" " />
      <h2 className="text-2xl font-semibold">{glasses.name}</h2>
      <p className="text-lg text-gray-500">$ {glasses.price}</p>
    </div>
  );
};

export default GlassesItem;
