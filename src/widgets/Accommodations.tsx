import Image from 'next/image';
import Accommodation from '@/components/Accomodation';
import Link from 'next/link';
import { AccommodationPrototype } from '@/types/AirbnbData';

interface AccommodationsProps {
  accommodation: AccommodationPrototype[];
}

const Accommodations = (props: AccommodationsProps) => {
  const accommodations = props.accommodation;

  return (
    <section className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {accommodations.map((accommodation, index) => (
        <Link href={accommodation.slug} key={index}>
          <Accommodation
            key={index}
            location={accommodation.location.description}
            host={accommodation.host}
            date={accommodation.date}
            price={accommodation.price}
            rating={accommodation.rating}
            badge={accommodation.hasBadge}
          >
            <Image
              className="w-full aspect-square object-cover rounded-xl"
              src={accommodation.photos[0].source}
              alt={accommodation.photos[0].description}
              width={300}
              height={300}
            />
          </Accommodation>
        </Link>
      ))}
    </section>
  );
};

export default Accommodations;
