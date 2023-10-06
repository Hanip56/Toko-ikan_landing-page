import { menubarIcon } from "@/assets";

const Navbar = () => {
  return (
    <nav className="mx-auto flex h-20 max-w-[var(--max-width)] items-center justify-between px-2 sm:px-4 lg:h-24 xl:px-0">
      <div className="font-inter text-2xl text-[26px] text-secondary">
        Toko Ikan
      </div>
      <ul className="hidden items-center gap-8 font-medium lg:flex [&>li:hover]:text-secondary [&>li]:cursor-pointer [&>li]:p-2">
        <li className="text-secondary">Beranda</li>
        <li>Keunggulan</li>
        <li>Fitur Aplikasi</li>
        <li>Testimonial</li>
      </ul>
      <button className="hidden rounded-[10px] bg-primary px-9 py-3 font-gilroy font-bold text-white lg:block">
        Download
      </button>
      <button className="block sm:mr-2 lg:hidden">
        <img src={menubarIcon} alt="Menu bar icon" className="h-10 w-10" />
      </button>
    </nav>
  );
};

export default Navbar;
