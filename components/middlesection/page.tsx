import Link from "next/link";
import Image from "next/image";
export default function MiddleSection() {
  const label = [
    {
      name: "스포츠(헤외정)",
      href: "/categories/sportsspecial",
    },
    {
      name: "스포츠(국내정)",
      href: "/categories/sports-live-kor",
    },
    {
      name: "슬롯게임)",
      href: "/categories/slot",
    },
    {
      name: "미니게임",
      href: "/categories/minigame",
    },
    {
      name: "라이브카지노",
      href: "/categories/livecasino",
    },
    {
      name: "토큰",
      href: "/categories/tokengame",
    },
  ];

  return (
    <>
      {" "}
      <div className="flex flex-row gap-2 bg-neutral-800 p-2">
        <Image
          src={"/rightarrow.png"}
          width={20}
          height={20}
          alt="rightarrow"
        />
        <p>지금 시작하기</p>
      </div>
      <div className="middlesection-bg  bg-black flex flex-col  w-full p-4">
        <div className="flex flex-col items-center gap-2 mb-5">
          <p className="nav-btn-primary text-2xl sm:text-6xl font-black">
            SPO888 TOP GAMES
          </p>
          <p className="text-lg sm:text-4xl font-black">인기 게임</p>
          <p className="text-sm text-neutral-400">
            SPOB88에서 가장 인기 많은 최고의 게임을 즐겨보세요!{" "}
          </p>
        </div>
        <div className="flex flex-row gap-10 justify-center pr-50">
          <div className="w-full lg:w-fit grid grid-cols-2 lg:grid-cols-1 gap-4 bg-neutral-800 p-4 rounded-sm">
            {label.map((labels, index) => (
              <Link
                key={index}
                href={labels.href}
                className="p-2  lg:w-30 text-center text-sm outline outline-amber-500 rounded-sm hover:bg-amber-500 hover:text-black"
              >
                {labels.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-col">
            <div className="flex flex-row gap-2 nav-btn-primary pb-5">
              {" "}
              <p className="text-4xl font-black">지금 시작하기</p>
              <Image
                src={"/rightarrow.png"}
                width={40}
                height={40}
                alt="rightarrow"
              />
            </div>

            <p className="text-2xl font-black">스포츠(해외형)</p>
            <p>다양한 베팅타입을 제공하는 해외형 스포츠!</p>
            <p>누구나 인정하는 해외 배팅사를 지금 이용하세요</p>
          </div>
        </div>
      </div>
    </>
  );
}
