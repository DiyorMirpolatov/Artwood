import React, { useEffect, useState } from "react";
import HeaderSHowcase from "../components/header";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, loading);

  return (
    <>
      {loading ? (
        <div className="loading">
          <p></p>
        </div>
      ) : (
        <HeaderSHowcase />
      )}
    </>
  );
}

export default Home;
