import Image from "next/image";
import Layout from "../components/Layout";
import SongCard from "../components/SongCard";

export default function ChartPage() {
  return (
    <Layout background>
      <div className="col-span-full text-white py-5 md:py-16">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="relative h-[284px] w-[284px]  ">
              <Image src="/shoe.png" layout="fill" className="rounded-[2rem]" />
            </div>
          </div>
          <div className="col-span-3 mt-auto flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-[#A4C7C6] text-4xl font-bold">Tomorrow’s tunes</h3>
              <p className="w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis
              </p>
              <p>64 songs ~ 16 hrs+</p>
            </div>

            <div className="flex gap-4">
              <div className="p-3 py-0 items-center justify-center backdrop-blur-sm flex gap-2.5 rounded-[2rem] bg-white/10 font-thin text-base cursor-pointer">
                <div className="relative h-5 w-5">
                  <Image src="/images/play.svg" layout="fill" />
                </div>
                <p>Play all</p>
              </div>
              <div className="p-4 py-2.5 items-center backdrop-blur-sm flex gap-4 rounded-[2rem] bg-white/10 font-thin text-base cursor-pointer">
                <div className="relative h-5 w-5">
                  <Image src="/images/addCollection.svg" layout="fill" />
                </div>
                <p>Add to collection</p>
              </div>
              <div className="p-3 items-center backdrop-blur-sm flex rounded-full bg-white/10 font-thin text-base cursor-pointer">
                <div className="relative h-5 w-5">
                  <Image src="/images/redHeart.svg" layout="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((song, i) => (
            <SongCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
