import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} bg-black py-16 px-8`}>
      <div className="max-w-7xl mx-auto h-full">
        <div className="text-center flex flex-col justify-between items-stretch gap-12 md:flex-row md:gap-12 h-full">
          {/* Left Section: Logo, Navigation, and Social Media */}
          <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-2">
            {/* Logo */}
            <div className="flex items-center gap-2 justify-center md:justify-start lg:items-start ">
              {/* Gradient Triangle */}
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    x2="50%"
                    y1="85.457%"
                    y2="14.543%"
                  >
                    <stop offset="0%" stopColor="#FFC593" />
                    <stop offset="51.945%" stopColor="#BC7198" />
                    <stop offset="100%" stopColor="#5A77FF" />
                  </linearGradient>
                </defs>
                <path fill="url(#logoGradient)" d="M0 16L9.5 0 19 16z" />
              </svg>
              {/* PHOTOSNAP Text */}
              <span className="text-white font-bold text-lg tracking-wide lg:mt-[-4px]">
                PHOTOSNAP
              </span>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col order-1 md:order-none gap-4 mt-6 mb-12 md:mt-0 md:flex-row md:gap-8 lg:flex-col lg:col-start-2 lg:text-left lg:row-start-1 lg:row-end-3 lg:flex lg:mb-0 lg:ml-20">
              <a
                href="/"
                className="text-white text-xs font-bold tracking-[2px] uppercase hover:underline transition-opacity"
              >
                HOME
              </a>
              <a
                href="/stories"
                className="text-white text-xs font-bold tracking-[2px] uppercase hover:underline transition-opacity"
              >
                STORIES
              </a>
              <a
                href="/features"
                className="text-white text-xs font-bold tracking-[2px] uppercase hover:underline transition-opacity"
              >
                FEATURES
              </a>
              <a
                href="/pricing"
                className="text-white text-xs font-bold tracking-[2px] uppercase hover:underline transition-opacity"
              >
                PRICING
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start lg:items-end">
              <a href="#" className="group">
                <img
                  src="/assets/shared/desktop/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="/assets/shared/desktop/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="/assets/shared/desktop/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="/assets/shared/desktop/pinterest.svg"
                  alt="Pinterest"
                  className="h-6 w-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </a>
              <a href="#" className="group">
                <img
                  src="/assets/shared/desktop/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </a>
            </div>
          </div>

          {/* Right Section: Call to Action and Copyright */}
          <div className="flex flex-col justify-between items-center md:items-end">
            {/* GET AN INVITE */}
            <a
              href="#"
              className="mb-8 inline-flex items-center gap-4 text-white text-xs font-bold tracking-[2px] uppercase group hover:underline"
            >
              GET AN INVITE
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                <svg
                  width="43"
                  height="14"
                  viewBox="0 0 43 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7H41M41 7L35.5 1.5M41 7L35.5 12.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </a>
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
