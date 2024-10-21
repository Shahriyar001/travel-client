import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/data.json"); // Ensure this path is correct
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // console.log(destinations);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="m-5 items-center">
      <div className="secTitle text-center">
        <h3 className="title text-3xl font-semibold">
          Most visited destination
        </h3>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {destinations.map((dest) => (
          <Card key={dest.id} dest={dest}></Card>
        ))}
      </div>
    </section>
  );
};

export default Main;
