import { useState } from "react";

export default function AddModel() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newModel = { id, name, year, description };

    try {
      const res = await fetch("https://server-keitruckhub.onrender.com/api/models", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newModel)
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Error: " + data.error);
        return;
      }

      setMessage("✅ Successfully added model!");

      // Clear fields
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
          <label>ID (unique):
            <input value={id} onChange={(e) => setId(e.target.value)} required />
          </label>

          <label>Name:
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>Year:
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
          </label>

          <label>Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          <button type="submit">Add Model</button>
        </form>

        {message && <p className="status">{message}</p>}
      </section>
    </main>
  );
}
