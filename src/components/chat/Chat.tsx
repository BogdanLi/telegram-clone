import { CameraIcon, EllipsisHorizontalIcon, FaceSmileIcon, MicrophoneIcon, PencilSquareIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/16/solid";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className='col-span-4 flex flex-col justify-between h-full'>
      <div className='p-4 flex justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='w-12 aspect-square rounded-full bg-indigo-100' />
          <h1 className='text-xl font-bold'>John Doe</h1>
        </div>
        <div className='flex gap-2'>
          <button>
            <EllipsisHorizontalIcon color='white' width={40} height={40} />
          </button>
          <button>
            <VideoCameraIcon color='white' width={40} height={40} />
          </button>
          <button>
            <PencilSquareIcon color='white' width={40} height={40} />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start h-[calc(100vh-200px)] w-full px-4 gap-8 overflow-y-scroll scrollbar'>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4 flex-row-reverse self-end'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4 flex-row-reverse self-end'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4 flex-row-reverse self-end'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='aspect-square w-12 rounded-full bg-indigo-100' />
          <div className='text-white bg-indigo-500 rounded-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi.</div>
        </div>
      </div>
      <div className='px-4 flex py-2 gap-4 relative'>
        <div className='flex gap-4'>
          <button>
            <PhotoIcon color='white' width={24} height={24} />
          </button>
          <button>
            <CameraIcon color='white' width={24} height={24} />
          </button>
          <button>
            <MicrophoneIcon color='white' width={24} height={24} />
          </button>
        </div>
        <input type='text' className='px-2 outline-none grow bg-black bg-opacity-25 py-2 rounded-lg' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setOpenEmoji(!openEmoji)}>
          <FaceSmileIcon color='white' width={24} height={24} />
        </button>
        <div className='bottom-14 absolute right-0'>
          <EmojiPicker onEmojiClick={(emoji) => setText(text + emoji.emoji)} open={openEmoji} />
        </div>
        <button className='text-white bg-indigo-500 rounded-lg px-4'>Send</button>
      </div>
    </div>
  );
};

export default Chat;
