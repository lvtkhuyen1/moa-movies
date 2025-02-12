import HeaderCard from "@/components/HeaderCard";
import Header from "../components/Header";
import MovieBanner from "@/components/MovieBanner";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import ListCategory from "@/components/MovieScroll";

export default function Home() {
  return (
    <div className="relative min-h-screen p-3 md:p-10 bg-black">
      <Header />
      <HeaderCard />
      <MovieBanner />
      <ListCategory />
      <Footer />
      <Menu />
    </div>
  );
}
