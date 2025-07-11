"use client";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
//import ThemeToggler from "./ThemeToggler";
// import menuData from "../../../data/NavMenuData";
import { TbShoppingBagHeart } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "./SearchInput";
import Logo from "./Header/Logo";
import NavList from "./Header/NavList";
import LoginButton from "./Header/LoginButton";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import Profile from "@/app/profile/page";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState<boolean>(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // fething wishlist and items from cart
  const { wishlist } = useWishlistStore();

  const { items } = useCartStore();

  // Wishlist count state
  const [wishlistCount1, setWishlistCount] = useState<number>("");
  const [cartCount, setCartCount] = useState<number>("");

  useEffect(() => {
    setCartCount(items.length > 0 ? items.length : "");
  }, [items]);

  // console.log(wishlist.products.length)
  // console.log(wishlist.products)

  useEffect(() => {
      setWishlistCount(
        wishlist?.products?.length > 0 ? wishlist?.products?.length : ""
      )
  }, [wishlist]);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const { user } = useAuthStore();
  // console.log(user)

  const handleMenuClose = (boolean) => {
    setNavbarOpen(boolean);
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-white py-2 [box-shadow:0_0_0.5rem_0_lightgray] mb-[2rem] ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-grey-00 !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-[90%] mx-auto">
          <div className="relative flex items-center justify-between">
            <Logo sticky={sticky} />

            <div className="flex w-full items-center justify-between">
              <NavList
                handleMenuClose={handleMenuClose}
                handleSubmenu={handleSubmenu}
                usePathName={usePathName}
                navbarOpen={navbarOpen}
                openIndex={openIndex}
              />
              <div className="flex items-center justify-end lg:pr-2">
                <div className="mr-4">
                  <SearchInput onSearch={() => "hello"} />
                </div>
                <div className="flex gap-4">
                  <Link href={"/dashboard/wishlist"}>
                    <div className="flex hover:text-red-600 gap-2 relative">
                      <TbShoppingBagHeart className="text-[1.5rem] hover:text-red" />
                      <span className={`absolute -right-2 -top-[0.5rem] ${wishlistCount1 != 0 ? 'bg-red' : ''} text-white text-[0.6rem] sm:text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center`}>
                        {wishlistCount1}
                      </span>
                    </div>
                  </Link>
                  <Link href={"/cart"}>
                    <div className="flex hover:text-red-600 gap-2 relative">
                      <TiShoppingCart className="text-[1.5rem] hover:text-red" />
                      <span className={`absolute -right-2 -top-[0.5rem] ${cartCount != 0 ? 'bg-red' : ''} text-white text-[0.6rem] sm:text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center`}>
                        {cartCount}
                      </span>
                    </div>
                  </Link>
                </div>
                {user == null ? <LoginButton /> : <Profile />}
                <div>
                  {user ? (
                    ""
                  ) : (
                    <button
                      onClick={navbarToggleHandler}
                      id="navbarToggler"
                      aria-label="Mobile Menu"
                      className="right-4 top-1/2 block rounded-lg px-2 py-[2px] ring-primary focus:ring-2 lg:hidden ml-[1rem]"
                    >
                      <span
                        className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? " top-[7px] rotate-45" : " "
                        }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? "opacity-0 " : " "
                        }`}
                      />
                      <span
                        className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? " top-[-8px] -rotate-45" : " "
                        }`}
                      />
                    </button>
                  )}
                </div>
                <div>{/* <ThemeToggler />  */}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;