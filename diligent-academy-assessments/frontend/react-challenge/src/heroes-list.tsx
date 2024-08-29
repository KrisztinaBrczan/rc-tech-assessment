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
      {heroes.map((hero) => (
        <div>
          <div key={hero.id} style={{ padding: "2px 5px" }}>
            <div style={{ color: hero.available ? "green" : "red" }}>
              {hero.id}. {hero.name} {hero.available ? '"Available"' : ""}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroesList;
