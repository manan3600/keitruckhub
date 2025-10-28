export default function About() {
  return (
    <section className="section">
      <h1>About Kei Trucks</h1>
      <p className="lead">History, features, and common uses of Japan’s mini trucks.</p>
      <div className="grid-2">
        <div className="card">
          <p>Kei trucks are compact, efficient utility vehicles designed for light duty and tight streets.</p>
        </div>
        <img className="card" src="/images/kei-truck-japan.jpg" alt="Kei truck" />
      </div>
    </section>
  );
}
