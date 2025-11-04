import { useEffect, useState } from "react";

export default function Carousel({ images = [], intervalMs = 3500 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % images.length), intervalMs);
    return () => clearInterval(t);
  }, [images, intervalMs]);

  if (!images.length) return null;

  return (
    <div className="carousel" style={{ position: "relative", overflow: "hidden", borderRadius: 6 }}>
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "360px",
            objectFit: "cover",
            position: idx === i ? "relative" : "absolute",
            inset: 0,
            opacity: idx === i ? 1 : 0,
            transition: "opacity .6s ease"
          }}
        />
      ))}
      <div style={{position:"absolute",bottom:10,left:0,right:0,display:"flex",gap:6,justifyContent:"center"}}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setI(idx)}
            style={{
              width: 10, height: 10, borderRadius: "50%",
              background: idx === i ? "var(--accent)" : "rgba(255,255,255,.6)",
              cursor: "pointer"
            }}
          />
        ))}
      </div>
    </div>
  );
}
