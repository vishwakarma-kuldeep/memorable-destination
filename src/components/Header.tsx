import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex h-20 w-full fixed justify-center items-center bg-white " style={{
      boxShadow: "0 1px 1px 0 rgba(0,0,0,.15)",
    }}>
      <div className="grid grid-cols-3 h-full w-5/6 ">
        {/*Start of Logo section */}
        <div className="w-40 flex justify-center items-center">
          <Link href="/">
            <div
              className="align-center"
              style={{
                // width: "55px",
                height: "max-content",
                margin: "0px",
                filter: "blur(0px)",
                borderRadius: "0px",
              }}
            >
              <Image
                height={70}
                width={150}
                alt={"Image1"}
                src="https://placehold.co/150x80"
               
                className=""
                style={{
                  height: "auto",
                  display: "none",
                  borderRadius: "5px",
                }}
              />
              <Image
                height={70}
                width={150}
                alt={"Image1"}
                src="https://placehold.co/150x80"
                className="ImageLoader__FullImage-sc-1x71nqh-2 hPFovS"
                style={{
                  height: "auto",
                  display: "block",
                  borderRadius: "0px",
                  maxWidth: "none",
                  maxHeight: " none",
                }}
              />
            </div>
          </Link>
        </div>
        {/* End of logo section */}
        {/* The Search Bar starts */}
        <div
          className="flex  justify-center items-center   "         
        >
          <div
            className=""
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "6px",
              borderColor: "rgb(228, 228, 228)",
              width: "90%",
              margin: "auto",
              height: "50px",
            }}
          >
            <div
              className="flex justify-center items-center  "
              
            > 
             <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  color: " rgb(176, 186, 191)",
                  position: "relative",
                  top: "5px",
                  left: "13px",
                  pointerEvents: "none",
                }}
              >
                <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
              </svg>
              <input
                placeholder="Where do you want to go?"
                className=""
                style={{
                  width: "60%",
                  marginTop: "12px",
                  marginInline: "40px",
                  height: "30px",
                  border: "none !important",
                  backgroundColor: "transparent",
                }}
              />
             
            </div>
          </div>
        </div>
        {/* The Search Bar ends */}
        {/* The Nav Items starts */}
        <div className="flex justify-center items-center  " style={{
          alignSelf:"flex-end",
          right:"15%",
          top:"20px",
          position:"absolute",
          padding:"0px 5px"
        }}>
          <div className="h-15 border-2 border-black bg-yellow-300 text-black p-2 rounded-lg ">Create A Tour </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
