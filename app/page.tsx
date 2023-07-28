"use client";

import NewsArticles from "../components/NewsArticles";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="w-screen h-full bg-white">
      <div className="w-11/12 m-auto ">
        <Navbar />
        <NewsArticles />
      </div>
    </main>
  );
}
