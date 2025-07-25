export interface AirbnbAPI {
  accommodation: AccommodationPrototype[];
  icons: PhotoPrototype[];
}

export interface AccommodationPrototype {
  id: string;
  title: string;
  date: string;
  testimonials: TestimonialsPrototype[];
  hasBadge: boolean;
  host: string;
  slug: string;
  rating: number;
  location: LocationPrototype;
  price: number;
  photos: PhotoPrototype[];
}

export interface TestimonialsPrototype {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  customerTime: number;
  createdAt: number;
  stayedAt: number;
}
export interface LocationPrototype {
  description: string;
  city: string;
  state: string;
  country: string;
}
export interface PhotoPrototype {
  id: string;
  source: string;
  description: string;
  url: string;
}
