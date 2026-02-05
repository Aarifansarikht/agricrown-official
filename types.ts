
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
  price: string; // Used for "distributorship rate"
  category: string;
  features: string[];
  specifications: ProductSpecification[]; // Array because a product has multiple size variants
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
  content: string; // HTML or Markdown content
  date: string;
  image: string;
  category: string;
  author: string;
}
