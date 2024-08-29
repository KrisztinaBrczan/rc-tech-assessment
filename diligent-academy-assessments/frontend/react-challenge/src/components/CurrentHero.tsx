interface Hero {
  id: number;
  name: string;
  available: boolean;
}

const CurrentHero: React.FC<Hero> = ({ id, name, available }) => {
  return (
    <div key={id} style={{ padding: "2px 5px" }}>
      <div style={{ color: available ? "green" : "red" }}>
        {id}. {name} {available ? '"Available"' : ""}
      </div>
    </div>
  );
};

export default CurrentHero;
