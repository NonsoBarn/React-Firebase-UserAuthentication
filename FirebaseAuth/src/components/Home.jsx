import { useUserAuth } from "./context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <div className="flex flex-col h-screen  justify-center items-center pb-40 ">
      <div className="text-center max-w-lg p-0">
        <h3 className="mb-1 text-md font-bold text-2xl tracking-tight text-gray-900">
          Hello,
        </h3>
        <h4 className="font-semibold"> {user && user.email}</h4>
        <p className="text-1xl mb-3  text-gray-900 leading-5 tracking-tight ">
          Welcome to the Home page.
        </p>
        <button
          onClick={handleLogOut}
          className="w-40  text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
