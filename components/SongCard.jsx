import Image from "next/image";
import Heart2 from "../assets/Heart2";

export default function SongCard({}) {
  return (
    <div className="w-full bg-[#33373B]/[0.37] my-3 rounded-2xl p-3 flex backdrop-blur-sm pr-8 items-center">
      <div className="flex gap-5 items-center justify-start">
        <div className="relative h-10 w-10 ">
          <Image src="/shoe.png" layout="fill" className="rounded-md" />
        </div>
        <div className="relative h-5 w-5">
          <Heart2 className="" />
        </div>
      </div>

      <div className="flex flex-1 font-thin text-sm justify-around">
        <p>Let me love you ~ Krisx</p>
        <p>Single</p>
        <p>4:17</p>
      </div>

      <div className="relative h-5 w-5">
        <Image src="/images/threeDots.svg" layout="fill" />
      </div>
    </div>
  );
}
