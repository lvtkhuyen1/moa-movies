import HeaderCard from "@/components/HeaderCard";
import Header from "../components/Header";
import MovieBanner from "@/components/MovieBanner";

export default function Home() {
  return (
    <div className="m-3 md:m-10">
      <Header />
      <HeaderCard />
      <MovieBanner />
    </div>
  );
}
