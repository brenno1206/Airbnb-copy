import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';
import HorizontalTabbedNavigation from '@/widgets/HorizontalTabbedNavigation';
import Accommodations from '@/widgets/Accommodations';
import Footer from '@/widgets/Footer';

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>
      <hr className="my-5 text-gray-300" />
      <main className="container mx-auto">
        <HorizontalTabbedNavigation />
        <Accommodations />
      </main>
      <footer className="bg-gray-200">
        <Footer />
      </footer>
    </>
  );
}
