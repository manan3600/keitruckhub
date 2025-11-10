// src/pages/Home.jsx
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      {/* ✅ Hero Section (fixed your broken tags) */}
      <section className="hero">
        <div className="text-overlay">
          <h1>KeiTruck Hub</h1>
          <p className="lead">Explore models, specs, builds, and importing guides for Kei trucks.</p>
          <a href="/models" className="btn">Browse Models</a>
        </div>
      </section>

      <main className="wrapper">
        {/* ✅ Slideshow Section (for Part 9 requirement) */}
        <section className="section">
          <h2>Featured</h2>
         <Carousel
            images={[
              process.env.PUBLIC_URL + "/images/kei-truck-japan.jpg",
              process.env.PUBLIC_URL + "/images/subaru-sambar.jpg",
              process.env.PUBLIC_URL + "/images/kei-truck-bannner.png"
            ]}
  intervalMs={3500}
/>

        </section>

        {/* ✅ Your original Featured Models Section */}
        <section className="section">
          <h2>Featured Models</h2>
          <div className="grid-3">
            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/suzuki-carry.webp"} alt="Suzuki Carry" />
              <h3>Suzuki Carry</h3>
              <p>Reliable workhorse with compact size and great utility.</p>
            </article>
            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/honda-acty.JPG"} alt="Honda Acty" />
              <h3>Honda Acty</h3>
              <p>Efficient, lightweight, and versatile for daily tasks.</p>
            </article>
            <article className="card">
              <img src={process.env.PUBLIC_URL +"/images/daihatsu-hijet.jpeg"} alt="Daihatsu Hijet" />
              <h3>Daihatsu Hijet</h3>
              <p>A durable mini truck with plenty of customization options.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
