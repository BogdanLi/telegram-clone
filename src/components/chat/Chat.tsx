import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  VideoCameraIcon,
} from "@heroicons/react/16/solid";

const Chat = () => {
  return (
    <div className="col-span-4">
      <div className="p-4 flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="w-12 aspect-square rounded-full bg-indigo-100" />
          <h1 className="text-xl font-bold">John Doe</h1>
        </div>
        <div className="flex gap-2">
          <button>
            <EllipsisHorizontalIcon color="white" width={40} height={40} />
          </button>
          <button>
            <VideoCameraIcon color="white" width={40} height={40} />
          </button>
          <button>
            <PencilSquareIcon color="white" width={40} height={40} />
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Chat;
