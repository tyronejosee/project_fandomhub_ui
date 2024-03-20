import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Pending = () => {
  const location = useLocation();

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
    </section>
  );
};

export default Pending;
