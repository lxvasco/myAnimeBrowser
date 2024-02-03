import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();

  const getAnimeData = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=10`
    ).then((res) => res.json());
    setAnimeData(data.data);
  };

  useEffect(() => {
    getAnimeData();
  }, [search]);

  return (
    <>
      <div className="App">
        <Header />
        <Main search={search} setSearch={setSearch} animeData={animeData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
