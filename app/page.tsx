"use client";

import { useQuery } from "react-query";

export default function Home() {
  //Fethcher function
  const getFacts = async () => {
    const res = await fetch(
      "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts"
    );
    return res.json();
  };

  const { data, status, error, isLoading } = useQuery("randomFacts", getFacts);

  // Error and loading states
  if (error) return <div>Something went wrong ...</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <main>
      <div>
        <h1>Random Facts</h1>
        <p>{data.randomFacts}</p>
      </div>
    </main>
  );
}
