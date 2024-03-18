import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Article from "../components/common/ArticleList";

const HomePage = () => {
  const animes = [
    {
      id: 1,
      name: "The Dangers in My Heart Season 2",
      image: "https://cdn.myanimelist.net/images/anime/1643/138581.jpg",
    },
    {
      id: 2,
      name: "A Sign of Affection",
      image: "https://cdn.myanimelist.net/images/anime/1188/139825l.jpg",
    },
    {
      id: 3,
      name: "The Unwanted Undead Adventurer",
      image: "https://cdn.myanimelist.net/images/anime/1008/140287l.jpg",
    },
    {
      id: 4,
      name: "Solo Leveling",
      image: "https://cdn.myanimelist.net/images/anime/1841/138405l.jpg",
    },
    {
      id: 5,
      name: "The Unwanted Undead Adventurer",
      image: "https://cdn.myanimelist.net/images/anime/1008/140287l.jpg",
    },
    {
      id: 6,
      name: "Solo Leveling",
      image: "https://cdn.myanimelist.net/images/anime/1841/138405l.jpg",
    }
  ];

  return (
    <>
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Featured Articles</h2>
        <Article />
        <Article /> 
        <Article />
        <Article />
      </section>
      <section>
        <h2 className="text-2xl font-bold">Winter 2024</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {animes.map((anime) => (
            <Link
              key={anime.id}
              to={{ pathname: `/animes/${anime.id}`, state: anime }}
            >
              <Card name={anime.name} image={anime.image} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
