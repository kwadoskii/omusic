import Head from "next/head";
import BigCard from "../components/BigCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import TopCarts from "../components/TopCarts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Octoba Challenge</title>
      </Head>

      <div className="bg-[#1D2123] h-screen p-5 py-10 ">
        <div className="max-w-[90rem] mx-auto flex">
          <Sidebar />

          {/* Search bar */}
          <div className="grid grid-cols-12 flex-1 px-5 h-full gap-x-5">
            <div className="col-span-full">
              <SearchBar />
            </div>

            <div className="col-span-8 py-16">
              <BigCard />
            </div>

            <div className="col-span-4 py-16">
              <h3 className="text-2xl font-bold text-white">Top charts</h3>

              {[1, 2, 3, 5].map((i) => (
                <TopCarts key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
