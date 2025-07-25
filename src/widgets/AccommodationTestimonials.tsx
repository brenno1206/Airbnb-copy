import { IconStarFilled } from '@/assets/icons';
import { TestimonialsPrototype } from '@/types/AirbnbData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface AccommodationTestimonialsProps {
  testimonials: TestimonialsPrototype[];
}

const AccommodationTestimonials = (props: AccommodationTestimonialsProps) => {
  const testimonials = props.testimonials;
  return (
    <article className="w-full py-4">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="flex flex-row gap-2 items-center">
        <IconStarFilled className="size-4" />
        <span>4.9 (400+ avaliações)</span>
      </div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex flex-row gap-2 py-4 items-start">
          <Image
            className="aspect-square object-cover rounded-full "
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
          />
          <div>
            <span className="text-md font-semibold">{testimonial.name}</span>
            <p>{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default AccommodationTestimonials;
