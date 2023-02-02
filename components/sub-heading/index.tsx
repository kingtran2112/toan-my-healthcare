export const SubHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center my-3">
      <div className="bg-sky-600 px-9 py-2 rounded-3xl">
        <h2 className="uppercase text-white text-lg font-bold whitespace-pre text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};
