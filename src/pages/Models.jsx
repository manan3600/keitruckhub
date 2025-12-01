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
  const [editingModel, setEditingModel] = useState(null);

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

    if (!editingModel && trimmedId.length < 2) {
      setMessage("ID must be at least 2 characters.");
      return;
    }

    if (trimmedName.length < 2) {
      setMessage("Name must be at least 2 characters.");
      return;
    }

    if (!Number.isInteger(numericYear) || numericYear < 1900 || numericYear > 2100) {
      setMessage("Year must be a whole number between 1900 and 2100.");
      return;
    }

    const isEditing = !!editingModel;

    const formData = new FormData();
    if (!isEditing) {
      formData.append("id", trimmedId);
    }
    formData.append("name", trimmedName);
    formData.append("year", numericYear.toString());
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const url = isEditing
      ? `${API_BASE}/api/models/${editingModel.id}`
      : `${API_BASE}/api/models`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Error: " + (data.error || "Could not save model."));
        return;
      }

      const saved = data.model;

      if (isEditing) {
        setModels((prev) =>
          prev.map((m) => (m.id === editingModel.id ? saved : m))
        );
        setMessage("✅ Successfully updated model!");
      } else {
        setModels((prev) => [...prev, saved]);
        setMessage("✅ Successfully added model!");
      }

      setEditingModel(null);
      setId("");
      setName("");
      setYear("");
      setDescription("");
      setImageFile(null);
      setShowForm(false);
    } catch (err) {
      setMessage("❌ Could not reach server");
    }
  };

  const startEdit = (model) => {
    setEditingModel(model);
    setId(model.id);
    setName(model.name);
    setYear(model.year);
    setDescription(model.description || "");
    setImageFile(null);
    setShowForm(true);
    setMessage("");
  };

  const cancelEdit = () => {
    setEditingModel(null);
    setId("");
    setName("");
    setYear("");
    setDescription("");
    setImageFile(null);
    setShowForm(false);
    setMessage("");
  };

  const deleteModel = async (id) => {
    setMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/models/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ Error: " + (data.error || "Could not delete model."));
        return;
      }

      setModels((prev) => prev.filter((m) => m.id !== id));
      setMessage("✅ Successfully deleted model.");
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
        <h1>Kei Truck Models &amp; Specifications</h1>
        <p className="lead">Loaded live from your Express server.</p>

        <button
          className="btn"
          type="button"
          onClick={() => {
            if (editingModel) {
              cancelEdit();
            } else {
              setShowForm((prev) => !prev);
              setMessage("");
            }
          }}
        >
          {showForm ? (editingModel ? "Close Edit" : "Close Form") : "Add New Model"}
        </button>

        {showForm && (
          <form className="add-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="model-id">ID (unique):</label>
              <input
                id="model-id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required={!editingModel}
                minLength={2}
                disabled={!!editingModel}
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
                  setImageFile(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : null
                  )
                }
              />
            </div>

            <button type="submit" className="btn">
              {editingModel ? "Save Changes" : "Add Model"}
            </button>

            {editingModel && (
              <button
                type="button"
                className="btn secondary"
                onClick={cancelEdit}
                style={{ marginLeft: "0.5rem" }}
              >
                Cancel
              </button>
            )}
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
              <div key={truck.id} className="model-card-wrapper">
                <ModelCard img={imgSrc} name={truck.name} meta={meta} href={href} />
                <div className="card-actions">
                  <button
                    type="button"
                    className="btn-small"
                    onClick={() => startEdit(truck)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn-small danger"
                    onClick={() => deleteModel(truck.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
