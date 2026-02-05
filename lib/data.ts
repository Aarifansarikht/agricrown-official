
export interface ProductSpecification {
  sizeFt: string;
  overallDimension: string;
  tillageWidth: string;
  tillageDepth: string;
  gearBoxType: string;
  sideTransmission: string;
  crownPinion: string;
  tractorPowerHP: string;
  frameSheetThickness: string;
  noOfBlades: string;
  netWeight: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  series: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  price: string;
  category: string;
  features: string[];
  specifications: ProductSpecification[];
  isNew?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "titanium-plus-series-tiller",
    name: "TITANIUM PLUS SERIES",
    series: "Titanium Plus",
    description: "The Titanium Plus Series is the pinnacle of Agricrown engineering. Designed for heavy-duty performance in the toughest soil conditions, it features a robust multi-speed gearbox and reinforced frame structure.",
    shortDescription: "Heavy-duty multi-speed tiller for tough soil.",
    image: "/images/products/rotary-tiller-for-farming.webp", 
    gallery: [
      "https://images.unsplash.com/photo-1625246333195-58197bd4773d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1000&auto=format&fit=crop"
    ],
    price: "75000",
    category: "Rotary Tiller",
    features: ["Multi Speed Gearbox", "Heavy Duty Frame", "High Performance Blades"],
    isNew: true,
    specifications: [
      {
        sizeFt: "5ft",
        overallDimension: "740x860x1780",
        tillageWidth: "1560",
        tillageDepth: "160-200MM",
        gearBoxType: "MUTI SPEED",
        sideTransmission: "GEAR DRIVE",
        crownPinion: "13X23",
        tractorPowerHP: "35-40",
        frameSheetThickness: "6MM",
        noOfBlades: "36/42",
        netWeight: "485"
      }
    ]
  },
  {
    id: "2",
    slug: "titanium-series-tiller",
    name: "TITANIUM SERIES",
    series: "Titanium",
    description: "A versatile rotary tiller balancing power and efficiency. The Titanium Series is perfect for medium to large farms, offering reliable gear drive transmission and durable blade options.",
    shortDescription: "Versatile performance for medium to large farms.",
    image: "/images/products/tractor-blade.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
    ],
    price: "80000",
    category: "Rotary Tiller",
    features: ["Reliable Gear Drive", "Optimized Weight", "Fuel Efficient"],
    isNew: false,
    specifications: [
      {
        sizeFt: "6ft",
        overallDimension: "740x860x2000",
        tillageWidth: "1880",
        tillageDepth: "160-200MM",
        gearBoxType: "MUTI SPEED",
        sideTransmission: "GEAR DRIVE",
        crownPinion: "13X23",
        tractorPowerHP: "40-45",
        frameSheetThickness: "5MM",
        noOfBlades: "42/48",
        netWeight: "450KG"
      }
    ]
  },
  {
    id: "3",
    slug: "alfha-series-tiller",
    name: "ALFHA SERIES",
    series: "Alfha",
    description: "The Alfha Series brings advanced transmission technology to everyday farming. With a focus on fine tillage and seedbed preparation, it's the smart choice for precision agriculture.",
    shortDescription: "Advanced transmission for precision tillage.",
    image: "/images/products/Rotary-Tiller.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628005374467-37d45293237a?q=80&w=1000&auto=format&fit=crop"
    ],
    price: "90000",
    category: "Rotary Tiller",
    features: ["Precision Control", "High Speed Operation", "Low Maintenance"],
    isNew: true,
    specifications: [
      {
        sizeFt: "5ft",
        overallDimension: "740x860x1780",
        tillageWidth: "1560",
        tillageDepth: "160-200MM",
        gearBoxType: "MUTI SPEED",
        sideTransmission: "GEAR DRIVE",
        crownPinion: "11X22",
        tractorPowerHP: "30-35",
        frameSheetThickness: "4MM",
        noOfBlades: "36/42",
        netWeight: "400KG"
      }
    ]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "agricrown-launches-titanium-plus",
    title: "Agricrown Launches New Titanium Plus Series",
    excerpt: "The wait is over. Introducing our most advanced rotary tiller yet, designed for extreme soil conditions and maximum durability.",
    content: `
      <p>We are thrilled to announce the official launch of the Titanium Plus Series, the latest addition to our premium line of agricultural machinery.</p>
      <p>Engineered after three years of rigorous field testing in diverse soil conditions—from the rocky terrains of the Deccan Plateau to the clay-heavy soils of the Punjab region—the Titanium Plus is built to endure.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Reinforced Transmission:</strong> A multi-speed gearbox capable of handling 20% more torque than standard models.</li>
        <li><strong>Boron Steel Blades:</strong> Custom alloy composition ensures blades stay sharp 3x longer.</li>
        <li><strong>Fuel Efficiency:</strong> Optimized gear ratios reduce tractor load, saving up to 15% in fuel costs per acre.</li>
      </ul>
      <p>The Titanium Plus is available now at all authorized dealers worldwide.</p>
    `,
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd4773d?q=80&w=1200&auto=format&fit=crop",
    category: "Product Launch",
    author: "Rajesh Kumar, Chief Engineer"
  },
  {
    id: 2,
    slug: "expanding-global-footprint-brazil",
    title: "Expanding Our Global Footprint to Brazil",
    excerpt: "We are proud to announce our new distribution center in Sao Paulo, bringing our machinery closer to South American farmers.",
    content: `
      <p>Agricrown continues its global expansion with a major new facility in Sao Paulo, Brazil.</p>
      <p>South America represents one of the most vital agricultural regions in the world, and we believe our robust machinery is perfectly suited for the large-scale farming operations prevalent in the region.</p>
      <p>"This isn't just a warehouse; it's a full-service hub," says CEO Amit Singh. "We are bringing spare parts, technical training centers, and our full assembly line capabilities to Brazil to ensure 24-hour support turnaround for our partners."</p>
    `,
    date: "Sep 28, 2024",
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1200&auto=format&fit=crop",
    category: "Corporate",
    author: "Sarah Jenkins, VP Global Operations"
  },
  {
    id: 3,
    slug: "sustainable-farming-tips",
    title: "Sustainable Farming: Tips for Soil Health",
    excerpt: "How proper tillage depth and timing can significantly improve your soil's nutrient retention and crop yield.",
    content: `
      <p>Soil health is the foundation of a successful harvest. While machinery is important, how you use it matters even more.</p>
      <p>Over-tilling can lead to soil erosion and moisture loss. At Agricrown, we advocate for "Smart Tillage" practices.</p>
      <h3>Best Practices:</h3>
      <ul>
        <li><strong>Adjust Depth:</strong> Only till as deep as necessary for your specific crop root structure.</li>
        <li><strong>Timing:</strong> Avoid tilling when the soil is too wet to prevent compaction.</li>
        <li><strong>Residue Management:</strong> Use tillers to incorporate crop residue back into the soil, boosting organic matter.</li>
      </ul>
    `,
    date: "Aug 15, 2024",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    category: "Farming Tips",
    author: "Dr. A. Patel, Agronomist"
  }
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
