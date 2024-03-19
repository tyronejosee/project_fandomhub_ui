import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/genres/"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full bg-red-500 p-4">
          <h1 className="text-white text-2xl font-bold mb-4">Data from API:</h1>
          <ul>
            {data.results.map((genre) => (
              <li
                key={genre.id}
                className="text-white text-lg border-b border-gray-200 py-2"
              >
                {genre.name} - {genre.slug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GenreList;
