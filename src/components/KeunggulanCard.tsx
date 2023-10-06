type Props = {
  icon: string;
  altIcon: string;
  title: string;
  description: string;
};

const KeunggulanCard = ({ icon, altIcon, title, description }: Props) => {
  const desc = description
    .split("\n")
    .map((str, i) => <span key={i}>{str}</span>);
  return (
    <div className="mx-auto flex h-[410px] w-full flex-col items-center justify-center gap-6 rounded-[30px] border p-6 text-center transition-shadow hover:shadow-2xl hover:shadow-gray-200 sm:w-[430px] lg:w-full">
      <div className="rounded-xl bg-primary/10 p-6">
        <img src={icon} alt={altIcon} />
      </div>
      <h4>{title}</h4>
      <p className="flex flex-col text-grayText">{desc}</p>
    </div>
  );
};

export default KeunggulanCard;
