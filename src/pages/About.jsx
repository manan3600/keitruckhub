export default function About() {
  return (
    <>
      {/* Hero (with custom background from this page) */}
      <section
        className="hero"
        style={{ background: "url('/images/kei-truck-japan.jpg') center/cover no-repeat" }}
      >
        <div className="text-overlay">
          <h1>About Kei Trucks</h1>
          <p>Learn the history, features, and uses of Japan’s mini trucks</p>
        </div>
      </section>

      <main className="wrapper">
        <section className="section">
          <h2>What Are Kei Trucks?</h2>
          <p>
            Kei trucks, often called <em>Kei-tora</em> in Japan, are small utility vehicles designed
            to meet Japan’s “Kei car” regulations. Since the 1960s, they have become a common
            sight across farms, construction sites, and city streets. These trucks are compact,
            fuel-efficient, and affordable, yet surprisingly capable.
          </p>
        </section>

        <section className="section">
          <h2>What Makes Kei Trucks Unique?</h2>
          <div className="grid-3">
            <div className="card">
              <i className="fa-solid fa-ruler-combined fa-2x" style={{ color: "var(--accent)" }}></i>
              <h3>Compact Size</h3>
              <p>Small enough for narrow Japanese roads, but strong enough for heavy loads.</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-gas-pump fa-2x" style={{ color: "var(--accent)" }}></i>
              <h3>Fuel Efficient</h3>
              <p>Lightweight designs mean excellent gas mileage and low emissions.</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-coins fa-2x" style={{ color: "var(--accent)" }}></i>
              <h3>Affordable</h3>
              <p>Cheaper to buy and maintain compared to full-size trucks.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
