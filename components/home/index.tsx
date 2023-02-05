import Head from "next/head";
import Image from "next/image";

import content from "../../constants/content.json";
import banner from "../../public/banner.jpeg";
import { Introduction } from "./introduction";
import { Benefit } from "./benefit";
import { Footer } from "../footer";
import { Process } from "./process";
import { Capacity } from "./capacity";
import { Package } from "./package";

export default function HomeComponent() {
  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex w-full">
          <Image
            src={banner}
            alt="hospital banner"
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
          />
        </div>
        <Introduction />
        <Benefit />
        <Process />
        <Capacity />
        <Package />
        <Footer />
      </main>
    </div>
  );
}
