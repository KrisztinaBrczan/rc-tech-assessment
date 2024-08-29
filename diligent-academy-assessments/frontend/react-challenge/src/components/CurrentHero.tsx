interface Hero {
  id: number;
  name: string;
  available: boolean;
  handleAvailabilityChange: (heroId: number) => void;
}

const CurrentHero: React.FC<Hero> = ({
  id,
  name,
  available,
  handleAvailabilityChange,
}) => {
  return (
    <div
      key={id}
      style={{ padding: "2px 5px" }}
      onClick={() => handleAvailabilityChange(id)}
    >
      <div style={{ color: available ? "green" : "red" }}>
        {id}. {name} {available ? '"Available"' : ""}
      </div>
    </div>
  );
};

export default CurrentHero;
