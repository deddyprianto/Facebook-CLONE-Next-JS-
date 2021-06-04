import StoryCard from "./StoryCard";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { PlusCircleIcon } from "@heroicons/react/outline";
const stories = [
  {
    name: "Selva",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    profile: "https://avatars.githubusercontent.com/u/8461930?v=4",
  },
  {
    name: "Christopher Dro",
    src: "https://import.viva64.com/docx/blog/0710_DevOps_vs_DevSecOps/image2.png",
    profile: "https://avatars.githubusercontent.com/u/12432685?v=4",
  },
  {
    name: "John Agan",
    src: "https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943",
    profile: "https://avatars.githubusercontent.com/u/35968?v=4",
  },
  {
    name: "Nicho",
    src: "https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg",
    profile: "https://avatars.githubusercontent.com/u/12416570?v=4",
  },
];
const Stories = () => {
  const [session] = useSession();
  return (
    <div className="flex justify-center space-x-3 ml-auto overflow-y-auto scrollbar-hide relative">
      <div className="relative flex flex-col items-center h-36 w-32 cursor-pointer transition duration-200 transform ease-in hover:scale-105 rounded-2xl hover:animate-pulse bg-gray-500 ml-28 lg:ml-0  lg:h-40 lg:w-[100px]">
        <Image
          src={session?.user?.image}
          width={100}
          height={100}
          layout="fixed"
          objectFit="cover"
          className="self-start rounded-2xl"
        />
        <PlusCircleIcon className="w-10 absolute bottom-9 text-white bg-blue-500 rounded-full" />
        <p className="absolute bottom-4 w-5/6 text-sm font-bold truncate text-white">
          Tambah Status
        </p>
      </div>
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
