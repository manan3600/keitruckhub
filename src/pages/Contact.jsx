export default function Contact() {
  return (
    <>
      <main className="wrapper">
        <section className="section">
          <h1>Contact Us</h1>
          <p className="lead">Have questions? Send us a message or find us on the map.</p>

          <div className="grid-2">
            {/* CONTACT FORM */}
            <form id="contactForm" className="card" noValidate>
              {/* Web3Forms helpful fields */}
              <input type="hidden" name="subject" value="New message from KeiTruck Hub" />
              <input type="text" name="botcheck" id="botcheck" tabIndex="-1" autoComplete="off" style={{display:"none"}}/>

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
                <button id="contactSubmit" className="btn" type="submit">Send Message</button>
              </div>

              <p id="formStatus" className="form-status" aria-live="polite"></p>
            </form>

            {/* MAP + INFO */}
            <div className="card">
              <div className="map-embed" style={{height:"220px", overflow:"hidden", borderRadius:"4px"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9832079477665!2d-81.0311356226695!3d33.99296507317953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb000addf4e1%3A0x41bf318e2f28f124!2sUSC%20Bursar&#39;s%20Office!5e0!3m2!1sen!2sus!4v1760754829809!5m2!1sen!2sus"
                  style={{border:0, width:"100%", height:"100%"}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
    </>
  );
}
