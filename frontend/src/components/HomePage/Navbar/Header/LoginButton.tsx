// components/Header/LoginButton.tsx
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
    href="/signin"
    className="ease-in-up shadow-btn max-[991px]:none hover:shadow-btn-hover hidden bg-primary px-8 py-2 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 min-[992px]:block md:px-9 lg:px-6 xl:px-9 rounded-xl ml-[1rem]"
  >
    Login
  </Link>
  );
};

export default LoginButton;
