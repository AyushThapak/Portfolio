import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import react from "../../public/reactjs.png";
import springBoot from "../../public/springBoot.jpg";
import flutter from "../../public/flutter.png";
import python from "../../public/python.webp";
import tailwind from "../../public/tailwind.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: python,
      name: "Python",
    },    {
      id: 2,
      logo: java,
      name: "Java",
    },
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 4,
      logo: css,
      name: "CSS",
    },
    {
      id: 5,
      logo: tailwind,
      name: "TailwindCSS",
    },    
    {
      id: 6,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 7,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 8,
      logo: springBoot,
      name: "Spring Boot",
    },
    {
      id: 9,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 10,
      logo: flutter,
      name: "Flutter",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience </h1>
        <p className="  ">
          I've 2 years of hands-on experience  in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
