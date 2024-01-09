"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestPhotos from "@/components/LatestPhotos";
import LatestPlayed from "@/components/LatestPlayed";
import LatestPost from "@/components/LatestPost";
import LatestVideo from "@/components/LatestVideo";
import Location from "@/components/Location";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="">
      {loading ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500"></div>
        </div>
      ) : (
        <>
          <Header />
          <div className="p-3 flex flex-col gap-3 max-w-2xl w-full mx-auto">
            <Portfolio />
            <LatestPost />
            <LatestPhotos />
            <LatestVideo />
            <LatestPlayed />
            <Testimonials />
            <Location />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
