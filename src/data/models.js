// src/data/models.js
const models = [
  {
    id: "suzuki",
    name: "Suzuki Carry",
    meta: "660cc • 4WD • 1999",
    img: process.env.PUBLIC_URL + "/images/suzuki-carry.webp",
    engine: "660cc (K6A)",
    drive: "4WD",
    transmission: "5-speed manual",
    year: 1999,
    description: "Reliable workhorse with compact size and great utility."
  },
  {
    id: "honda",
    name: "Honda Acty",
    meta: "656cc • RWD • 1997",
    img: process.env.PUBLIC_URL + "/images/honda-acty.JPG",
    engine: "656cc (E07A)",
    drive: "RWD",
    transmission: "5-speed manual",
    year: 1997,
    description: "Efficient, lightweight, and versatile for daily tasks."
  },
  {
    id: "hijet",
    name: "Daihatsu Hijet",
    meta: "659cc • 4WD • 2001",
    img: process.env.PUBLIC_URL + "/images/daihatsu-hijet.jpeg",
    engine: "659cc (EF-SE/VE)",
    drive: "4WD",
    transmission: "5-speed manual",
    year: 2001,
    description: "Durable mini truck with plenty of customization options."
  },
  {
    id: "sambar",
    name: "Subaru Sambar",
    meta: "660cc • AWD • 2005",
    img: process.env.PUBLIC_URL + "/images/subaru-sambar.jpg",
    engine: "660cc (EN07)",
    drive: "AWD",
    transmission: "5-speed manual",
    year: 2005,
    description: "Rear-engine layout with great stability and traction."
  }
];

export default models;
