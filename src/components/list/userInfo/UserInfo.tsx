import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  VideoCameraIcon,
} from "@heroicons/react/16/solid";

const UserInfo = () => {
  return (
    <div className="flex gap-4 items-center justify-between pe-4">
      <div className="flex gap-4 items-center">
        <div className="w-12 rounded-full aspect-square bg-indigo-100"></div>
        <h1 className="text-xl font-bold">John Doe</h1>
      </div>
      <div className="flex gap-2">
        <button>
          <EllipsisHorizontalIcon color="white" width={24} height={24} />
        </button>
        <button>
          <VideoCameraIcon color="white" width={24} height={24} />
        </button>
        <button>
          <PencilSquareIcon color="white" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
