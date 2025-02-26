import "./Hero.scss";
import dataList from "../../data/data.json";
import { useState } from "react";
import SimpsonsCard from "../SimpsonsCard/SimpsonsCard";

function Hero() {
  const [data, setData] = useState(dataList);
  return (
    <main>
      <h2>Simpsons Data</h2>
      <SimpsonsCard data={data} />
    </main>
  );
}

export default Hero;
