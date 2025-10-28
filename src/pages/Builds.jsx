// src/pages/Builds.jsx
import BuildCard from "../components/BuildCard";
import { BUILDS } from "../data/builds";

export default function Builds() {
  return (
    <main className="container">
      <section className="section">
        <h2>Custom Builds</h2>
        <p className="meta" style={{marginTop: "-.3rem"}}>
          A few example configurations to spark ideas.
        </p>
        <div className="grid-3">
          {BUILDS.map(b => <BuildCard key={b.id} build={b} />)}
        </div>
      </section>
    </main>
  );
}
