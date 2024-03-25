import React from "react";
import avatar from "/public/glassesImage/model.jpg";
const Avatar = ({ glasses }) => {
  // // Sử dụng giá trị mặc định nếu glasses không có dữ liệu
  // const defaultGlasses = {
  //   name: "GUCCI G8759H",
  //   url: "./glassesImage/v2.png",
  //   desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  // };
  // // Sử dụng giá trị mặc định hoặc giá trị từ prop glasses
  // const currentGlasses = glasses || defaultGlasses;
  // console.log(glasses);

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-10 ">
        <div className="avatar-left m-auto   ">
          <div className=" card w-3/5 ">
            <div className="card_image relative">
              <img src={avatar} alt="model_image" className=" relative" />
              <img
                src={glasses.url}
                alt=""
                className="glasses_image absolute top-1/4 left-16 w-40"
              />
              <div className="card_body absolute bottom-0 bg-orange-500 opacity-50">
                <h2 className="glasses_title text-3xl">
                  {glasses.name}
                </h2>
                <p className="glasses_descrip">{glasses.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="avatar-left m-auto   ">
          <div className=" card w-3/5 ">
            <div className="card_image relative">
              <img src={avatar} alt="model_image" className=" relative" />
              <img
                src={glasses.url}
                alt=""
                className="glasses_image absolute top-1/4 left-16 w-40"
              />
              <div className="card_body absolute bottom-0 bg-orange-500 opacity-50">
                <h2 className="glasses_title text-3xl">
                  {glasses.name}
                </h2>
                <p className="glasses_descrip">{glasses.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
