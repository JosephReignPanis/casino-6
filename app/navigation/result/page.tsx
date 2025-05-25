"use client";
import Image from "next/image";
const headerlabel = ["경기일시", "종목", "승[홈]", "무", "패[원정]", "점수"];
export default function Home() {
  return (
    <>
      <div className="col-span-8 gap-1">
        <p className="nav-btn-primary text-4xl font-black text-center pb-2">
          경기 결과
        </p>
        <div className="overflow-x-auto max-w-full">
          <div className="min-w-[800px]">
            {" "}
            {/* Set a minimum width here */}
            <table className="w-full bg-neutral-900 table-auto">
              <thead>
                <tr>
                  {headerlabel.map((headerlabels, index) => (
                    <th key={index} className="text-amber-400 align-middle p-2">
                      {headerlabels}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan={6} className="p-1 bg-neutral-800">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/icon_sidebar/icon_1.png"
                        width={20}
                        height={20}
                        alt="test"
                      />
                      <span className="text-sm">미국 MLS Next 프로</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-2 border-neutral-800">
                  <td className="p-1 text-center align-middle text-sm">
                    03/27 11:30
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon_sidebar/icon_1.png"
                        width={20}
                        height={20}
                        alt="test"
                      />
                    </div>
                  </td>
                  <td className="p-1 text-center align-middle text-sm">
                    Portland Timbers II
                  </td>
                  <td className="p-1 text-center align-middle bg-yellow-400 text-black text-sm">
                    VS
                  </td>
                  <td className="p-1 text-center align-middle text-sm">
                    The Town
                  </td>
                  <td className="p-1 text-center align-middle text-sm">1:1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
