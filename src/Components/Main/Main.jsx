import React, { useEffect, useState } from "react";

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

  console.log(destinations);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <div className="secTitle">
        <h3 className="title">Most visited destination</h3>
      </div>
      <div className="secContent grid"></div>
    </section>
  );
};

export default Main;
