import "./Hero.scss";
import dataList from "../../data/data.json";
import { useState } from "react";

function Hero() {
  const [data, setData] = useState(dataList);
  return (
    <main>
      <h2>Simpsons Data</h2>
      <section className="simpson">
        {data.map((simpson) => (
          <article key={simpson.id} className="simpson__card">
            <img
              src={simpson.image}
              alt={simpson.name}
              className="simpson__image"
            />
            <h3>{simpson.name}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Hero;
