export default function ModelCard({ img, name, meta, href }) {
  return (
    <article className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="meta">{meta}</p>
      <a className="btn" href={href}>View Details</a>
    </article>
  );
}
