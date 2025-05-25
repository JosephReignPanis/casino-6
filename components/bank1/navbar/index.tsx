import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const primaryButtons = [
    {
      label: "입금신청",
      path: "/navigation/charge",
      src: "/icon_nav/icon_nav1.png",
    },
    {
      label: "출금신청",
      path: "/navigation/exchange",
      src: "/icon_nav/icon_nav2.png",
    },
    {
      label: "경기결과",
      path: "/navigation/result",
      src: "/icon_nav/icon_nav3.png",
    },
    {
      label: "베팅내역",
      path: "/navigation/betlist",
      src: "/icon_nav/icon_nav4.png",
    },
    {
      label: "공지사항",
      path: "/navigation/notice",
      src: "/icon_nav/icon_nav5.png",
    },
    {
      label: "이벤트",
      path: "/navigation/event",
      src: "/icon_nav/icon_nav6.png",
    },
    {
      label: "쪽지함",
      path: "/navigation/message",
      src: "/icon_nav/icon_nav7.png",
    },
    {
      label: "고객센터",
      path: "/navigation/help",
      src: "/icon_nav/icon_nav8.png",
    },
    {
      label: "마이페이",
      path: "/navigation/mypage",
      src: "/icon_nav/icon_nav9.png",
    },
    {
      label: "출석체크",
      path: "/navigation/attendance",
      src: "/icon_nav/icon_nav10.png",
    },
  ];

  const secondaryButtons = [
    { label: "스포츠 (해외형)", path: "/categories/sports" },
    { label: "스포츠 (국내형)", path: "/categories/sportscross" },
    { label: "스페셜", path: "/categories/sportsspecial" },
    { label: "인플레이", path: "/inplay" },
    { label: "실시간", path: "/categories/sports-live-kor" },
    { label: "미니게임", path: "/categories/minigame" },
    { label: "벳365", path: "/categories/bet365" },
    { label: "토큰게임", path: "/categories/tokengame" },
    { label: "카지노", path: "/categories/livecasino" },
    { label: "슬롯", path: "/categories/slot" },
  ];

  return (
    <>
      <div className="hidden lg:block">
        <nav className="bg-[#171719] flex justify-between p-2">
          <div className="flex flex-row gap-4 items-center">
            {primaryButtons.map(({ label, path, src }, index) => (
              <Link
                key={index}
                href={path}
                className="nav-btn-primary flex flex-row gap-1 items-center"
              >
                <Image
                  src={src}
                  width={10}
                  height={10}
                  className="w-4 h-4"
                  alt="icon"
                />
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Link href="/signin" className="nav-btn-logout">
              Sign in
            </Link>
            <Link href="/logout" className="nav-btn-logout">
              Register
            </Link>
          </div>
        </nav>
        <hr className="hr-gradient" />
        <nav className="navgradient flex justify-between items-center text-lg font-bold p-2">
          <Link
            href={"/"}
            className="flex flex-row items-center font-extrabold gap-2"
          >
            <Image
              src={"/bank_logo.png"}
              width={150}
              height={150}
              alt="webLogo"
              className="pr-4"
            />
          </Link>{" "}
          <ul className="flex flex-row gap-12">
            {secondaryButtons.map(({ label, path }, index) => (
              <Link key={index} href={path} className="nav-btn-secondary">
                {label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
