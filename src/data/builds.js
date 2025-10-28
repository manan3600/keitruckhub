// src/data/builds.js
import farm   from "../assets/build-farm.jpg";
import trail  from "../assets/build-trail.jpg";
import camper from "../assets/build-camper.jpg";

export const BUILDS = [
  {
    id: "farm",
    title: "Farm Utility",
    img: farm,
    spec: "4WD • Lift kit • Dump bed",
    blurb: "Workhorse setup with bed liner, tool rack, and all-terrain tires.",
    tags: ["Utility", "Work", "4WD"]
  },
  {
    id: "trail",
    title: "Trail Runner",
    img: trail,
    spec: "4WD • Skid plates • Winch",
    blurb: "Weekend trail build with recovery points and mild suspension lift.",
    tags: ["Off-road", "Adventure", "Lifted"]
  },
  {
    id: "camper",
    title: "Micro Camper",
    img: camper,
    spec: "RWD • Camper box • Solar",
    blurb: "Lightweight camper pod with fold-flat bed and roof solar.",
    tags: ["Camping", "Overland", "DIY"]
  }
];
