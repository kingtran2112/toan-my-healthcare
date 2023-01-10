export const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="uppercase font-bold text-3xl text-center whitespace-pre-wrap">
        {heading}
      </h1>
      <hr className="w-1/3 border-t-2 border-solid border-current mt-2 mb-6" />
    </div>
  );
};
