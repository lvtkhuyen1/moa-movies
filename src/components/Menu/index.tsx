import Image, { StaticImageData } from "next/image";
import home from "@/asset/icon/home.png";
import drama from "@/asset/icon/drama.png";
import show from "@/asset/icon/show.png";
import movie from "@/asset/icon/movie.png";
import more from "@/asset/icon/more.png";

interface MenuItem {
  id: number;
  title: string;
  icon: StaticImageData;
  url: string;
}

const menus: MenuItem[] = [
  { id: 1, title: "홈", icon: home, url: "" },
  { id: 2, title: "드라마", icon: drama, url: "" },
  { id: 3, title: "예능", icon: show, url: "" },
  { id: 4, title: "영화", icon: movie, url: "" },
  { id: 5, title: "기타", icon: more, url: "" },
];

const MenuItem = ({ tab }: { tab: MenuItem }) => {
  return (
    <a href={tab.url} className="flex flex-col items-center justify-end gap-1">
      <Image src={tab.icon} alt={tab.title} className="w-5 h-5" />
      <span className="text-sm pb-0">{tab.title}</span>
    </a>
  );
};

export default function Menu() {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full bg-black text-white flex justify-around py-3 md:hidden">
      {menus.map((menu) => (
        <MenuItem key={menu.id} tab={menu} />
      ))}
    </div>
  );
}
