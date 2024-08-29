import useHeroes from "../hooks/useHeroes";

const ErrorMessage: React.FC = () => {
  const { error } = useHeroes();
  return <h4>{error}</h4>;
};

export default ErrorMessage;
