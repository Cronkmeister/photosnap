import React, { useState } from "react";

export default function GetInviteContentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "" });
  };

  return (
    <>
      {/* Hero Section */}
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
          <div className="max-w-7xl mx-auto w-full">
            <div className="relative z-10">
              <h1 className="text-white text-[40px] font-bold uppercase leading-tight tracking-[4px] mb-8 max-w-[420px]">
                Join the Beta
                <br />
                Get Your Invite
                <br />
                Today!
              </h1>
              <p className="text-white text-lg opacity-90 max-w-[420px]">
                Be among the first to experience our revolutionary photo sharing
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-black text-[32px] font-bold uppercase leading-tight tracking-[3px] mb-6">
              Get Your Invite
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Join thousands of photographers and storytellers who are already
              part of our beta program. Get early access to exclusive features
              and help shape the future of visual storytelling.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-black uppercase tracking-[2px] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-black uppercase tracking-[2px] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white text-xs font-bold tracking-[2px] uppercase px-8 py-4 hover:bg-[#DFDFDF] hover:text-black transition-colors inline-flex items-center gap-4"
                >
                  GET MY INVITE
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
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="mb-6">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto text-green-500"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="currentColor"
                    opacity="0.1"
                  />
                  <path
                    d="M20 32L28 40L44 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-black text-[24px] font-bold uppercase leading-tight tracking-[2px] mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your invite request has been submitted successfully. We'll be in
                touch soon with your beta access details.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-black text-white text-xs font-bold tracking-[2px] uppercase px-6 py-3 hover:bg-[#DFDFDF] hover:text-black transition-colors"
              >
                SUBMIT ANOTHER
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
