import {
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

const items = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  message: `This is a message from Person ${i + 1}`,
}));

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
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
        <button onClick={() => setAddMode(!addMode)}>
          {addMode ? (
            <MinusIcon color="white" width={32} height={32} />
          ) : (
            <PlusIcon color="white" width={32} height={32} />
          )}
        </button>
      </div>
      <div className="overflow-y-scroll scrollbar h-[calc(100vh-200px)]">
        {items.map((item) => (
          <div
            className="border-b border-b-indigo-100 flex px-2 py-4 items-center gap-4"
            key={item.id}
          >
            <div className="aspect-square w-12 bg-indigo-50 rounded-full"></div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
