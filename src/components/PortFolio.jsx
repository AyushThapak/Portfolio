import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import html from "../../public/html.png";
import flutter from "../../public/flutter.png";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "https://github.com/AyushThapak/Weather_Forecastify_",
    },
    {
      id: 2,
      logo: flutter,
      name: "Flutter",
      link: "https://github.com/AyushThapak/InnerBhakti-Flutter"
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      link: "https://github.com/AyushThapak/LegalEase",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      link: "https://github.com/AyushThapak/Python_Desktop_Agent",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      link: "https://github.com/AyushThapak/AddressBookManagementSystem",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-5 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">Click to view Source Code.</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
