import React, { useState } from "react";

export default function Header({ ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header {...props}>
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-[160px]">
            <a href="/">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="Photosnap Logo"
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-10">
              <li>
                <a
                  href="/stories"
                  className="text-xs font-bold tracking-[2px] uppercase hover:underline"
                >
                  STORIES
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-xs font-bold tracking-[2px] uppercase hover:underline"
                >
                  FEATURES
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-xs font-bold tracking-[2px] uppercase hover:underline"
                >
                  PRICING
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Get an Invite Button */}
          <div className="hidden md:flex min-w-[160px] justify-end">
            <a
              href="/get-invite"
              className="bg-black text-white text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:bg-[#DFDFDF] hover:text-black transition-colors"
            >
              GET AN INVITE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full md:hidden">
              <div className="flex justify-between items-center h-[72px] px-6 border-b border-gray-200">
                <a href="/">
                  <img
                    src="/assets/shared/desktop/logo.svg"
                    alt="Photosnap Logo"
                    className="h-6 w-auto object-contain"
                  />
                </a>
                <button
                  onClick={toggleMenu}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6">
                <ul className="flex flex-col gap-6 mb-8 text-center">
                  <li>
                    <a
                      href="/stories"
                      className="text-black text-sm font-bold tracking-[2px] uppercase hover:underline"
                      onClick={toggleMenu}
                    >
                      STORIES
                    </a>
                  </li>
                  <li>
                    <a
                      href="/features"
                      className="text-black text-sm font-bold tracking-[2px] uppercase hover:underline"
                      onClick={toggleMenu}
                    >
                      FEATURES
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-black text-sm font-bold tracking-[2px] uppercase hover:underline"
                      onClick={toggleMenu}
                    >
                      PRICING
                    </a>
                  </li>
                </ul>

                {/* Mobile Get an Invite Button */}
                <div className="border-t border-gray-200 pt-6">
                  <a
                    href="/get-invite"
                    className="block w-full bg-black text-white text-sm font-bold tracking-[2px] uppercase px-6 py-4 text-center hover:bg-[#DFDFDF] hover:text-black transition-colors"
                    onClick={toggleMenu}
                  >
                    GET AN INVITE
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
