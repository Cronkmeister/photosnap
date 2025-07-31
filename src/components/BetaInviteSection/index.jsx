import React from "react";

export default function BetaInviteSection() {
  return (
    <>
      {/* Beta Invite Hero Section */}
      <section className="relative w-full h-[280px]">
        {/* Background image */}
        <img
          src="/assets/shared/desktop/bg-beta.jpg"
          alt="Slot canyon with dramatic rock formations"
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient bar - full height */}
        <div className="absolute left-0 top-0 w-[6px] h-full bg-gradient-to-b from-[#FFC593] via-[#BC7198] to-[#5A77FF]" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center px-8">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="relative z-10">
              <h2 className="text-white text-[40px] font-bold uppercase leading-tight tracking-[4px] mb-8 max-w-[420px]">
                We're in beta.
                <br />
                Get your invite
                <br />
                today!
              </h2>
            </div>

            {/* GET AN INVITE link */}
            <a
              href="/get-invite"
              className="inline-flex items-center gap-4 text-white text-xs font-bold tracking-[2px] uppercase group hover:underline"
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
          </div>
        </div>
      </section>
    </>
  );
}
