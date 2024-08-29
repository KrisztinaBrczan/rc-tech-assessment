import CurrentHero from "./components/CurrentHero";

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

interface ReceivedProps {
  heroes: Hero[];
  handleClick: (heroId: number) => void;
}

const HeroesList: React.FC<ReceivedProps> = ({ heroes, handleClick }) => {
  console.log(heroes);

  return (
    <>
      <h2>Heroes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            style={{ flexBasis: "33%", flexShrink: 1, cursor: "pointer" }}
            onClick={() => handleClick(hero.id)}
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
