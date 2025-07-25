import { fetchDataByUrl } from '@/utils/api';
import AccommodationDetails from '@/widgets/AccommodationDetails';
import AccommodationTestimonials from '@/widgets/AccommodationTestimonials';
import Footer from '@/widgets/Footer';
import Gallery from '@/widgets/Gallery';
import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';
import { notFound } from 'next/navigation';

interface AccommodationPageProps {
  id: string;
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<AccommodationPageProps>;
}) {
  const { id } = await params;
  const accommodation = await fetchDataByUrl(id);
  if (!accommodation) {
    notFound();
  }
  return (
    <>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>
      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold pb-2">{accommodation.title}</h1>
        <Gallery photos={accommodation.photos} />
        <section className="flex flex-col md:flex-row">
          <AccommodationDetails accommodation={accommodation} />
          <AccommodationTestimonials
            testimonials={accommodation.testimonials}
          />
        </section>
      </main>
      <footer className="bg-gray-200">
        <Footer />
      </footer>
    </>
  );
}
