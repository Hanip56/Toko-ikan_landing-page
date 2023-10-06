import { JBGlogo, facebookIcon, twitterIcon, instagramIcon } from "@/assets";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-[var(--max-width)] flex-col items-center justify-center px-2 py-6 font-gilroy sm:px-4 lg:py-10 xl:px-0">
      <div className="mb-16 mt-6 flex w-full flex-col gap-6 lg:flex-row lg:gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <img src={JBGlogo} alt="JBG Logo" />
          </div>
          <p className="max-w-sm font-medium text-grayText">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="#">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
          </div>
        </div>
        <div className="basis-[22%]">
          <h5 className="mb-6">Menu Bantuan</h5>
          <ul className=" space-y-4 text-grayText">
            <li>
              <a href="#">Keunggulan</a>
            </li>
            <li>
              <a href="#">Fiture Aplikasi</a>
            </li>
            <li>
              <a href="#">Testimoni</a>
            </li>
          </ul>
        </div>
        <div className="basis-[22%]">
          <h5 className="mb-6">Informasi kontak</h5>
          <ul className="space-y-4 text-grayText">
            <li>
              <a href="#">0812-9797-1227</a>
            </li>
            <li>
              <a href="#"> 0812-9797-1227</a>
            </li>
            <li>
              <a href="#">Jbgtranshipping@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-grayText">All rights reserved@2022</p>
    </footer>
  );
};

export default Footer;
