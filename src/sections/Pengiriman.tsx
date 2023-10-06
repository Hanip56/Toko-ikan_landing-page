const Pengiriman = () => {
  return (
    <section className="w-full bg-white-pattern text-white lg:h-[367px]">
      <div className="mx-auto flex h-full max-w-[1600px] flex-col items-center lg:flex-row">
        {/* Lacak pengiriman anda */}
        <div className="flex flex-1 flex-col items-center gap-6 p-12 xl:p-16">
          <h3>Lacak Pengiriman anda</h3>
          <p className="font-gilroy font-medium  tracking-wider">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <div className="flex w-full gap-6">
            <input
              className="w-full rounded-[15px] bg-white px-6 py-4 font-gilroy font-semibold text-black placeholder:text-grayLabel"
              placeholder="Lacak Pengiriman"
            />
            <button className="rounded-[15px] bg-secondary px-12 py-4">
              Lacak
            </button>
          </div>
        </div>
        {/* separator */}
        <div className="mx-6 h-[1px] w-full bg-[#F5F5F5] lg:h-full lg:w-[1px]" />
        {/* Cek tarif pengiriman anda */}
        <div className="flex w-full flex-1 flex-col items-center gap-6 p-16">
          <h3>Cek Tarif Pengiriman anda</h3>
          <div className="flex w-full gap-6">
            <input
              className="w-full rounded-[15px] bg-white px-6 py-4 font-gilroy font-semibold text-black placeholder:text-grayLabel"
              type="text"
              placeholder="Origin"
            />
            <input
              className="w-full rounded-[15px] bg-white px-6 py-4 font-gilroy font-semibold text-black placeholder:text-grayLabel"
              type="text"
              placeholder="Destination"
            />
          </div>
          <button className="w-full rounded-[15px] bg-secondary p-4">
            Check
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pengiriman;
