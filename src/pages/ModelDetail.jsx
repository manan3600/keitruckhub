// src/pages/ModelDetail.jsx
import { Link, useParams } from "react-router-dom";
import models from "../data/models";

export default function ModelDetail() {
  const { id } = useParams();
  const model = models.find(m => m.id === id);

  if (!model) {
    return (
      <main className="wrapper">
        <section className="section">
          <h1>Model not found</h1>
          <p className="meta">The model you’re looking for doesn’t exist.</p>
          <Link className="btn" to="/models">← Back to Models</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="wrapper">
      <section className="section">
        <Link className="btn" to="/models">← Back to Models</Link>
        <h1 style={{marginTop: "1rem"}}>{model.name}</h1>

        <div className="grid-2" style={{marginTop: "1rem"}}>
          <div>
            <img src={model.img} alt={model.name} />
          </div>

          <div className="card">
            <h3>Key Specs</h3>
            <table>
              <tbody>
                <tr><th>Engine</th><td>{model.engine}</td></tr>
                <tr><th>Drive</th><td>{model.drive}</td></tr>
                <tr><th>Transmission</th><td>{model.transmission}</td></tr>
                <tr><th>Year</th><td>{model.year}</td></tr>
              </tbody>
            </table>
            <p style={{marginTop:"0.75rem"}}>{model.description}</p>
          </div>
        </div>

        {/* Similar models */}
        <div className="section" style={{marginTop:"1rem"}}>
          <h2>Similar Models</h2>
          <div className="grid-3">
            {models.filter(m => m.id !== model.id).slice(0,3).map(m => (
              <article className="card" key={m.id}>
                <img src={m.img} alt={m.name} />
                <strong>{m.name}</strong>
                <p className="meta">{m.meta}</p>
                <Link className="btn" to={`/models/${m.id}`}>View</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
