import { useContext } from "react";
import { MyContext } from "./Context";


function NavBar() {
  const { name } = useContext(MyContext);

  return (
    <div className="flex items-center justify-between w-[full] bg-[#E9FFF8] rounded-[10px] px-6 py-2 shadow-lg">
      <h1 className="text-2xl font-bold">{`Good morning ${name} 👋🏻`}</h1>
      <div className="flex gap-8">
        <img className="w-10 cursor-pointer" src="src\assets\user-svgrepo-com.svg" alt="" />
        <img className="w-10 cursor-pointer" src="src\assets\config-svgrepo-com.svg" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
