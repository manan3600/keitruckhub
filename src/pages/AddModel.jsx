import { useState } from "react";

const API_BASE = "https://server-keitruckhub.onrender.com";

export default function AddModel() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const trimmedId = id.trim();
    const trimmedName = name.trim();
    const numericYear = Number(year);

    if (trimmedId.length < 2) {
      setMessage("ID must be at least 2 characters.");
      return;
    }

    if (trimmedName.length < 2) {
      setMessage("Name must be at least 2 characters.");
      return;
    }

    if (
      !Number.isInteger(numericYear) ||
      numericYear < 1900 ||
      numericYear > 2100
    ) {
      setMessage("Year must be a whole number between 1900 and 2100.");
      return;
    }

    const newModel = {
      id: trimmedId,
      name: trimmedName,
      year: numericYear,
      description,
    };

    try {
      const res = await fetch(`${API_BASE}/api/models`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newModel),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Error: " + (data.error || "Could not add model."));
        return;
      }

      setMessage("✅ Successfully added model!");
      setId("");
      setName("");
      setYear("");
      setDescription("");
    } catch (err) {
      setMessage("❌ Could not reach server");
    }
  };

  return (
    <main className="wrapper">
      <section className="section">
        <h1>Add a New Kei Truck</h1>

        <form className="add-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="model-id">ID (unique):</label>
            <input
              id="model-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              minLength={2}
            />
          </div>

          <div className="field">
            <label htmlFor="model-name">Name:</label>
            <input
              id="model-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
            />
          </div>

          <div className="field">
            <label htmlFor="model-year">Year:</label>
            <input
              id="model-year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              min={1900}
              max={2100}
            />
          </div>

          <div className="field">
            <label htmlFor="model-description">Description:</label>
            <textarea
              id="model-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Add Model
          </button>
        </form>

        {message && <p className="status">{message}</p>}
      </section>
    </main>
  );
}
