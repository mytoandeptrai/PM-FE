import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-footer flex min-h-[12vh] flex-col items-center justify-between gap-3 bg-cover bg-no-repeat px-5 py-2 md:flex-row md:items-start md:px-36 md:py-20">
      <div>
        <h3>@ My Toan Dep Trai </h3>
      </div>
      <ul className="flex flex-wrap items-stretch gap-y-3 md:flex-nowrap md:gap-y-0">
        <li className="flex flex-1 flex-row-reverse items-center gap-x-2 px-8 md:flex-none md:flex-row ">
          <span className="min-w-20 md:min-w-0">Facebook</span>
          <Image src="/icons/facebook.svg" width={20} height={20} alt="facebook icon" />
        </li>
        <li className="flex flex-1 flex-row-reverse items-center gap-x-2 px-8 md:flex-none md:flex-row md:gap-y-0">
          <span className="min-w-20 md:min-w-0">Linkedin</span>
          <Image src="/icons/linkedin.svg" width={20} height={20} alt="linkedin icon" />
        </li>
        <li className="flex flex-1 flex-row-reverse items-center gap-x-2 px-8 md:flex-none md:flex-row md:gap-y-0">
          <span className="min-w-20 md:min-w-0">Github</span>{' '}
          <Image src="/icons/github.svg" width={20} height={20} alt="Github icon" />
        </li>
        <li className="flex flex-1 flex-row-reverse items-center gap-x-2 px-8 md:flex-none md:flex-row md:gap-y-0">
          <span className="min-w-20 md:min-w-0">Gmail</span>
          <Image src="/icons/gmail.svg" width={20} height={20} alt="gmail icon" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
