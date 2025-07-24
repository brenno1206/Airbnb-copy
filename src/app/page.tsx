import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';
import HorizontalTabbedNavigation from '@/widgets/HorizontalTabbedNavigation';

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
        <SearchBar />
      </header>
      <hr className="my-3 text-gray-300" />
      <main className="container mx-auto">
        <HorizontalTabbedNavigation />
      </main>
      <footer className="container mx-auto">Rodapé</footer>
    </>
  );
}
