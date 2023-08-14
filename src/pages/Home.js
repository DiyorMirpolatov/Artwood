import React, { useEffect, useState } from "react";
import Founder from "../components/founder";
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
        <>
          <HeaderSHowcase />
          <Founder />
        </>
      )}
    </>
  );
}

export default Home;
