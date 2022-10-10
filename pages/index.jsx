import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

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
          <div className="grid grid-cols-12 flex-1">
            <div className="col-span-4">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
