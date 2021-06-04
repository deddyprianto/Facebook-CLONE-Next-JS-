import Image from "next/image";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/solid";
const Post = ({ name, message, email, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col">
      <div className="lg:p-5 md:p-5 md:mt-5 p-3 bg-white lg:mt-5 mt-2 rounded-t-2xl shadow-sm">
        {/* post options */}
        <div className="flex items-center space-x-2">
          <img
            src={image}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-2 ml-1 lg:pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative lg:h-60 h-40 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* footer posts */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
