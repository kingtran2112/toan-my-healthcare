import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Heading } from "../heading";
import content from "../../constants/content.json";
import { SubHeading } from "../sub-heading";

export const Capacity = () => {
  return (
    <div>
      <Heading heading={content.capacity.heading} />
      <Employees />
    </div>
  );
};

const Employees = () => {
  const employees = content.capacity.employees.member.map((e) => (
    <div key={e.image} className="mx-5 shadow-lg rounded-xl overflow-hidden">
      <Image src={e.image} alt="" width={300} height={300} />
      <p>{e.name}</p>
      <p>{e.title}</p>
    </div>
  ));

  const equipments = content.capacity.equipments.devices.map((e) => (
    <div key={e} className="shadow-lg rounded-xl overflow-hidden m-auto">
      <Image src={e} alt="hospital device" width={300} height={300} />
    </div>
  ));

  return (
    <div>
      <SubHeading title={content.capacity.employees.title} />
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={50}
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {employees}
      </Carousel>
      <SubHeading title={content.capacity.equipments.title} />
      <div className="grid grid-cols-3 gap-1 px-6">{equipments}</div>
      <div className="w-full m-auto px-6 mt-16">
        <Image
          className="w-full"
          src={content.capacity.hospital.img}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
