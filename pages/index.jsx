import Head from "next/head";
import BigCard from "../components/BigCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { SmallCard } from "../components/SmallCard";
import TopCarts from "../components/TopCarts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Octoba Challenge</title>
      </Head>

      <div className="bg-[#1D2123] min-h-screen p-5 py-10 ">
        <div className="max-w-[90rem] mx-auto flex">
          <Sidebar />

          {/* Search bar */}
          <div className="grid grid-cols-main flex-1 px-5 h-full gap-x-5">
            <div className="col-span-full">
              <SearchBar />
            </div>

            <div className="col-span-8 py-16 pb-10">
              <BigCard />
            </div>

            <div className="col-span-5 py-16 pb-10">
              <Header title="Top charts" />

              {[1, 2, 3].map((i) => (
                <TopCarts key={i} />
              ))}
            </div>

            <div className="col-span-full">
              <Header title="New releases." />

              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <SmallCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
