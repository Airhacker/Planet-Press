"use client";

import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";

interface NewsArticlesProps {}

const allNewsURL =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&language=en&apiKey=59f46af578054126b39c442dfb931caa";

const getAllNews = async () => {
  const response = await axios.get(allNewsURL);

  console.log(response.data);

  return response.data;
};

const NewsArticles: FC<NewsArticlesProps> = ({}) => {
  const { isLoading, error, data } = useQuery("allNews", getAllNews);
  return (
    <div className="flex flex-col w-full h-full gap-4 text-black">
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        data.articles.map((article, key) => {
          return (
            <div
              key={key}
              className="flex flex-col gap-2 p-2 border-2 border-black rounded-md md:flex-row"
            >
              <div className="flex items-center justify-between md:hidden">
                {/* Article Source */}
                <span className="p-2 text-xs border border-black">
                  {article.source.name}
                </span>

                {/* Article Author */}
                {article.author ? (
                  <span className="p-2 text-xs border border-black">
                    {article.author}
                  </span>
                ) : null}
              </div>

              {/* Article Image */}
              <div className="flex flex-1">
                <img
                  className="object-cover rounded-md"
                  src={article.urlToImage}
                  alt=""
                />
              </div>

              <div className="flex flex-col flex-1 h-full md:order-first">
                {/* Article Title */}
                <p className="font-semibold">{article.title}</p>

                <hr className="border" />

                {/* Article Description */}
                <p className="text-sm">{article.description}</p>

                {/* Article URL */}
                <div>
                  <a
                    target="_blank"
                    className="text-sm text-blue-500 "
                    href={article.url}
                  >
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
};
export default NewsArticles;

{
  /* <div>
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
      </div> */
}
