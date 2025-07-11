import Link from 'next/link'
import React from 'react'
import MenuData from '../../../../data/NavMenuData'

interface NavbarProps {
    handleSubmenu: (index: number) => void;
    usePathName: string;
    navbarOpen: boolean;
    openIndex: number;
}

const NavList: React.FC<NavbarProps> = ({ handleMenuClose, handleSubmenu, usePathName, navbarOpen, openIndex }) => {

    const shouldHideOnLargeScreen = (title: string) => {
        const hiddenTitles = ['Sign Up', 'Sign In']; // Add the exact titles as they appear in MenuData
        return hiddenTitles.includes(title);
    };

    return (
        <div>
            <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
            >
                <ul className="block lg:flex lg:space-x-12">
                    {MenuData.map((menuItem, index) => (
                        <li key={index} className="group relative" onClick={()=>handleMenuClose(false)}>
                            {menuItem.path ? (
                                <Link
                                    href={menuItem.path}
                                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                        ? "text-primary dark:text-white"
                                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                        } ${
                                            shouldHideOnLargeScreen(menuItem.title) 
                                                ? 'lg:hidden' 
                                                : ''
                                        }`}
                                >
                                    {menuItem.title}
                                </Link>
                            ) : (
                                <>
                                    <p
                                        onClick={() => handleSubmenu(index)}
                                        className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                                    >
                                        {menuItem.title}
                                        <span className="pl-3">
                                            <svg width="25" height="24" viewBox="0 0 25 24">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </p>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavList
