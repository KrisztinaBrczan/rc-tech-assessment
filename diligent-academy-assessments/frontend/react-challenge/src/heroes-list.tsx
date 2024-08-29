import CurrentHero from "./components/CurrentHero";
import LoadingMessage from "./components/LoadingMessage";

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

interface ReceivedProps {
  heroes: Hero[];
  handleAvailabilityChange: (heroId: number) => void;
  isLoading: boolean;
  error: string;
}

const HeroesList: React.FC<ReceivedProps> = ({
  heroes,
  handleAvailabilityChange,
  isLoading,
  error,
}) => {
  console.log(heroes);

  return (
    <>
      <h2>Heroes</h2>
      {isLoading && !error && <LoadingMessage />}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            style={{ flexBasis: "33%", flexShrink: 1, cursor: "pointer" }}
            onClick={() => handleAvailabilityChange(hero.id)}
          >
            <CurrentHero
              id={hero.id}
              name={hero.name}
              available={hero.available}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroesList;
