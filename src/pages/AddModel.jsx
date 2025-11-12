import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddModel() {
  const [form, setForm] = useState({ id: "", name: "", year: "", description: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("https://server-keitruckhub.onrender.com/api/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add model");
      }

      setStatus("Model added successfully!");
      // Optionally redirect back to models page
      setTimeout(() => navigate("/models"), 800);
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wrapper">
      <section className="section">
        <h1>Add a New Kei Truck Model</h1>
        <p className="lead">This form sends a POST request to the Express server.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            ID (no spaces, e.g. "carry-4x4")
            <input
              name="id"
              value={form.id}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Year
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </label>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Add Model"}
          </button>

          {status && <p className="meta" style={{ marginTop: "0.5rem" }}>{status}</p>}
        </form>
      </section>
    </main>
  );
}
