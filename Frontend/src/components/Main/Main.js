import "./main.css";

import AnimeList from "../AnimeList/AnimeList";

function Main({ search, setSearch, animeData }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="main">
      <div className="searchBox">
        <input
          type="search"
          placeholder="Search your favorite anime!"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="containerAnimeList">
        <AnimeList search={search} animeData={animeData} />
      </div>
    </section>
  );
}

export default Main;
