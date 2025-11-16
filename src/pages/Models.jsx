import { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import baseModels from "../data/models";

const API_BASE = "https://server-keitruckhub.onrender.com";

export default function Models() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchModels() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_BASE}/api/models`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setModels(data);
      } catch (err) {
        setError(err.message || "Unable to load models right now.");
      } finally {
        setLoading(false);
      }
    }
    fetchModels();
  }, []);

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

    const formData = new FormData();
    formData.append("id", trimmedId);
    formData.append("name", trimmedName);
    formData.append("year", numericYear.toString());
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE}/api/models`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Error: " + (data.error || "Could not add model."));
        return;
      }

      const created = data.model;
      setModels((prev) => [...prev, created]);

      setMessage("✅ Successfully added model!");
      setId("");
      setName("");
      setYear("");
      setDescription("");
      setImageFile(null);
    } catch (err) {
      setMessage("❌ Could not reach server");
    }
  };

  if (loading)
    return (
      <main className="wrapper">
        <h2>Loading models...</h2>
      </main>
    );

  if (error)
    return (
      <main className="wrapper">
        <h2>Error: {error}</h2>
      </main>
    );

  return (
    <main className="wrapper">
      <section className="section">
        <h1>Kei Truck Models & Specifications</h1>

        <button
          className="btn"
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Form" : "Add New Model"}
        </button>

        {showForm && (
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

            <div className="field">
              <label htmlFor="model-image">Image file:</label>
              <input
                id="model-image"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImageFile(e.target.files && e.target.files[0]
                    ? e.target.files[0]
                    : null)
                }
              />
            </div>

            <button type="submit" className="btn">
              Add Model
            </button>
          </form>
        )}

        {message && <p className="status">{message}</p>}

        <div className="grid-3">
          {models.map((truck) => {
            const metaModel = baseModels.find((m) => m.id === truck.id);
            const imgSrc =
              truck.imageUrl
                ? `${API_BASE}${truck.imageUrl}`
                : metaModel?.img ||
                  process.env.PUBLIC_URL + "/images/kei-truck-japan.jpg";
            const meta = metaModel?.meta || `${truck.year}`;
            const href = `/models/${truck.id}`;

            return (
              <ModelCard
                key={truck.id}
                img={imgSrc}
                name={truck.name}
                meta={meta}
                href={href}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
