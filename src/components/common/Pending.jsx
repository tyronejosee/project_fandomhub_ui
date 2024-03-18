import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Pending = () => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-fuchsia-500">
        Pending: {location.pathname}
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quo
        quod maxime quos rerum a exercitationem perspiciatis assumenda iste fuga
        aut tenetur sapiente illum ducimus. Eius consequatur tenetur labore
        odio. Obcaecati repellendus alias maiores ipsum dolorem perspiciatis
        voluptates! Nesciunt minus perspiciatis nihil odio et reprehenderit
        maiores modi, voluptates optio totam corrupti provident voluptatibus
        accusantium delectus non doloremque numquam quo deleniti.
      </p>
      <div className="relative w-full h-64" onMouseMove={handleMouseMove}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-fuchsia-700 opacity-507</gh rounded-full"
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
          }}
        ></div>
        <div className="w-full bg-red-600"></div>
      </div>
    </section>
  );
};

export default Pending;
