import { useEffect, useState } from "react";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [data, setData] = useState<{ test: string }>();
  useEffect(() => {
    async function fetchData() {
      if (!hasLoaded) {
        const response = await (await fetch("/api/test")).json();
        setData(response);
        setHasLoaded(true);
      }
    }
    fetchData();
  });

  if (!hasLoaded) {
    return "Loading...";
  }

  return <>{data?.test}</>;
}

export default App;
