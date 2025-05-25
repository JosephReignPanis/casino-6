"use client";

import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MiddleContent from "@/components/bank1/middlecontent";
import BottomSection from "@/components/bottomsection/page";
import MiddleSection from "@/components/middlesection/page";
import TopSection from "@/components/topsection/page";

export default function Home() {
  return (
    <>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </>
  );
}
