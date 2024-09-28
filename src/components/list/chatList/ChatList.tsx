import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";

const ChatList = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="relative grow">
          <MagnifyingGlassIcon
            className="absolute start-2 top-2"
            color="white"
            width={24}
            height={24}
          />
          <input
            className="w-full pl-12 bg-black bg-opacity-25 py-2 rounded-lg"
            placeholder="Search"
            type="text"
          />
        </div>
        <button>
          <PlusIcon color="white" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default ChatList;
