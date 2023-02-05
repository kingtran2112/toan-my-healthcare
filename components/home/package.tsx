import { Heading } from "../heading";
import content from "../../constants/content.json";

export const Package = () => {
  return (
    <div className="mb-12">
      <Heading heading={content.package.heading}></Heading>
      <div className="flex flex-wrap w-full justify-evenly items-center">
        <PackageDetail
          name={content.package.advance.name}
          malePrice={content.package.advance.price.male}
          femalePrice={content.package.advance.price.female}
          currency={content.package.advance.price.currency}
        />
        <PackageDetail
          name={content.package.vip.name}
          malePrice={content.package.vip.price.male}
          femalePrice={content.package.vip.price.female}
          currency={content.package.vip.price.currency}
          center
        />
        <PackageDetail
          name={content.package.basic.name}
          malePrice={content.package.basic.price.male}
          femalePrice={content.package.basic.price.female}
          currency={content.package.basic.price.currency}
        />
      </div>
    </div>
  );
};

const PackageDetail = ({
  name,
  malePrice,
  femalePrice,
  currency,
  center = false,
}: {
  name: string;
  malePrice: number;
  femalePrice: number;
  currency: string;
  center?: boolean;
}) => {
  const formatter = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: currency,
  });
  return (
    <div
      className={`text-center border-4 p-3 rounded-lg border-yellow-400 w-3/4 md:w-1/5 min-w-fit ${
        center ? "text-2xl py-8" : ""
      }`}
    >
      <h2 className=" uppercase font-bold text-sky-700 text-2xl">{name}</h2>
      <ul>
        <li>
          <div>Nam giới:</div>
          <PriceTag value={formatter.format(malePrice)} />
        </li>
        <li>
          <div>Nữ giới:</div>
          <PriceTag value={formatter.format(femalePrice)} />
        </li>
      </ul>
    </div>
  );
};

const PriceTag = ({ value }: { value: string }) => {
  return (
    <div className="border-2 m-auto bg-gradient-to-r from-sky-500 to-sky-700 rounded-xl p-2 text-yellow-400 inline-block text-xl font-bold">
      {value}
    </div>
  );
};
