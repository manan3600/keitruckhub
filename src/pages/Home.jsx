import banner from "../assets/kei-truck-banner.png";

export default function Home(){
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-box">
          <h1>KeiTruck Hub</h1>
          <p>The cozy corner for kei trucks — specs, guides, and builds.</p>
        </div>
      </section>

      <main className="container">
        {/* keep your sections/cards here */}
      </main>
    </>
  );
}
