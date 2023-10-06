import { smartphoneHome, doubleFish } from "@/assets";
import { AppStoreButton, GooglePlayButton, Status } from "@/components";

const Hero = () => {
  return (
    <section className="mx-auto flex h-[64rem] max-w-[var(--max-width)] flex-col-reverse items-center gap-4 py-6 pt-32 sm:px-4 xl:h-[var(--section-height)] xl:flex-row xl:pt-12">
      {/* description info */}
      <div className="flex w-full flex-1 flex-col gap-5 px-2 xl:gap-6 xl:px-0">
        <h1 className="max-w-lg">Kirim berbagi jenis ikan dengan mudah</h1>
        <p className="max-w-lg font-medium text-grayText">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="my-4 flex gap-6 xl:my-7">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
        <div className="flex items-center gap-14">
          <Status value="1.9k+" description="Active Users" />
          <Status value="20+" description="New Features" />
        </div>
      </div>
      {/* image */}
      <div className="relative -z-[1] h-full w-full basis-1/2">
        <div>
          <img
            className="absolute -right-[3rem] h-full w-full scale-[150%] object-contain md:-right-[8rem] lg:-right-[12rem] xl:-right-20 xl:scale-[120%]"
            src={smartphoneHome}
            alt="Smartphone home"
          />
        </div>
        <img
          className="absolute left-[20%] top-1/2 w-[30%] -translate-y-1/2 xl:-left-[2%] xl:w-[48.5%]"
          src={doubleFish}
          alt="Double fish"
        />
        <div className="absolute left-[30%] top-1/2 -z-[1] h-[15rem] w-[75%] -translate-y-1/2 rounded-bl-[50px] rounded-tl-[50px] bg-white-pattern sm:h-[20rem] lg:h-[414.42px] xl:left-28 xl:w-[calc(50vw)]" />
      </div>
    </section>
  );
};

export default Hero;
