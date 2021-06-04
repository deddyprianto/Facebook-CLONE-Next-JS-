import { useRef, useState } from "react";
import { useSession } from "next-auth/client";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState();
  const [session] = useSession();
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              // when upload complete
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImageURL: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
  };
  // trigger value input image
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={30}
          height={30}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none truncate"
            type="text"
            ref={inputRef}
            placeholder={`Post sesuatu, ${session.user.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
        {/* set image child */}
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-105 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} className="h-10 object-contain" alt="" />
            <p className="text-xs text-red-500 text-center">Hapus</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-red-500" />
          <p className="text-sm sm:text-sm xl:text-base">Live Video</p>
        </div>
        {/* CAMERA ICON */}
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-sm sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            onChange={addImageToPost}
            hidden
            ref={filePickerRef}
          />
        </div>
        {/* end Camera Icon */}

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-sm sm:text-sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
