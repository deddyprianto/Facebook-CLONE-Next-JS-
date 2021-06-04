import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import HeaderIcons from "./HeaderIcons";
import { signOut } from "next-auth/client";
import { useSession } from "next-auth/client";
const Header = () => {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center lg:space-x-2 md:space-x-2">
        <Image src="/img/logo.png" width="50" height="50" layout="fixed" />
        <div className="hidden lg:flex items-center rounded-full bg-gray-100 ">
          <SearchIcon className="lg:h-5 md:h-5" />
          <input
            className="h-7 flex-grow px-5 bg-gray-100  rounded-full focus:outline-none truncate"
            type="text"
            placeholder="Cari di DeyNoteBook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-3 md:space-x-2 lg:space-x-24">
          <HeaderIcons active Icon={HomeIcon} />
          <HeaderIcons Icon={FlagIcon} />
          <HeaderIcons Icon={PlayIcon} />
          <HeaderIcons Icon={ShoppingCartIcon} />
          <HeaderIcons Icon={UserGroupIcon} />
          <HeaderIcons Icon={UserCircleIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">
          {session?.user?.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
