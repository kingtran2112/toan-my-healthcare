export const SubHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-sky-600 px-4 py-2 rounded-3xl">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
