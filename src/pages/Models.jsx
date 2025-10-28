import ModelCard from "../components/ModelCard";
import { MODELS } from "../data/models";

export default function Models() {
  return (
    <main className="container">
      <section className="section">
        <h2>Models & Specs</h2>
        <div className="grid-3">
          {MODELS.map(m => <ModelCard key={m.id} model={m} />)}
        </div>
      </section>
    </main>
  );
}
