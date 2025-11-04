import { useState } from "react";

const ACCESS_KEY = "6fd39dac-ffc7-4ac7-a50f-f69fb0d1ea9f";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from KeiTruck Hub");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      }).then(r => r.json());

      if (res.success) {
        setStatus("✅ Message sent! We'll get back to you soon.");
        form.reset();
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wrapper">
      <section className="section">
        <h1>Contact Us</h1>
        <p className="lead">Have questions? Send us a message or find us on the map.</p>

        <div className="grid-2">
          <form className="card" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="field">
              <label htmlFor="reason">Reason</label>
              <select id="reason" name="reason" required>
                <option value="">Choose one…</option>
                <option>General Question</option>
                <option>Importing Help</option>
                <option>Submit Feedback</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message..." required></textarea>
            </div>

            <div className="field">
              <label>
                <input type="checkbox" id="consent" required /> I agree to be contacted about my inquiry.
              </label>
            </div>

            <div className="field">
              <button className="btn" type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>

            <p className="form-status" aria-live="polite">{status}</p>
          </form>

          <div className="card">
            <div className="map-embed" style={{height:"220px", overflow:"hidden", borderRadius:"4px"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9832079477665!2d-81.0311356226695!3d33.99296507317953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb000addf4e1%3A0x41bf318e2f28f124!2sUSC%20Bursar&#39;s%20Office!5e0!3m2!1sen!2sus!4v1760754829809!5m2!1sen!2sus"
                style={{border:0, width:"100%", height:"100%"}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
                title="Map"
              ></iframe>
            </div>
            <div style={{marginTop:"1rem", textAlign:"left"}}>
              <p><strong>Email:</strong> info@keitruckhub.com</p>
              <p><strong>Community:</strong> <a href="#">Join our Forum</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
