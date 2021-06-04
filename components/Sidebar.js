import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  const [session, login] = useSession();
  return (
    <div className="p-2 mt-5 xl:min-w-[300px]">
      <SidebarRow src={session?.user?.image} title={session?.user?.name} />
      <SidebarRow Icon={UserIcon} title="friend" />
      <SidebarRow Icon={UserGroupIcon} title="Group" />
      <SidebarRow Icon={ShoppingCartIcon} title="Market Place" />
      <SidebarRow Icon={DesktopComputerIcon} title="friend" />
      <SidebarRow Icon={CalendarIcon} title="Watch" />
      <SidebarRow Icon={ClockIcon} title="Events" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
};

export default Sidebar;
