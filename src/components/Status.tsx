type Props = {
  value: string;
  description: string;
};

const Status = ({ value, description }: Props) => {
  return (
    <div className="font-gilroy">
      <div className="text-[40px] font-semibold text-primary">{value}</div>
      <p className="text-grayText">{description}</p>
    </div>
  );
};

export default Status;
