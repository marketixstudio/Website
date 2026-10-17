/**
 * Car makes and models for the review page's car picker (/r/[client] with `carPicker`).
 * Makes sold in India with their current, common models. Logos are Simple Icons (CC0,
 * simple-icons/simple-icons, copied into public/cars), used only to identify the make.
 * Anything not listed is typed in through "Other".
 */

/** `wide`: the logo is a wordmark and needs more width to be readable. */
export type CarMake = { name: string; logo: string; models: string[]; wide?: boolean };

export const carMakes: CarMake[] = [
  {
    name: "Maruti Suzuki",
    logo: "/cars/suzuki.svg",
    models: ["Swift", "Baleno", "Dzire", "Brezza", "Ertiga", "Wagon R", "Fronx", "Grand Vitara", "Alto", "Celerio", "XL6", "Ciaz", "Ignis", "S-Presso", "Jimny", "Eeco"],
  },
  {
    name: "Hyundai",
    logo: "/cars/hyundai.svg",
    models: ["Creta", "Venue", "i20", "Grand i10 Nios", "Verna", "Exter", "Alcazar", "Aura", "Tucson"],
  },
  {
    name: "Tata",
    logo: "/cars/tata.svg",
    models: ["Nexon", "Punch", "Tiago", "Altroz", "Tigor", "Harrier", "Safari", "Curvv"],
  },
  {
    name: "Mahindra",
    logo: "/cars/mahindra.svg",
    wide: true,
    models: ["XUV700", "Scorpio-N", "Scorpio Classic", "Thar", "Thar Roxx", "XUV 3XO", "Bolero", "Bolero Neo", "XUV400", "BE 6", "XEV 9e"],
  },
  { name: "Kia", logo: "/cars/kia.svg", models: ["Seltos", "Sonet", "Carens", "Syros", "Carnival"] },
  {
    name: "Toyota",
    logo: "/cars/toyota.svg",
    models: ["Innova Crysta", "Innova Hycross", "Fortuner", "Glanza", "Hyryder", "Rumion", "Hilux", "Camry"],
  },
  { name: "Honda", logo: "/cars/honda.svg", models: ["City", "Amaze", "Elevate"] },
  { name: "MG", logo: "/cars/mg.svg", models: ["Hector", "Astor", "Windsor EV", "Comet EV", "ZS EV", "Gloster"] },
  { name: "Renault", logo: "/cars/renault.svg", models: ["Kiger", "Triber", "Kwid"] },
  { name: "Skoda", logo: "/cars/skoda.svg", models: ["Kushaq", "Slavia", "Kylaq", "Kodiaq", "Octavia"] },
  { name: "Volkswagen", logo: "/cars/volkswagen.svg", models: ["Virtus", "Taigun", "Tiguan"] },
  { name: "Nissan", logo: "/cars/nissan.svg", models: ["Magnite"] },
];
