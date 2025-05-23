import HeroCard from "../components/HeroCard";
import heroes from "../data/heroes";
import "../src/App.css";

function App() {
  return (
    <div className="body">
      <h1 className="main title">Массив супергероев</h1>
      <h2 className="title">Вот такие супергерои у нас есть</h2>
      <div className="catalogue">
        {heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
    </div>
  );
}

export default App;
