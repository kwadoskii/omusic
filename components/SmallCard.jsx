import Image from "next/image";

export const SmallCard = ({}) => {
  return (
    <div className="flex flex-col cursor-pointer gap-1 opacity-80 hover:opacity-100 transition-all ease-in duration-300 hover:scale-[1.02] py-2 first:pl-2 last:pr-2">
      <div className="relative rounded-lg h-40 w-40">
        <Image src="/album1.png" layout="fill" />
      </div>

      <div className="flex flex-col text-white/50 font-thin text-sm pl-1.5 opacity-100">
        <p className="text-white/80">Life in a bubble</p>
        <p className="-mt-1">Mang Ling</p>
      </div>
    </div>
  );
};
