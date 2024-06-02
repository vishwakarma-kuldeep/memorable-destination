// Import required libraries
"use client";
import React, { useState } from "react";
import InputBox from "./ui/InputBox";
// Create the TravelPlan component
const FormField = () => {
  // Declare state variables using the useState hook
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform necessary actions with the form data
    console.log("Destination:", destination);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };
  const styleObj = {width:"10.5rem", fontSize:"1rem"}

  // Render the component
  return (
    <div className="flex  p-4 justify-center right-4 mr-4 bg-white text-black top-36 w-[400px] h-[470px] rounded-lg flex-col z-50" style={{
      boxShadow: "1px 5px 2px 2px rgba(0,0,0,.15) font-crimson ",
    }}>
      <h1 className="font-bold text-[1.6rem] justify-center"> Get your free travel plan now</h1>
      <div className="h-5/6 w-auto   flex font-semibold py-2 flex-col">
        <div className="flex flex-col w-full">
          <h2 className="text-lg"> What do you want to explore?</h2>
          <div className=" h-32 flex flex-col  justify-between py-2 w-full ">
          
          <InputBox type="text" placeholder="location" span="Location" styles={{
            width:"95%",
          }}/>
          <InputBox type="text" placeholder="destination" span="Destination" styles={{
            width:"95%",
          }} />

          </div>
        </div>
        <div className="flex-col w-full py-0">
          <h2 className="text-lg"> When are you planning to travel?</h2>
          <div className=" h-16 flex flex-row  justify-between py-2 w-[95%] left-0">
          <InputBox type="date" placeholder="start date" span="Start Date" styles={styleObj}/>
          <InputBox type="date" placeholder="end date" span="End Date" styles={styleObj}/>
          </div>
        </div>
        <div className="flex justify-center py-4 flex-col">
         <div className="py-2 my-1">
         {/* <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mr-2"
            required
          /> 
          <label htmlFor="terms" className="text-xs">Not Sure, let us decide</label> */}
          <label
  className="relative flex cursor-pointer items-center justify-start gap-[1em]"
  for="star"
>
  <input className="peer appearance-none" id="star" name="star" type="checkbox" />
  <span
    className="absolute left-10 top-1/2 h-[1.5em] w-[1.5em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[1px] border-black"
  >
  </span>
  <svg
    className="absolute left-10 top-1/2 h-[1.5em] w-[1.5em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
    viewBox="0 0 38 37"
    fill="none"
    height="37"
    width="38"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.617 36.785c-.676-5.093 4.49-10.776 6.318-14.952 1.887-4.31 4.315-10.701 6.055-15.506C20.343 2.59 20.456.693 20.57.789c3.262 2.744 1.697 10.518 2.106 14.675 1.926 19.575 4.62 12.875-7.635 4.43C12.194 17.933 2.911 12.1 1.351 8.82c-1.177-2.477 5.266 0 7.898 0 2.575 0 27.078-1.544 27.907-1.108.222.117-.312.422-.526.554-1.922 1.178-3.489 1.57-5.266 3.046-3.855 3.201-8.602 6.002-12.11 9.691-4.018 4.225-5.388 10.245-11.321 10.245"
      stroke-width="1.5px"
      pathLength="100"
      stroke="#000"
    ></path>
  </svg>
  <p className="text-[1em] font-semibold [user-select:none] absolute left-12">Not Sure, let us decide</p>
</label>

         </div>
          <button
            className="bg-yellow-300 hover:bg-blue-500 text-black hover:text-white font-bold py-2 px-4 rounded my-4"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Render the FormField component
export default FormField;
