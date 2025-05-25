import Image from "next/image";
import Link from "next/link";
export default function BottomSection() {
  return (
    <>
      <div className="bg-black flex flex-col  w-full py-10">
        <div className="flex flex-col items-center gap-2">
          <p className="nav-btn-primary text-2xl sm:text-6xl font-black">
            High Quality Service
          </p>
          <p className="text-lg sm:text-4xl font-black">높은 수준의 서비스</p>
          <p className="text-sm text-neutral-400">
            SPOB88에서 가장 인기 많은 최고의 게임을 즐겨보세요!{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2 px-2 lg:gap-10 py-5 lg:px-20">
          <Link href={"/categories/sports"}>
            <Image
              src={"/banner_games/banner_g1.png"}
              width={200}
              height={200}
              alt="banner"
              className="w-full"
            />
          </Link>{" "}
          <Link href={"/categories/sportscross"}>
            <Image
              src={"/banner_games/banner_g2.png"}
              width={200}
              height={200}
              alt="banner"
              className="w-full"
            />
          </Link>
          <Link href={"/categories/minigame"}>
            <Image
              src={"/banner_games/banner_g3.png"}
              width={200}
              height={200}
              alt="banner"
              className="w-full"
            />
          </Link>{" "}
          <Link href={"/categories/slot"}>
            <Image
              src={"/banner_games/banner_g4.png"}
              width={200}
              height={200}
              alt="banner"
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
