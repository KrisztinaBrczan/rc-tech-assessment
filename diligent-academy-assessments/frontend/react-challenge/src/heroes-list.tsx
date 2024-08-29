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
    </>
  );
};

export default HeroesList;
