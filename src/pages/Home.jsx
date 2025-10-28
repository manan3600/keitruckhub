export default function Home() {
  return (
    <>
      <section className="hero"><div className="text-overlay"><h1>Welcome to KeiTruck Hub</h1><p>Compact • Efficient • Versatile</p><a href="/models" className="btn">Browse Models</a></div></section>
      <main className="wrapper">
        <section className="section">
          <h2>Featured Models</h2>
          <div className="grid-3">
            <article className="card">
              <img src="/images/suzuki-carry.webp" alt="Suzuki Carry" />
              <h3>Suzuki Carry</h3>
              <p>Reliable workhorse with compact size and great utility.</p>
            </article>
            <article className="card">
              <img src="/images/honda-acty.JPG" alt="Honda Acty" />
              <h3>Honda Acty</h3>
              <p>Efficient, lightweight, and versatile for daily tasks.</p>
            </article>
            <article className="card">
              <img src="/images/daihatsu-hijet.jpeg" alt="Daihatsu Hijet" />
              <h3>Daihatsu Hijet</h3>
              <p>A durable mini truck with plenty of customization options.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
