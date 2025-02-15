import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import AppDownload from "../../components/AppDownload/AppDownload";
import MangaDisplay from "../../components/MangaDisplay/MangaDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <MangaDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
