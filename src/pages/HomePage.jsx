import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Article from "../components/common/ArticleList";
import CardTrailer from "../components/common/CardTrailer";
import animesData from "../data/animes.json";
import SectionHeader from "../components/common/SectionHeader";

const HomePage = () => {
  const animes = animesData;

  return (
    <main className="p-4 space-y-12">
      <section className="space-y-4">
        <SectionHeader
          title="Featured Articles"
          subtitle="Subcategories pending."
        />
        <section>
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </section>
      <section className="space-y-4">
        <SectionHeader title="Summer 2024" subtitle="Subcategories pending." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {animes.map((anime) => (
            <Link
              key={anime.id}
              to={{ pathname: `/anime/${anime.id}`, state: anime }}
            >
              <Card name={anime.name} image={anime.image} />
            </Link>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <SectionHeader
          title="Latest Updated Episode Videos"
          subtitle="Subcategories pending."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {animes.map((anime) => (
            <Card key={anime.id} name={anime.name} image={anime.image} />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <SectionHeader
          title="Most Popular Anime Trailers"
          subtitle="Subcategories pending."
        />
        <div>
          <CardTrailer />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
