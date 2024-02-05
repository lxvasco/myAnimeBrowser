import "./animeList.css";
import AnimeCard from "../AnimeCard/AnimeCard";

function AnimeList({ animeData }) {
  return (
    <>
      {animeData &&
        animeData.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
    </>
  );
}

export default AnimeList;
