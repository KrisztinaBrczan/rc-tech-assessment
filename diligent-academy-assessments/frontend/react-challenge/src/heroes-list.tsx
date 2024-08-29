import CurrentHero from "./components/CurrentHero";
import ErrorMessage from "./components/ErrorMessage";
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
  return (
    <>
      <h2>Heroes</h2>
      {isLoading && !error && <LoadingMessage />}
      {error && !isLoading && <ErrorMessage />}
      {!isLoading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {heroes.map((hero) => (
            <div
              key={hero.id}
              style={{ flexBasis: "33%", flexShrink: 1, cursor: "pointer" }}
            >
              <CurrentHero
                id={hero.id}
                name={hero.name}
                available={hero.available}
                handleAvailabilityChange={handleAvailabilityChange}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HeroesList;
