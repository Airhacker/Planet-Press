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
    <main className="w-screen h-full bg-white">
      <div className="w-11/12 m-auto ">
        <Navbar />
        <NewsArticles />
      </div>
    </main>
  );
}
