import content from "../../constants/content.json";

export const Footer = () => {
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
