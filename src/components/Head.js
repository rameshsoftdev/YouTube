import Hamberger from "../assets/images/hamberger-icon.png";
import YouTubeLogo from "../assets/images/Youtube-logo.png";
import UserIcon from "../assets/images/user-icon-thumb.png";
import { toggleMenu } from "./utils/store/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    const dispatch = useDispatch();
  function handleToggleMenu() {
    dispatch(toggleMenu());
  }
  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
          <img
            onClick={() => handleToggleMenu()}
            className="h-8 cursor-pointer hover:bg-gray-200 hover:rounded-full p-1"
            alt="menu"
            src={Hamberger}
          />
          <a href="/">
            <img className="h-8 mx-2" alt="youtube-logo" src={YouTubeLogo} />
          </a>
        </div>
        <div className="col-span-10 px-10">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        <div className="col-span-1">
          <img className="h-8" alt="user" src={UserIcon} />
        </div>
      </div>
    </>
  );
};
export default Head;
