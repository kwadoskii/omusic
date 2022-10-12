import Image from "next/image";
import Heart from "../assets/Heart";

export default function TopCarts({}) {
  return (
    <div className="rounded-2xl p-4 px-5 bg-[#1A1E1F] my-4 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:shadow-white/5 duration-[350] transition-all ease-in">
      <div className="flex items-center">
        <div className="flex flex-1 gap-4">
          <div className="relative h-[4.2rem] w-[4.2rem] rounded-md">
            <Image src="/rect.png" layout="fill" />
          </div>

          <div className="flex flex-col justify-evenly text-white font-thin">
            <p className="text-lg">Golden age of 80s</p>
            <p className="text-sm text-white/50">Sean swadder</p>
            <p className="text-sm">2:34:45</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-9 w-9 flex items-center justify-center border border-white/[0.11] rounded-full p-2.5 cursor-pointer active:scale-75 active:shadow-lg active:shadow-white/10 duration-300 ease-linear transition-all group">
            <Heart className="group-hover:fill-secondary transition-all duration-500 ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
}
