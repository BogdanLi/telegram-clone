import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <main className="back h-screen grid place-items-center p-12 text-white">
      <div className="grid grid-cols-8 w-full h-full rounded-2xl glass">
        <List />
        <Chat />
        <Detail />
      </div>
    </main>
  );
};

export default App;
