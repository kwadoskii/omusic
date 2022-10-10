import Image from "next/image";
import Home from "../assets/Home";
import logo from "../assets/logo.svg";
import Playlist from "../assets/Playlist";
import Profile from "../assets/Profile";
import Logout from "../assets/Logout";
import Radio from "../assets/Radio";
import Videos from "../assets/Videos";

export default function Sidebar() {
  return (
    <div className="h-[60vh] w-[52px] m-5">
      <div className="h-10 w-full relative mx-auto">
        <Image src={logo} layout="fill" />
      </div>

      <div className="flex gap-5 bg-dark-alt rounded-full flex-col items-center justify-center py-5 px-8 mt-12">
        <div className="relative h-12 w-12 cursor-pointer group ">
          <Home className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear" />
        </div>

        <div className="h-12 w-7 cursor-pointer group ">
          <Playlist className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear opacity-25" />
        </div>

        <div className="h-12 w-7 cursor-pointer group ">
          <Radio className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear opacity-25" />
        </div>

        <div className="h-12 w-7 cursor-pointer group ">
          <Videos className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear opacity-25" />
        </div>
      </div>

      <div className="flex gap-5 bg-dark-alt rounded-full flex-col items-center justify-center py-5 px-8 mt-5">
        <div className="h-12 w-7 cursor-pointer group">
          <Profile className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear opacity-25" />
        </div>
        <div className="h-12 w-7 cursor-pointer group">
          <Logout className="group-hover:fill-secondary group-hover:opacity-100 transition-all duration-200 ease-linear opacity-25" />
        </div>
      </div>
    </div>
  );
}
