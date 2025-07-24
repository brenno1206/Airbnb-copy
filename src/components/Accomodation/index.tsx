import { IconHeartFilled, IconStarFilled } from '@/assets/icons';

interface AccommodationProps {
  children: React.ReactNode;
  location: string;
  host: string;
  date: string;
  price: number;
  rating: number;
  badge: boolean;
}

const Accommodation = ({
  children,
  location,
  host,
  date,
  price,
  rating,
  badge,
}: AccommodationProps) => {
  return (
    <figure className="relative">
      <div className="p-2 absolute w-full flex flex-row justify-between items-center">
        <span className="bg-white rounded-full px-4 py-1 font-semibold ">
          {badge ? 'Preferido dos Hóspedes' : ''}
        </span>
        <IconHeartFilled
          className="stroke-white opacity-80"
          aria-label="Favoritos"
          size={30}
        />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between">
          <span className="font-semibold">{location}</span>
          <div className="flex flex-row gap-1.5">
            <IconStarFilled aria-label="Avaliações" size={18} />
            {rating}
          </div>
        </div>
        <div>Anfitriã(o): {host}</div>
        <div>{date}</div>
        <div className="font-simibold">R$ {price}</div>
      </figcaption>
    </figure>
  );
};

export default Accommodation;
