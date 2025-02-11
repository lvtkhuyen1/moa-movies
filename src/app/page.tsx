import HeaderCard from "@/components/HeaderCard";
import Header from "../components/Header";
import MovieBanner from "@/components/MovieBanner";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="relative min-h-screen p-3 md:p-10 bg-black">
      <Header />
      <HeaderCard />
      <MovieBanner />
      <Category title="Category" />
      <Category title="Category" />
      <Category title="Category" />
      <Footer />
      <Menu />
    </div>
  );
}
