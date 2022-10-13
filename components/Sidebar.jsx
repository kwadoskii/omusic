import Image from "next/image";
import Home from "../assets/Home";
import logo from "../assets/logo.svg";
import Playlist from "../assets/Playlist";
import Profile from "../assets/Profile";
import Logout from "../assets/Logout";
import Radio from "../assets/Radio";
import Videos from "../assets/Videos";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="h-[60vh] w-[52px] m-5 hidden md:block">
      <div className="h-10 w-full relative mx-auto">
        <Image src={logo} layout="fill" />
      </div>

      <div className="flex gap-5 bg-dark-alt rounded-full flex-col items-center justify-center py-5 px-8 mt-12">
        <div className="relative h-12 w-12 cursor-pointer group " onClick={() => router.push("/")}>
          <Home
            className={`group-hover:fill-secondary group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-200 ease-in opacity-25 ${
              ["/", "/chart"].some((path) => path === router.pathname) //used for home and chart
                ? "fill-secondary opacity-100"
                : ""
            }`}
          />
        </div>

        <div className="h-12 w-7 cursor-pointer group " onClick={() => router.push("/playlist")}>
          <Playlist
            className={`group-hover:fill-secondary group-hover:scale-[1.2] group-hover:opacity-100 transition-all duration-300 ease-in opacity-25 ${
              router.pathname === "/playlist" ? "fill-secondary opacity-100" : ""
            }`}
          />
        </div>

        <div className="h-12 w-7 cursor-pointer group ">
          <Radio className="group-hover:fill-secondary group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-200 ease-in opacity-25" />
        </div>

        <div className="h-12 w-7 cursor-pointer group ">
          <Videos className="group-hover:fill-secondary group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-200 ease-in opacity-25" />
        </div>
      </div>

      <div className="flex gap-5 bg-dark-alt rounded-full flex-col items-center justify-center py-5 px-8 mt-5">
        <div className="h-12 w-7 cursor-pointer group">
          <Profile className="group-hover:fill-secondary group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-200 ease-in opacity-25" />
        </div>
        <div className="h-12 w-7 cursor-pointer group">
          <Logout className="group-hover:fill-secondary group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-200 ease-in opacity-25" />
        </div>
      </div>
    </div>
  );
}
