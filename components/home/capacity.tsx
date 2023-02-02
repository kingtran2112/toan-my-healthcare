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
  const employees = content.capacity.employees.map((e) => (
    <div key={e.image} className="mx-5 shadow-lg rounded-xl overflow-hidden">
      <Image src={e.image} alt="" width={300} height={300} />
      <p>{e.name}</p>
      <p>{e.title}</p>
    </div>
  ));

  return (
    <div>
      <SubHeading title="Đội ngũ chuyên gia" />
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
    </div>
  );
};
