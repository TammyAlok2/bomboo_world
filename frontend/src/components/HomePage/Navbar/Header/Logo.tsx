// components/Header/Logo.tsx
import Image from "next/image";
import Link from "next/link";

interface LogoProps{
  sticky: boolean;
}

const Logo:React.FC<LogoProps> = ({sticky}) => {
  return (
    <div className="ml-[-1.5rem] w-60 max-w-full xl:mr-12">
      <Link
        href="/"
        className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : ""
          } `}
      >
        <Image
          src="/images/logo/Bomboo-World.png"
          alt="logo"
          width={140}
          height={30}
          className="w-full dark:hidden"
        />
        <Image
          src="/images/logo/Bomboo-World.png"
          alt="logo"
          width={140}
          height={30}
          className="hidden w-full dark:block"
        />
      </Link>
    </div>
  );
};

export default Logo;
