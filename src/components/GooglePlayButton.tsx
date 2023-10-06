import { googlePlayIcon, googlePlayText } from "@/assets";

const GooglePlayButton = () => {
  return (
    <button className="flex h-[64px] w-[206px] items-center gap-4 rounded-[10px] bg-black px-6">
      <div>
        <img src={googlePlayIcon} alt="Google Play icon" />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-productSans text-[8px] text-white">
          GET IT ON
        </span>
        <img src={googlePlayText} alt="Google Play text" />
      </div>
    </button>
  );
};

export default GooglePlayButton;
