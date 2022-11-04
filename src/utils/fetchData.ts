export const youtubeSearchAndDownloadAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": String(process.env.REACT_APP_RAPID_API_KEY),
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
};

export const exerciseDBRequestOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": String(process.env.REACT_APP_RAPID_API_KEY),
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
    }
};

export const fetchData = async (url: RequestInfo, options: RequestInit) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
 