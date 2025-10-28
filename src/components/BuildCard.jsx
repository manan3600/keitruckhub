// src/components/BuildCard.jsx
export default function BuildCard({ build }) {
  return (
    <article className="card">
      <img src={build.img} alt={build.title} />
      <div className="pad">
        <h3>{build.title}</h3>
        <p className="meta">{build.spec}</p>
        <p>{build.blurb}</p>
        <div className="tags">
          {build.tags?.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}
