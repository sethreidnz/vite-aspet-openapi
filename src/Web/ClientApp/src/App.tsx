import { useEffect, useMemo, useState } from "react";
import { WeatherForecastClient, WeatherForecast } from "./api/generated/client";
import { API_BASE_URL } from "./api/constants";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState<unknown | undefined>(undefined);
  const [data, setData] = useState<WeatherForecast[]>([]);
  const client = useMemo(() => new WeatherForecastClient(API_BASE_URL), []);
  useEffect(() => {
    async function fetchData() {
      if (!hasLoaded) {
        try {
          const response = await client.get();
          setData(response);
          setHasLoaded(true);
        } catch (error) {
          setError(error);
          setHasLoaded(true);
        }
      }
    }
    fetchData();
  });

  if (!hasLoaded) {
    return "Loading...";
  }

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  return <>{JSON.stringify(data)}</>;
}

export default App;
