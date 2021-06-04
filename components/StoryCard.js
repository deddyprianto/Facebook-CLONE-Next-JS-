import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-36 w-[400px] cursor-pointer p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse lg:h-40 lg:w-24">
      <Image
        className="absolute rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 lg:rounded-3xl rounded-xl"
        src={src}
        layout="fill"
      />
      <p className="absolute bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
