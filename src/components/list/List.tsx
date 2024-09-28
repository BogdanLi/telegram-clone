import ChatList from "./chatList/ChatList";
import UserInfo from "./userInfo/UserInfo";

const List = () => {
  return (
    <div className="col-span-2 space-y-4 border-e border-e-indigo-100 p-4">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
