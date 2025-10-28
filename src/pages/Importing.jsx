// src/pages/Importing.jsx
export default function Importing() {
  return (
    <main className="container">
      <section className="section">
        <h2>How Importing Kei Trucks Works (U.S.)</h2>
        <p className="meta">
          Summary only — verify specifics with your state DMV and CBP.
        </p>

        <ol className="steps">
          <li>
            <strong>Find a 25-year-old vehicle.</strong> Build date must be ≥25
            years old for EPA/DOT exemption (49 U.S.C. §30112(b)(9)).
          </li>
          <li>
            <strong>Buy from exporter/importer.</strong> Get bill of sale, export
            cert, and photos of VIN/plate.
          </li>
          <li>
            <strong>Arrange shipping.</strong> Ro-Ro or container; collect the
            Bill of Lading when it sails.
          </li>
          <li>
            <strong>Clear U.S. customs.</strong> File <em>CBP 7501</em>,
            <em> EPA 3520-1</em> (Code E), <em>DOT HS-7</em> (Box 1), pay duty.
          </li>
          <li>
            <strong>Title & register in your state.</strong> Take customs
            packet + translation (if needed) to DMV; some states limit freeway use.
          </li>
        </ol>

        <div className="grid-3">
          <div className="card"><div className="pad">
            <h3>Typical Costs</h3>
            <ul className="bullets">
              <li>Truck purchase: <strong>$3,500–$9,000+</strong></li>
              <li>Ocean freight: <strong>$1,000–$2,200</strong> (Ro-Ro)</li>
              <li>Port/handling: <strong>$300–$800</strong></li>
              <li>Customs broker (optional): <strong>$200–$500</strong></li>
              <li>Duty: <strong>2.5%</strong> (light trucks vary; check CBP)</li>
              <li>Title/DMV: <strong>$100–$300</strong>+</li>
            </ul>
          </div></div>

          <div className="card"><div className="pad">
            <h3>Paperwork Checklist</h3>
            <ul className="bullets">
              <li>Bill of Sale + Export Certificate/De-registration</li>
              <li>Bill of Lading / Arrival Notice</li>
              <li>EPA 3520-1 (Code E), DOT HS-7 (Box 1)</li>
              <li>CBP Entry (7501) + Duty receipt</li>
              <li>VIN/Frame number photos</li>
              <li>Certified translation (if not English)</li>
            </ul>
          </div></div>

          <div className="card"><div className="pad">
            <h3>Tips</h3>
            <ul className="bullets">
              <li>Confirm the **build month/year** on the plate.</li>
              <li>Ask exporter for **underbody/rust** photos.</li>
              <li>Plan insurance before pickup from port.</li>
              <li>Check **state rules** (mini-truck road use varies).</li>
            </ul>
          </div></div>
        </div>
      </section>
    </main>
  );
}
