import { KeunggulanCard, Heading } from "@/components";
import { keunggulans } from "@/constants/dummyData";

const KeunggulanKami = () => {
  return (
    <section className="mx-auto flex h-full min-h-[var(--section-height)] max-w-[var(--max-width)] flex-col items-center justify-center px-2 sm:px-4 xl:px-0">
      <Heading
        title="Keunggulan Kami"
        description="A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        className="mb-20 mt-16 max-w-xl text-center"
      />
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {keunggulans.map((keunggulan, i) => (
          <KeunggulanCard
            key={i}
            title={keunggulan.title}
            icon={keunggulan.icon}
            altIcon={keunggulan.altIcon}
            description={
              "A Lorem Ipsum is simply dummy \ntext of the printing and \ntypesetting industry"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default KeunggulanKami;
