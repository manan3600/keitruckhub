export default function ModelCard({ model }) {
  return (
    <article className="card">
      <img src={model.img} alt={model.name} />
      <div className="pad">
        <h3>{model.name}</h3>
        <p className="meta">{model.cc}cc • {model.drive} • {model.year}</p>
      </div>
    </article>
  );
}
