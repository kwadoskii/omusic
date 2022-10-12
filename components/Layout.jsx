import Head from "next/head";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Octoba Challenge</title>
      </Head>

      <div className="bg-[#1D2123] min-h-screen md:p-5 pt-5 md:py-10">
        <div className="max-w-[90rem] mx-auto flex">
          <Sidebar />

          {/* Search bar */}
          <div className="grid grid-cols-main flex-1 px-5 h-full gap-x-5">
            <div className="col-span-full mb-1">
              <SearchBar />
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
