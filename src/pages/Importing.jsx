export default function Importing() {
  return (
    <>
      <main className="wrapper">
        <section className="section">
          <h1>Importing &amp; Ownership Guide</h1>
          <p className="lead">
            Learn how to import a Kei truck, understand state rules, and prepare for ownership.
          </p>

          <div className="grid-2">
            <div className="card">
              <h3>Importing Basics</h3>
              <ol>
                <li><strong>Purchase</strong> – Find a trusted exporter or auction in Japan.</li>
                <li><strong>Shipping</strong> – Arrange container or roll-on/roll-off shipping.</li>
                <li><strong>Customs</strong> – File import paperwork (25-year rule applies in the US).</li>
                <li><strong>Registration</strong> – Title your truck and get plates in your state.</li>
              </ol>
            </div>

            <div className="card">
              <h3>State-by-State Rules</h3>
              <p>Each state has different rules for road use, registration, and emissions.</p>
              <div className="placeholder sm">📍 Interactive map coming soon</div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Ownership Checklist</h2>
          <div className="grid-4">
            <div className="card">
              <i className="fa-solid fa-file fa-2x"></i>
              <strong>Documents</strong>
            </div>
            <div className="card">
              <i className="fa-solid fa-car-on fa-2x"></i>
              <strong>Inspection</strong>
            </div>
            <div className="card">
              <i className="fa-solid fa-shield fa-2x"></i>
              <strong>Insurance</strong>
            </div>
            <div className="card">
              <i className="fa-solid fa-id-card fa-2x"></i>
              <strong>Registration</strong>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Estimate Import Costs (Future Tool)</h2>
          <div className="grid-2">
            <div className="card">
              <div className="placeholder sm">Inputs (price, shipping, fees)</div>
            </div>
            <div className="card">
              <div className="placeholder sm">Estimated Total</div>
            </div>
          </div>
          <p className="meta">
            Planned feature: a calculator to help estimate import costs based on shipping and fees.
          </p>
        </section>
      </main>
    </>
  );
}
