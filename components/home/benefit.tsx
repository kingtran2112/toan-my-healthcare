import content from "../../constants/content.json";
import Image from "next/image";
import { Heading } from "../heading";

export const Benefit = () => {
  return (
    <div id="benefit" className="w-full">
      <div className="flex flex-col items-center container mx-auto p-12 ">
        <Heading heading={content.benefit.heading} />
        <div className="flex w-full flex-wrap justify-evenly">
          {content.benefit.details.map((detail) => (
            <div
              key={detail.title}
              className="flex flex-shrink-0 w-full md:w-2/5 my-2 shadow-md rounded-xl overflow-hidden"
            >
              <div>
                <Image src={detail.img} alt="" width={500} height={500} />
              </div>
              <div className="px-1">
                <h2>{detail.title}</h2>
                <p>{detail.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
