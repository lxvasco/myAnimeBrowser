import { useEffect, useState } from "react";

import SearchBox from "../SearchBox/SearchBox";
import AnimeList from "../AnimeList/AnimeList";

import { getAnimeData, getScoresAvg } from "../../utilities";
import "./main.css";

function Main() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scoreAvg, setScoreAvg] = useState([]);

  const getAnimeDataList = async () => {
    setIsLoading(true);
    try {
      const data = await getAnimeData(search);
      setAnimeData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAnimeDataList();
  }, []);

  useEffect(() => {
    if (animeData) {
      const scoresList = animeData.map((anime) => anime.score);

      getScoresAvg(scoresList)
        .then((data) => {
          setScoreAvg(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [animeData]);

  const ranges = [
    { range: [1, 5], legend: "I do not recommend it." },
    { range: [5, 8], legend: "You may have fun." },
    { range: [8, 10], legend: "Great, this is one of the best anime." },
  ];

  const legend =
    ranges.find(
      (rangeObj) =>
        scoreAvg.avg >= rangeObj.range[0] && scoreAvg.avg < rangeObj.range[1]
    )?.legend || "I don't have opinion for you :(";

  return (
    <section className="main">
      <SearchBox setSearch={setSearch} getAnimeDataList={getAnimeDataList} />
      {isLoading && (
        <div className="loading">
          <h2>Cargando...</h2>
        </div>
      )}
      {error && (
        <div className="error">
          <h2>Ha ocurrido un error: {error.message}</h2>
        </div>
      )}
      {!isLoading && !error && (
        <>
          <div className="containerAnimeList">
            <AnimeList search={search} animeData={animeData} />
          </div>
          <div className="resultScore">
            <p className="legend">{`The score average is ${Math.trunc(
              scoreAvg.avg
            )}, ${legend}`}</p>
          </div>
        </>
      )}
    </section>
  );
}

export default Main;
