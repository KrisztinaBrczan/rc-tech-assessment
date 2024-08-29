interface Hero {
  id: number;
  name: string;
  available: boolean;
}

interface ReceivedProps {
  heroes: Hero[];
}

const HeroesList: React.FC<ReceivedProps> = ({ heroes }) => {
  console.log(heroes);

  return (
    <>
      <h2>Heroes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {heroes.map((hero) => (
          <div style={{ flexBasis: "33%", flexShrink: 1, cursor: "pointer" }}>
            <div key={hero.id} style={{ padding: "2px 5px" }}>
              <div style={{ color: hero.available ? "green" : "red" }}>
                {hero.id}. {hero.name} {hero.available ? '"Available"' : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroesList;
