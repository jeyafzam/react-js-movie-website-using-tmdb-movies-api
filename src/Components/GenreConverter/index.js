import { useState, useEffect } from "react";
import TokenAndBaseUrl from "../../Helpers/tokenAndBaseUrl";

const GenreConverter = ({ genreIds, type = "movie" }) => {
  const [genreNames, setGenreNames] = useState("");

  useEffect(() => {
    TokenAndBaseUrl.get(`genre/${type}/list?language=en-US`)
      .then((response) => {
        const genres = response.data.genres;

        const names = genreIds
          .map((genreId) => {
            const genre = genres.find((g) => g.id === genreId);
            return genre ? genre.name : "Unknown";
          })
          .slice(0, 2)
          .join(", ");

        setGenreNames(names);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setGenreNames("Unknown");
      });
  }, [genreIds, type]);

  return <span>{genreNames}</span>;
};

export default GenreConverter;
