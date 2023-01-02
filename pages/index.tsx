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
        <div className="flex w-full">
          <Image
            src={banner}
            alt="hospital banner"
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
          />
        </div>
        <Introduction />
        <Benefit />
        <Footer />
      </main>
    </div>
  );
}

const Footer = () => {
  const details = Object.keys(content.footer.detail).map((k) => (
    <p key={k}>
      {content.footer.detail[k as keyof typeof content.footer.detail]}
    </p>
  ));
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container flex justify-evenly">
        <div>
          <b className="text-2xl text-sky-500">Bệnh viện Toàn Mỹ</b>
          {details}
        </div>
        <div>
          <b className="text-2xl text-sky-500">Liên hệ</b>
          <div>
            <a href={`tel:${content.footer.contact.phone}`}>
              {content.footer.contact.phone}
            </a>
          </div>
          <div>
            <a href={`mailto:${content.footer.contact.mail}`}>
              {content.footer.contact.mail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Benefit = () => {
  return (
    <div id="benefit" className="w-full">
      <div className="flex flex-col items-center container mx-auto p-12 ">
        <h1 className="uppercase font-bold text-3xl text-center whitespace-pre-wrap">
          {content.benefit.heading}
        </h1>
        <hr className="w-1/3 border-t-2 border-solid border-current mt-2 mb-6" />
        <div className="flex w-full flex-wrap justify-evenly">
          {content.benefit.details.map((detail) => (
            <div
              key={detail.title}
              className="flex flex-shrink-0 w-2/5 my-2 shadow-md rounded-xl overflow-hidden"
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
