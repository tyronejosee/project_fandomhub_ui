import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Article from "../components/common/ArticleList";
import CardTrailer from "../components/common/CardTrailer";

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
    },
  ];

  return (
    <main className="mt-4 mb-4 space-y-12">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
        <section>
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </section>
      <section className="space-y-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Winter 2024
        </h2>
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
      <section>
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Latest Updated Episode Videos
        </h2>
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
      <section className="space-y-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Most Popular Anime Trailers
        </h2>
        <div>
          <CardTrailer />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
