import HeroesList from "./heroes-list";
import useHeroes from "./hooks/useHeroes";

const App: React.FC = () => {
  const { heroes, setHeroes } = useHeroes();

  function handleAvailabilityChange(heroId: number) {
    const heroIndex = heroes.findIndex((hero) => hero.id === heroId);
    const copiedHeroes = [...heroes];

    copiedHeroes[heroIndex] = {
      ...copiedHeroes[heroIndex],
      available: !copiedHeroes[heroIndex].available,
    };
    setHeroes(copiedHeroes);
  }

  return (
    <div>
      <h1>App</h1>
      <HeroesList
        heroes={heroes}
        handleAvailabilityChange={handleAvailabilityChange}
      />
    </div>
  );
};

export default App;
