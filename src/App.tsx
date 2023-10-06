import {
  Hero,
  Pengiriman,
  SectionComp,
  KeunggulanKami,
  Download,
  Footer,
  Testimonial,
} from "@/sections";
import { Navbar } from "@/components";

import {
  smartphoneShipping,
  fishShipping,
  smartphoneLacak,
  fishLacak,
  smartphoneSchedule,
  fishSchedule,
} from "@/assets";

const App = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Pengiriman />
        <KeunggulanKami />
        <SectionComp
          title="Berbagai Metode Pengiriman"
          description="A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard."
          smartphoneImg={smartphoneShipping}
          fishImg={fishShipping}
          alignImg="right"
        />
        <SectionComp
          title="Lacak status pengiriman anda"
          description="A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
          A Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          smartphoneImg={smartphoneLacak}
          fishImg={fishLacak}
          alignImg="left"
        />
        <SectionComp
          title="Cek schedule pengiriman anda"
          description="A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          smartphoneImg={smartphoneSchedule}
          fishImg={fishSchedule}
          alignImg="right"
        />
        <Testimonial />
        <Download />
      </main>
      <Footer />
    </>
  );
};

export default App;
