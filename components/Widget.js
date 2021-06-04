import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "bagas",
  },
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "dimas",
  },
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "arman",
  },
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "deddy",
  },
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "sarah",
  },
  {
    src: "https://img.icons8.com/pastel-glyph/2x/user-male.png",
    name: "melati",
  },
];
const Widget = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widget;
