export default function Models() {
  return (
    <>
      <main className="wrapper">
        <section className="section">
          <h1>Kei Truck Models & Specifications</h1>
          <p className="lead">Browse models, compare specs, and find your favorites.</p>
        </section>

        <section className="section">
          <div className="grid-3">
            
            <article className="card">
              <img src="/images/suzuki-carry.webp" alt="Suzuki Carry" />
              <h3>Suzuki Carry</h3>
              <p className="meta">660cc • 4WD • 1999</p>
              <a className="btn" href="model-suzuki.html">View Details</a>
            </article>

            <article className="card">
              <img src="/images/honda-acty.JPG" alt="Honda Acty" />
              <h3>Honda Acty</h3>
              <p className="meta">656cc • RWD • 1997</p>
              <a className="btn" href="model-honda.html">View Details</a>
            </article>

            <article className="card">
              <img src="/images/daihatsu-hijet.jpeg" alt="Daihatsu Hijet" />
              <h3>Daihatsu Hijet</h3>
              <p className="meta">659cc • 4WD • 2001</p>
              <a className="btn" href="model-daihatsu.html">View Details</a>
            </article>

            <article className="card">
              <img src="/images/subaru-sambar.jpg" alt="Subaru Sambar" />
              <h3>Subaru Sambar</h3>
              <p className="meta">660cc • AWD • 2005</p>
              <a className="btn" href="model-subaru.html">View Details</a>
            </article>

          </div>
        </section>
      </main>
    </>
  );
}
