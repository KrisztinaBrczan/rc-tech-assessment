import HeroesList from "./heroes-list";
import useHeroes from "./hooks/useHeroes";

function App() {
  const { heroes } = useHeroes();

  console.log(heroes);

  return (
    <div>
      <h1>App</h1>
      <HeroesList heroes={heroes} />
    </div>
  );
}

export default App;
