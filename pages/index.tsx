import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import content from "../constants/content.json";
import banner from "../public/banner.jpeg";
import introduceImg from "../public/health-checking.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex w-full h-50%">
          <Image
            src={banner}
            alt="hospital banner"
            style={{ objectFit: "fill", width: "100%" }}
          />
        </div>
        <Introduction />
      </main>
    </div>
  );
}

const Introduction = () => {
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
        <div className="my-4 flex justify-center">
          <Image src={introduceImg} alt="health checking" className="w-3/4" />
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
