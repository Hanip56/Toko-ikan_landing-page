type Props = {
  title: string;
  description: string;
  className?: string;
  pClassName?: string;
};

const Heading = ({ title, description, className, pClassName }: Props) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <h2>{title}</h2>
      <p className={`text-grayText font-medium ${pClassName}`}>{description}</p>
    </div>
  );
};

export default Heading;
