import { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";

export default function Models() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchModels() {
      try {
        const res = await fetch("http://localhost:4000/api/models");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setModels(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchModels();
  }, []);

  if (loading) return <main className="wrapper"><h2>Loading models...</h2></main>;
  if (error) return <main className="wrapper"><h2>Error: {error}</h2></main>;

  return (
    <main className="wrapper">
      <section className="section">
        <h1>Kei Truck Models & Specifications</h1>
        <p className="lead">Loaded live from your Express server.</p>

        <div className="grid-3">
          {models.map((truck) => (
            <ModelCard key={truck.id} {...truck} />
          ))}
        </div>
      </section>
    </main>
  );
}
