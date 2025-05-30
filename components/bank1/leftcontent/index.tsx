import Image from "next/image";
import Tabs from "@/components/bank1/tabs";
import Link from "next/link";

export default function LeftContent() {
  const primaryButtons = [
    { label: "충전", path: "/navigation/charge" },
    { label: "환전", path: "/navigation/exchange" },
    { label: "고객센터", path: "/navigation/help" },
    { label: "쪽지함", path: "/navigation/message" },
  ];
  const secondButtons = [
    { label: "슬롯", path: "/categories/slot" },
    { label: "카지노", path: "/categories/livecasino" },
  ];
  const categoryButtons = [
    [
      { label: "해외형", path: "/categories/sports" },
      { label: "국내형", path: "/categories/sportscross" },
      { label: "스페셜", path: "/categories/sportsspecial" },
    ],
    [
      { label: "인플레이", path: "/inplay" },
      { label: "실시간", path: "/categories/sports-live-kor" },
      { label: "미니게임", path: "/categories/minigame" },
    ],
    [
      { label: "벳365", path: "/categories/bet365" },
      { label: "토큰게임", path: "/categories/tokengame" },
      { label: "카지노", path: "/categories/livecasino" },
    ],
    [
      { label: "슬롯", path: "/categories/slot" },
      { label: "경기결과", path: "/navigation/result" },
      { label: "베팅내역", path: "/navigation/betlist" },
    ],
    [
      { label: "공지사항", path: "/navigation/notice" },
      { label: "이벤트", path: "/navigation/event" },
      { label: "개인정산", path: "/categories/payback" },
    ],
    [
      { label: "쪽지함", path: "/navigation/message" },
      { label: "고객센터", path: "/navigation/help" },
      { label: "마이페이지", path: "/navigation/mypage" },
    ],
    [
      { label: "출석체크", path: "/navigation/attendance" },
      { label: "입금신청", path: "/navigation/charge" },
      { label: "출금신청", path: "/navigation/exchange" },
    ],
  ];

  const leagues = [
    {
      icon: "/icon_sidebar/icon_11.png",
      name: "인기리그",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_12.png",
      name: "일글래드 프리미어리그",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_13.png",
      name: "미국 NBA 농구",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_14.png",
      name: "대한민국 KBL 농구",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_15.png",
      name: "일글래드 프리미어리그",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_16.png",
      name: "미국 NBA 농구",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_17.png",
      name: "대한민국 KBL 농구",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_18.png",
      name: "일글래드 프리미어리그",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_19.png",
      name: "미국 NBA 농구",
      href: "/categories/sports-live-kor",
    },
    {
      icon: "/icon_sidebar/icon_20.png",
      name: "대한민국 KBL 농구",
      href: "/categories/sports-live-kor",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-1 pb-2">
        {primaryButtons.map(({ label, path }, index) => (
          <Link key={index} href={path} className="">
            <button className="btn-gold-gradient p-2 text-sm w-full hover:[box-shadow:inset_0_0_8px_#f99e0b]">
              {label}
            </button>
          </Link>
        ))}
      </div>
      {categoryButtons.map((group, idx) => (
        <div key={idx} className="bg-neutral-900  grid grid-cols-3 ">
          {group.map(({ label, path }, index) => (
            <Link key={index} href={path} className="w-full ">
              <button className="w-full text-sm p-2 border border-neutral-700/50 text-neutral-300 bg-neutral-900  hover:[box-shadow:inset_0_0_8px_#f59e0b]">
                {label}
              </button>
            </Link>
          ))}
        </div>
      ))}
      <div className="grid grid-cols-2 gap-1 my-2 ">
        {secondButtons.map(({ label, path }, index) => (
          <Link key={index} href={path} className="">
            <button className="btn-gold-gradient p-2 text-sm w-full hover:[box-shadow:inset_0_0_8px_#f59e0b]">
              {label}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex flex-col my-2 gap-2 p-2 bg-neutral-900">
        <div className="flex flex-row">
          <input
            type="text"
            className="bg-neutral-800 w-full text-xs font-bold p-2"
            id="searchbar"
            placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
          />
          <button className="bg-yellow-800 p-2">
            <Image
              src={"/search.png"}
              width={20}
              height={20}
              alt="search button"
            />
          </button>{" "}
        </div>{" "}
        <div className="flex flex-row">
          <input
            type="text"
            className="bg-neutral-800 w-full text-xs font-bold p-2"
            id="searchbar"
            placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
          />
          <button className="bg-yellow-800 p-2">
            <Image
              src={"/search.png"}
              width={20}
              height={20}
              alt="search button"
            />
          </button>
        </div>
      </div>
      <Tabs />
      <div className="flex flex-col my-2">
        {leagues.map((leaguesinfo, index) => (
          <Link
            key={index}
            href={leaguesinfo.href}
            className="flex flex-row gap-2 p-2 bg-zinc-900 align-middle items-center hover:[box-shadow:inset_0_0_8px_#f59e0b]"
          >
            <Image src={leaguesinfo.icon} width={20} height={20} alt="testst" />
            <div>{leaguesinfo.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
