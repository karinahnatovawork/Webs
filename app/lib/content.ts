export const SITE = {
  name: "THIS IS VALENCIA",
  houseName: "Les Grands Chênes",
  tagline: "Maison d'hôtes",
  address: ["226 route de la Poularie", "24290 Valojoulx", "Périgord Noir"],
  email: "contact@maisonlesgrandschenes.com",
  phone: "+33 6 24 10 61 06",
  phoneHref: "+33624106106",
  instagram: "https://www.instagram.com/",
  year: 2026,
};

export const NAV_LINKS = [
  { href: "/espacios", label: "Les chambres" },
  { href: "/", label: "La maison" },
  { href: "/alrededores", label: "La découverte" },
] as const;

export type Room = {
  slug: string;
  title: string[];
  image: string;
  alt: string;
  features: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "classiques",
    title: ["Chambres", "classiques"],
    image: "/images/ciudad-artes.jpg",
    alt: "Arquitectura blanca de la Ciudad de las Artes y las Ciencias",
    features: [
      "17 m²",
      "Lit 160x200",
      "Linge de lit 100 % coton",
      "Internet Wifi",
      "Produits de bains naturels",
      "Peignoir et serviettes",
      "Sèche-cheveux",
      "Bureau",
      "Non-fumeurs",
      "Douche à l'italienne",
      "WC séparés",
      "Espaces de détente",
      "Penderie",
      "Accès direct au jardin",
      "Climatisation",
      "Café et thé à volonté",
      "Réfrigérateur à disposition",
    ],
  },
  {
    slug: "superieures",
    title: ["Chambres", "supérieures"],
    image: "/images/lonja.jpg",
    alt: "Torres de la Lonja de la Seda con la bandera valenciana",
    features: [
      "25 m²",
      "Lit 180x200",
      "Linge de lit 100 % coton",
      "Internet Wifi",
      "Produits de bains naturels",
      "Peignoir et serviettes",
      "Sèche-cheveux",
      "Bureau",
      "Non-fumeurs",
      "Douche à l'italienne ou baignoire",
      "WC séparés",
      "Espaces de détente",
      "Penderie",
      "Accès direct au jardin",
      "Climatisation",
      "Café et thé à volonté",
      "Réfrigérateur à disposition",
    ],
  },
];

export type Place = { name: string; distance?: string; note?: string };

export const PLACES_VILLAGES: Place[] = [
  { name: "Le village de Saint-Léon sur Vézère", distance: "7 km" },
  { name: "La ville de Montignac", distance: "8 km" },
  { name: "Le village de Fanlac", distance: "10 km" },
  { name: "Le village de Saint-Geniès", distance: "12 km" },
  { name: "Le village de Saint-Amand-de-Coly", distance: "14 km" },
  { name: "La ville de Sarlat", distance: "22 km" },
  { name: "La Vallée de la Dordogne et ses châteaux", distance: "30 km" },
];

export const PLACES_SITES: Place[] = [
  { name: "Les Étangs de Valojoulx", distance: "1 km" },
  { name: "Le Château de Losse", distance: "4 km" },
  { name: "Les Grottes de Lascaux", distance: "8 km" },
  { name: "La Roque Saint-Christophe", distance: "13 km" },
  { name: "Le Village troglodytique de la Madeleine", distance: "17 km" },
  { name: "La Grotte de Combarelles", distance: "17 km" },
  { name: "Le Musée National de la Préhistoire des Eyzies", distance: "18 km" },
  { name: "La Grotte de Font-de-Gomme", distance: "18 km" },
  { name: "Le Château de Commarque", distance: "18 km" },
  { name: "La Grotte de Rouffignac", distance: "20 km" },
  { name: "Les Jardins d'Eyrignac", distance: "26 km" },
  { name: "Les Jardins de Marqueyssac", distance: "33 km" },
  { name: "Le Château de Hautefort", distance: "37 km" },
  { name: "Le Cloître de Cadouin", distance: "43 km" },
];

export const ACTIVITIES: Place[] = [
  { name: "Randonnée", note: "au départ de la maison d'hôte" },
  {
    name: "VTT",
    note: "au départ de la maison, location de VTT électriques à la journée",
  },
  { name: "Yoga", note: "espace dédié, tapis à disposition" },
  { name: "Massages et soins", note: "à domicile, sur demande" },
  { name: "Ferme pédagogique", distance: "1 km" },
  { name: "Atelier poterie", distance: "1 km" },
  { name: "Atelier miel", distance: "1 km" },
  { name: "Centre équestre", distance: "4 km" },
  { name: "Canoë, kayak, paddle", distance: "4 km" },
  { name: "Cinéma d'art et d'essai", distance: "6 km" },
];

export const EVENTS: Place[] = [
  { name: "Le festival littéraire Les plumes de Léon", note: "août" },
  {
    name: "Le festival de Danses et Musiques du Monde de Montignac",
    note: "juillet",
  },
  {
    name: "Le festival de musique classique du Périgord noir",
    note: "juillet–septembre",
  },
  {
    name: "Le festival international des Arts du Mime et du Geste à Périgueux Mimos",
    note: "juillet–août",
  },
  { name: "Le festival des Jeux du Théâtre de Sarlat", note: "juillet–août" },
  {
    name: "Le festival de Musiques de la Nouvelle-Orléans en Périgord",
    note: "juin–août",
  },
  { name: "Le festival Musique en Périgord", note: "juillet–août" },
  { name: "Le festival du Film de Sarlat", note: "novembre" },
  { name: "Le festival DocumenTerre de Montignac", note: "novembre" },
  { name: "Le festival des Contes du Lébérou", note: "novembre" },
];
