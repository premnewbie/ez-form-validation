import React from "react";
import  EzLogo  from "../assets/ez-logo.png";
import Form from "./Form";

const CompanyTitle = () => {
  return (
    <div className="flex flex-col m-5 md:m-2">
      <img src={EzLogo} alt="ez-logo" className="my-4"/>
      <h2 className="text-4xl font-medium text-purple-950 my-4">Suite Of Business Support Services</h2>
      <p className="text-lg font-medium text-blue-950 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque id tortor in facilisis. Curabitur et tellus vel neque dignissim aliquam sed</p>
      <div className="hidden lg:block"><Form /></div>
    </div>
  );
};

export default CompanyTitle;
