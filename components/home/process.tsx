import Image from "next/image";

import content from "../../constants/content.json";
import { Heading } from "../heading";
import processImg from "../../public/medical-process.png";

export const Process = () => {
  return (
    <div>
      <Heading heading={content.process.heading} />
      <Image
        src={processImg}
        alt="hospital banner"
        style={{ objectFit: "fill", width: "100%", height: "100%" }}
      />
    </div>
  );
};
