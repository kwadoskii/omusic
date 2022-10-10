import Image from "next/image";
import likeIcon from "../assets/like.svg";
import peopleIcon from "../assets/people.svg";

export default function BigCard() {
  return (
    <div className="bg-[#609EAF] rounded-[2.5rem] text-white p-10 px-14 h-[48vh]">
      <div className="flex h-full">
        <div className="flex flex-1 flex-col justify-between">
          <p className="font-thin text-lg">Currated playlist</p>

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-bold text-4xl">R & B Hits</h3>
            <p className="font-thin mt-2 text-lg">
              All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so
              much more
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="relative h-8 w-20">
              <Image src={peopleIcon} layout="fill" />
            </div>

            <div className="relative h-4 w-4 items-center">
              <Image src={likeIcon} layout="fill" />
            </div>

            <p className="font-thin text-lg">33k Likes</p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
