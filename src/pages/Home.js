import React, { useEffect, useState } from "react";
import Founder from "../components/founder";
import HeaderSHowcase from "../components/header";
import Mahsulotlar from "../components/mahsulotlar";
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
          <Mahsulotlar />
        </>
      )}
    </>
  );
}

export default Home;
