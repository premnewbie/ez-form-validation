import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {

  const [email,setEmail] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const ezMail = email.includes("@ez.works")
    if(ezMail){
      toast.error("Ez mail ids are not accepted")
      return;
    }
    const response = await fetch("http://3.228.97.110:9000/api",{
      method:"POST",
      body: JSON.stringify({
        "email": email,
      })
    })
    const res = await response.json();
    
    toast(res.message);
  }

  return (
    <div className="p-2">
      <form className="col-span-1 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-1" onSubmit={handleSubmit}>
        <div className="col-span-1 md:col-span-3 p-2 flex justify-center">
          <input type="email" value={email} required placeholder="Email Address" className="pl-2 w-full h-12 border border-gray-400 rounded-md" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start p-2">
          <button type="submit" className="text-lg w-75 h-12 bg-orange-400 text-white rounded-md hover:bg-orange-300">
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
