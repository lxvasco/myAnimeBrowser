// Fetch to External API

const getAnimeData = async (search) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=10`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
};

//Calculate scores Average in Internal API

const getScoresAvg = async (scores) => {
  const response = await fetch("http://localhost:3001/scoresAverage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scores),
  });

  if (!response.ok) {
    throw new Error(`Error al hacer la petición POST: ${response.status}`);
  }

  const scoresAvg = await response.json();
  return scoresAvg;
};

export { getAnimeData, getScoresAvg };
