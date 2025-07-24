import Header from '@/widgets/Header';
import SearchBar from '@/widgets/SearchBar';

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <SearchBar />
      </header>
      <hr className="mt-5 text-gray-300" />
      <section className="mt-20">Conteúdo</section>
      <footer>Rodapé</footer>
    </>
  );
}
