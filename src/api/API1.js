import { API_KEY } from "../config";

const fetchArticles = async event => {
  const response = await fetch(`http://content.guardianapis.com/search?q=${event}&api-key=${API_KEY}`);
  return await response.json();
};

export default fetchArticles;