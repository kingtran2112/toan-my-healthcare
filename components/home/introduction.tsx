import content from "../../constants/content.json";
import Image from "next/image";
import introduceImg from "../../public/health-checking.png";

export const Introduction = () => {
  return (
    <div
      id="introduce"
      className="w-full bg-gradient-to-b from-sky-500 to-transparent"
    >
      <div className="flex flex-col items-center container mx-auto p-12">
        <h1 className="uppercase font-bold text-3xl text-center whitespace-pre-wrap">
          {content.introduce.heading}
        </h1>
        <hr className="w-1/3 border-t-2 border-solid border-current mt-2 mb-6" />
        <p>{content.introduce.content}</p>
        <div className="w-full h-full my-4 flex justify-center">
          <Image
            src={introduceImg}
            alt="health checking"
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
          />
        </div>
        <div id="detail" className="flex flex-row w-full flex-wrap">
          {content.introduce.details.map((detail) => (
            <div
              key={detail.title}
              className="w-2/4 flex-shrink-0 flex flex-col items-center mb-4 text-center"
            >
              <Image src={detail.icon} alt="" width={132} height={132} />
              <h3 className="font-bold my-2">{detail.title}</h3>
              <p>{detail.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
