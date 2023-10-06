import { appleIcon } from "@/assets";

const AppStoreButton = () => {
  return (
    <button className="flex h-[64px] w-[206px] items-center gap-4 rounded-[10px] bg-black px-6 text-white">
      <div>
        <img src={appleIcon} alt="App store icon" />
      </div>
      <div className="flex flex-col items-start">
        <span className="leading-2 font-sarala text-[8px]">
          Download on the
        </span>
        <span className="font-sarala leading-4">App Store</span>
      </div>
    </button>
  );
};

export default AppStoreButton;
