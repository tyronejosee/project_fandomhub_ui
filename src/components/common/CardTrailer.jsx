import React from "react";

const CardTrailer = () => {
  const trailer = [
    {
      id: 1,
      name: "Attack on Titan - Trailer",
      image:
        "https://a.storyblok.com/f/178900/1920x1080/f960c8b147/attack-on-titan-finals-season-part-3-titelbild.jpg/m/1200x0/filters:quality(95)format(webp)",
    },
    {
      id: 2,
      name: "Attack on Titan - Trailer",
      image:
        "https://a.storyblok.com/f/178900/1920x1080/f960c8b147/attack-on-titan-finals-season-part-3-titelbild.jpg/m/1200x0/filters:quality(95)format(webp)",
    },
    {
      id: 3,
      name: "Attack on Titan - Trailer",
      image:
        "https://a.storyblok.com/f/178900/1920x1080/f960c8b147/attack-on-titan-finals-season-part-3-titelbild.jpg/m/1200x0/filters:quality(95)format(webp)",
    },
    {
      id: 4,
      name: "Attack on Titan - Trailer",
      image:
        "https://a.storyblok.com/f/178900/1920x1080/f960c8b147/attack-on-titan-finals-season-part-3-titelbild.jpg/m/1200x0/filters:quality(95)format(webp)",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-red-500 w-full h-32 rounded-md"></div>
        <div className="bg-red-500 w-full h-32 rounded-md"></div>
        <div className="bg-red-500 w-full h-32 rounded-md"></div>
        <div className="bg-red-500 w-full h-32 rounded-md"></div>
      </div>
      {/* {trailer.map((trailer) => (
          <div className="flex aspect-video h-32" key={trailer.id}>
            <img
              className="rounded-md"
              src={trailer.image}
              alt={trailer.name}
            />
          </div>
        ))} */}
    </>
  );
};

export default CardTrailer;
