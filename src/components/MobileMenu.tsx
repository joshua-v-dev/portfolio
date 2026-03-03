import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDelayedRender from "~/lib/useDelayedRender";
import { CrossIcon, MenuIcon } from "~/lib/icons";

const MobileMenu = ({ href }: { href?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const router = useRouter();
  const isActive = router.asPath === href;
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function closeMenu() {
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsMenuClosed(true);
    }, 300);
  }

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsMenuClosed(true);
      }, 300);
    } else {
      setIsMenuClosed(false);
      setIsMenuOpen(true);
    }

    if (isMenuClosed) {
      setIsMenuOpen(true);
      setTimeout(() => {
        setIsMenuClosed(false);
      }, 300);
    }
  }

  useEffect(() => {
    return function cleanup() {
      setIsMenuOpen(false);
    };
  }, []);

  return (
    <>
      <nav className={"absolute h-full w-full  "}>
        <button
          className={cn(
            isActive
              ? "font-bold text-gray-100 dark:text-gray-300"
              : "font-semibold text-white dark:text-gray-500",
            {
              "transition-opacity duration-300 ease-linear border-0 bg-accent-1 w-10 h-10 relative z-20 focus:outline-none":
                true,
            },
            "visible md:hidden"
          )}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CrossIcon className="p-1 fill-current text-gray-100 dark:text-gray-300" />
          ) : (
            <MenuIcon className="p-1 fill-current text-white dark:text-gray-500" />
          )}
        </button>
        {isMenuMounted && (
          <ul
            className={cn(
              {
                "p-0 pl-1 pt-3 w-screen h-screen z-10 opacity-0 absolute left-0 transition-transform duration-300 ease-linear bg-gradient-to-t from-blue-400 to-blue-900":
                  true,
              },
              "opacity-2 shadow-dark-md absolute flex flex-col rounded-md bg-gradient-to-r from-accent-3 via-accent-4 to-accent-5 dark:border-gray-600",

              isMenuRendered && { "opacity-100 translate-x-0 transform ": true }
            )}
          >
            <li
              className="transform -translate-x-4 opacity-0 transition-opacity ease-linear transition-width duration-300 transition-border-color w-0 whitespace-nowrap border-b border-gray-300 text-3xl p-2 font-semibold text-gray-500 dark:border-gray-700 dark:text-gray-100 transition-width transition-border-color"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="/" onClick={closeMenu} className="flex w-auto ">
                Home
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-3xl p-2 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "175ms" }}
            >
              <Link
                href="/products"
                onClick={closeMenu}
                className="flex w-auto "
              >
                Products
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-3xl p-2 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "200ms" }}
            >
              <Link
                href="/services"
                onClick={closeMenu}
                className="flex w-auto "
              >
                Services
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-3xl p-2 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "250ms" }}
            >
              <Link
                href="/contract"
                onClick={closeMenu}
                className="flex w-auto"
              >
                Contract
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-3xl p-2 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "275ms" }}
            >
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="flex w-auto "
              >
                Gallery
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-3xl p-2 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ transitionDelay: "300ms" }}
            >
              <Link href="/future" onClick={closeMenu} className="flex w-auto ">
                Future
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default MobileMenu;
