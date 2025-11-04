// ✅ Add these at the top
import ModelCard from "../components/ModelCard";
import models from "../data/models";

export default function Models() {
  return (
    <>
      <main className="wrapper">
        <section className="section">
          <h1>Kei Truck Models &amp; Specifications</h1>
          <p className="lead">Browse models, compare specs, and find your favorites.</p>
        </section>

        <section className="section">
          <div className="grid-3">
            {models.map((truck) => (
              <ModelCard key={truck.id} {...truck} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
