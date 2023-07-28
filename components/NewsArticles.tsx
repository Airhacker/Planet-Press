"use client";

import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FiChevronRight } from "react-icons/fi";
import { spawn } from "child_process";
import Image from "next/image";

interface NewsArticlesProps {}

const allNewsURL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

const getAllNews = async () => {
  const response = await axios.get(allNewsURL);

  console.log(response.data);

  return response.data;
};

const NewsArticles: FC<NewsArticlesProps> = ({}) => {
  const { isLoading, error, data } = useQuery("allNews", getAllNews);
  return (
    <div className="flex flex-col w-full h-full gap-4 text-black">
      {data
        ? data.articles.map((article, key) => {
            return (
              <div
                key={key}
                className="flex flex-col gap-4 p-4 rounded-lg shadow-md md:flex-row"
              >
                {/* Article Source and Author */}
                <div className="flex items-center justify-between md:hidden">
                  {/* Article Source */}
                  <span className="p-2 text-xs bg-gray-300 rounded-lg w-fit ">
                    {article.source.name}
                  </span>
                </div>

                {/* Article Image */}
                <div className="relative flex flex-1 aspect-video">
                  {article.urlToImage ? (
                    <Image
                      src={article.urlToImage}
                      fill
                      className="object-cover rounded-lg"
                      alt={article.description}
                    />
                  ) : (
                    "No image found :("
                  )}
                </div>

                {/* Article Description and Title */}
                <div className="flex flex-col flex-1 h-full gap-4 md:order-first">
                  {/* Article Source */}
                  <span className="hidden p-2 text-xs bg-gray-300 rounded-lg w-fit md:visible">
                    {article.source.name}
                  </span>

                  {/* Article Title */}
                  <p className="font-semibold">{article.title}</p>

                  <hr className="border" />

                  {/* Article Description */}
                  <p className="text-sm">{article.description}</p>

                  {/* Article URL */}
                  <div className="flex content-center justify-between">
                    {/* Article Author */}
                    {article.author ? (
                      <span className="p-2 text-xs text-gray-400 rounded-lg w-fit">
                        By {article.author}
                      </span>
                    ) : (
                      <span></span>
                    )}

                    <a
                      target="_blank"
                      className="flex items-center justify-center gap-2 p-2 text-xs text-white bg-blue-600 rounded-lg w-fit"
                      href={article.url}
                    >
                      Read more
                      <FiChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default NewsArticles;
