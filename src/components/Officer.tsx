const Officer = ({
  name,
  position,
  link,
}: {
  name: string;
  position: string;
  link?: string;
}) => {
  return (
    <div className="flex-col w-24 text-center">
      <img src={link} className="h-20 w-20 rounded-lg mx-auto" />
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
};

export default Officer;
