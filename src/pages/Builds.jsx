export default function Builds() {
  return (
    <>
      <main className="wrapper">
        <section className="section">
          <h1>Custom Builds</h1>
          <p className="lead">See how owners modify their trucks — and share your own build.</p>
          <p><a className="btn" href="submit-build.html">Submit Your Build</a></p>
        </section>

        <section className="section">
          <div className="grid-3">
            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/build-camper.jpg"} alt="Carry Camper Conversion" />
              <h3>Carry Camper Conversion</h3>
              <p className="meta">Lift • Camper • Wheels</p>
              <a className="btn" href="build-camper.html">View Build</a>
            </article>

            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/build-farm.jpg"} alt="Acty Farm Flatbed" />
              <h3>Acty Farm Flatbed</h3>
              <p className="meta">Rack • Tires</p>
              <a className="btn" href="build-farm.html">View Build</a>
            </article>

            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/build-trail.jpg"} alt="Hijet Trail Rig" />
              <h3>Hijet Trail Rig</h3>
              <p className="meta">Lift • Winch</p>
              <a className="btn" href="build-trail.html">View Build</a>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
