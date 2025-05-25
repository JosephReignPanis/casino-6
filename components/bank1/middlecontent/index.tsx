import Image from "next/image";
export default function MiddleContent() {
  const notices = [
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-52 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      {" "}
      <div className="block lg:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>
      <div className="col-span-3 hidden lg:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Image
              src="/placeholder1.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
              <p>공지사항</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />
          </div>

          {/* Events Section */}
          <div className="col-span-1">
            <Image
              src="/placeholder2.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
              <p>이벤트</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
          </div>
        </div>{" "}
        <div className="grid grid-cols-5 my-4 gap-2 w-full">
          <Image
            src={"/banner_games/banner_g1.png"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/banner_games/banner_g2.png"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/banner_games/banner_g3.png"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/banner_games/banner_g4.png"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/banner_games/banner_g5.png"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
