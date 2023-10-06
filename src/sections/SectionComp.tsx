import { Heading } from "@/components";

type Props = {
  title: string;
  description: string;
  smartphoneImg: string;
  fishImg: string;
  alignImg: "left" | "right";
};

const SectionComp = ({
  title,
  description,
  smartphoneImg,
  fishImg,
  alignImg,
}: Props) => {
  const isLeft = alignImg === "left";
  return (
    <section
      className={
        isLeft
          ? "mx-auto flex h-[50rem] max-w-[var(--max-width)] flex-col-reverse gap-4 lg:h-[60rem] xl:h-[727px]  xl:flex-row-reverse xl:items-center"
          : "mx-auto flex h-[50rem] max-w-[var(--max-width)] flex-col-reverse gap-4 lg:h-[60rem]  xl:h-[727px] xl:flex-row xl:items-center"
      }
    >
      {/* description info */}
      <div className="h-full w-full basis-[35%] px-2 sm:px-4 xl:h-fit xl:flex-1 xl:px-0">
        <Heading
          title={title}
          description={description}
          className={isLeft ? "xl:pl-10" : "xl:pr-10"}
          pClassName="leading-8 max-w-lg"
        />
      </div>
      {/* image */}
      <div className="relative h-full w-full flex-1">
        <div
          className={
            isLeft
              ? "absolute -left-12 h-full w-full overflow-hidden sm:-left-20 md:-left-52 xl:-left-24"
              : "absolute -right-12 h-full w-full overflow-hidden sm:-right-20 md:-right-52 xl:-right-24"
          }
        >
          <img
            className="h-full w-full object-contain lg:scale-110"
            src={smartphoneImg}
            alt="Smartphone shipping"
          />
        </div>
        <img
          className={
            isLeft
              ? "absolute right-[10%] top-1/2 w-[40%] -translate-y-1/2 xl:-right-16  xl:w-[372px]"
              : "absolute left-[10%] top-1/2 w-[40%] -translate-y-1/2 xl:-left-16  xl:w-[372px]"
          }
          src={fishImg}
          alt="Double fish"
        />
        {isLeft ? (
          <div className="absolute right-[30%] top-1/2 -z-[1] h-[15rem] w-[75%] -translate-y-1/2 rounded-br-[50px] rounded-tr-[50px] bg-white-pattern sm:h-[20rem] lg:h-[414.42px] xl:right-28 xl:w-[calc(50vw)]" />
        ) : (
          <div className="absolute left-[30%] top-1/2 -z-[1] h-[15rem] w-[75%] -translate-y-1/2 rounded-bl-[50px] rounded-tl-[50px] bg-white-pattern sm:h-[20rem] lg:h-[414.42px] xl:left-28 xl:w-[calc(50vw)]" />
        )}
      </div>
    </section>
  );
};

export default SectionComp;
