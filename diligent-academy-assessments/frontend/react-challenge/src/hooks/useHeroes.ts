import { useEffect, useState } from "react";
import { callApi } from "../call-api";

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

export default function useHeroes() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchHeroes() {
      try {
        setIsLoading(true);
        const heroesData = await callApi<Hero[]>("heroes");
        setHeroes(heroesData);
      } catch (error) {
        setError("Failed to fetch heroes");
      }
      setIsLoading(false);
    }
    fetchHeroes();
  }, []);

  return { heroes, setHeroes, isLoading, setIsLoading, error, setError };
}
