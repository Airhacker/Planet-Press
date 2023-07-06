"use client";

import { useQuery } from "react-query";
import axios from "axios";
import NewsArticles from "../components/NewsArticles";
import Navbar from "../components/Navbar";

const allNewsURL =
  "https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=59f46af578054126b39c442dfb931caa";

const getAllNews = async () => {
  const response = await axios.get(allNewsURL);

  console.log(response.data);

  return response.data;
};

export default function Home() {
  const { isLoading, error, data } = useQuery("allNews", getAllNews);

  return (
    <main>
      <Navbar />
      <NewsArticles />
      <div>
        <h1>News</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : data ? (
          data.articles.map((article, key) => {
            return (
              <div key={key}>
                <p>{article.title}</p>
                <img src={article.urlToImage} alt="" />
              </div>
            );
          })
        ) : (
          <p>no data found</p>
        )}
      </div>
    </main>
  );
}
