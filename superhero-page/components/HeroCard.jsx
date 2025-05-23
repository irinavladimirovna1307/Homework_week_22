import { useState, useEffect } from "react";
import "../src/index.css";

export default function HeroCard({ hero }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("rating")) || [];
    const item = saved.find((r) => r.id === hero.name);
    if (item) setRating(Number(item.rating));
  }, [hero.name]);

  const handleRate = (value) => {
    setRating(value);
    const saved = JSON.parse(localStorage.getItem("rating")) || [];
    const updated = saved.filter((r) => r.id !== hero.name);
    updated.push({ id: hero.name, rating: value });
    localStorage.setItem("rating", JSON.stringify(updated));
  };

  return (
    <div className="hero">
      <h2 className="title">{hero.name}</h2>
      <div className="description">
        <div>Вселенная: {hero.universe}</div>
        <div>Альтер-эго: {hero.alterego}</div>
        <div>Род деятельности: {hero.occupation}</div>
        <div>Друзья: {hero.friends}</div>
        <div>Суперсилы: {hero.superpowers}</div>
        <p>{hero.info}</p>
      </div>
      <img className="image" src={hero.url} alt={hero.name} />
      <div className="rank">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`star ${rating >= num ? "rated" : ""}`}
            onClick={() => handleRate(num)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
