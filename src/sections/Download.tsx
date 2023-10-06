import { AppStoreButton, GooglePlayButton } from "@/components";
import { manCourrier } from "@/assets";

const Download = () => {
  return (
    <section className="h-[42rem] bg-black-pattern px-2 text-white sm:px-4 lg:h-[518px] xl:px-0">
      <div className="mx-auto flex h-full max-w-[var(--max-width)] flex-col items-center lg:flex-row">
        {/* description info */}
        <div className="flex flex-1 flex-col gap-6 p-4 text-center lg:p-0 lg:text-start">
          <h2>
            Available and <br /> Download Anytime!
          </h2>
          <p className="font-gilroy font-medium">
            A lorem ipsum is simply dummy text of the printing and
          </p>
          <div className="mt-2 flex gap-6">
            <GooglePlayButton />
            <AppStoreButton />
          </div>
        </div>
        {/* image */}
        <div className="relative h-[20rem] w-[20rem] flex-1 lg:h-full lg:w-full">
          <img
            className="absolute bottom-0"
            src={manCourrier}
            alt="Man Courrier"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
