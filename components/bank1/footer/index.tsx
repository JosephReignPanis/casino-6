import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 text-zinc-600 font-semibold flex flex-col justify-center gap-2 items-center p-8 bg-test ">
        <Image
          src={"/f_partners.png"}
          width={1020}
          height={1000}
          alt="footer"
        />
        <div className="grid grid-cols-2 max-w-screen-lg py-4">
          <div className="grid-cols-1">
            <Image
              src={"/bank_logo.png"}
              width={250}
              height={100}
              alt="footer"
            />{" "}
            <p className="text-sm py-4">
              Our website is a company operated under a formal license.You can
              enjoy a variety of games online, and we provide the best quality
              and best mobile version.It also offers high odds and introduces
              new events every day. Start enjoying thousands of games today,
              including sports games, live casino slot games, mini games, and
              virtual games!
            </p>
          </div>{" "}
          <div className="grid-cols-1">
            <div className="grid grid-cols-4 gap-2">
              <Image src={"/game.png"} width={130} height={50} alt="game" />{" "}
              <Image src={"/game.png"} width={130} height={50} alt="game" />{" "}
              <Image src={"/game.png"} width={130} height={50} alt="game" />{" "}
              <Image src={"/game.png"} width={130} height={50} alt="game" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
