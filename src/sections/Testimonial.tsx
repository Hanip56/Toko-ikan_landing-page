import { Heading } from "@/components";
import TestimonialSwiper from "@/components/TestimonialSwiper";

const Testimonial = () => {
  return (
    <section className="w-(calc(100vw-17px)) mx-auto my-16 flex flex-col items-center overflow-hidden px-2 sm:px-4 xl:px-0">
      <Heading
        title="Testimonial"
        description="A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        className="max-w-lg text-center"
        pClassName="font-gilroy font-[20px] leading-[30px] font-medium"
      />
      <div className="mb-24 mt-16 max-w-[var(--max-width)]">
        <TestimonialSwiper />
      </div>
    </section>
  );
};

export default Testimonial;
