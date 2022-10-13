import Image from "next/image";
import likeIcon from "../assets/like.svg";
import peopleIcon from "../assets/people.svg";

export default function BigCard() {
  return (
    <div className="bg-[#609EAF] rounded-2xl md:rounded-[2.5rem] text-white py-7 md:p-10 px-8 md:px-14 h-[50vh;] md:h-[48vh] overflow-hidden relative">
      <div className="absolute -top-44 -right-40 md:right-0 md:top-0 h-full w-[28rem] md:w-[32rem] md:rotate-0 rotate-[85deg]">
        <Image src="/images/decor.svg" layout="fill" />
      </div>

      <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1/2 h-full">
        <Image src="/images/singer.png" layout="fill" />
      </div>

      <div className="flex h-full">
        <div className="flex flex-1 flex-col justify-between">
          <p className="font-thin text-sm md:text-lg">Currated playlist</p>

          <div className="flex-1 flex flex-col justify-end md:justify-center">
            <h3 className="font-semibold text-3xl md:font-bold md:text-4xl">R & B Hits</h3>
            <p className="font-thin mt-2 text-sm md:text-lg">
              All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so
              much more
            </p>
          </div>

          <div className="flex fl gap-3 items-center mt-6 md:mt-0 justify-evenly md:justify-start w-5/6">
            <div className="relative h-8 w-20">
              <Image src={peopleIcon} layout="fill" />
            </div>

            <div className="relative h-4 w-4 items-center">
              <Image src={likeIcon} layout="fill" />
            </div>

            <p className="font-thin text-lg">33k Likes</p>
          </div>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
    </div>
  );
}
