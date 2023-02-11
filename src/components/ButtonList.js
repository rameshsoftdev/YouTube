import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentines","News","War"];

const ButtonList = () => {
  return (
    <div className="flex">
        {
            list.map((button)=>{
              return <Button name={button} />
            })
        }
    </div>
  );
};

export default ButtonList;