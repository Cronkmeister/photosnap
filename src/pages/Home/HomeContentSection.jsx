import React from "react";
import ImageTextCard from "../../components/ImageTextCard";

const featuredStoriesList = [
  {
    titleText: "The Mountains",
    authorText: "by John Appleseed",
    actionText: "Read story",
    imageSrc: "/assets/stories/desktop/mountains.jpg",
    imageAlt: "Snow-capped mountain peak",
  },
  {
    titleText: "Sunset Cityscapes",
    authorText: "by Benjamin Cruz",
    actionText: "Read story",
    imageSrc: "/assets/stories/desktop/cityscapes.jpg",
    imageAlt: "Aerial view of cityscape at sunset",
  },
  {
    titleText: "18 Days Voyage",
    authorText: "by Alexei Borodin",
    actionText: "Read story",
    imageSrc: "/assets/stories/desktop/18-days-voyage.jpg",
    imageAlt: "Person walking across horizon at sunset",
  },
  {
    titleText: "Architecturals",
    authorText: "by Samantha Brooke",
    actionText: "Read story",
    imageSrc: "/assets/stories/desktop/architecturals.jpg",
    imageAlt: "Modern curved building with grid pattern",
  },
];

export default function HomeContentSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse h-auto md:flex-row md:h-[650px]">
        {/* Left: Black background, gradient bar, text */}
        <div className="relative flex flex-col justify-center bg-black w-full md:w-[42%] py-12 md:py-0 min-w-0 md:min-w-[495px]">
          <div className="relative z-10  w-full px-16">
            <div className="max-w-[420px]">
              <h1 className="text-white text-5xl font-bold uppercase leading-tight tracking-[4px] mb-8 ">
                Create and share your photo stories.
              </h1>
              <p className="text-white/70 text-base leading-7 max-w-[420px] mb-12">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-4 text-white text-xs font-bold tracking-[2px] uppercase group hover:underline"
              >
                Get an invite
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
              {/* Gradient bar - positioned to match content height */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[6px] h-full bg-gradient-to-b from-[#FFC593] via-[#BC7198] to-[#5A77FF]" />
            </div>
          </div>
        </div>
        {/* Right: Hero image */}
        <div className="w-full h-[400px] md:w-[58%] md:h-full">
          <img
            src="/assets/home/desktop/create-and-share.jpg"
            alt="Man on dock looking at water"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Beautiful Stories Section */}
      <section className="w-full flex flex-col h-auto md:flex-row md:h-[600px]">
        {/* Left: Image */}
        <div className="w-full h-[400px] md:w-[58%] md:h-full">
          <img
            src="/assets/home/desktop/beautiful-stories.jpg"
            alt="Desk setup with laptop and photo editing software"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Right: Text content */}
        <div className="w-full my-7 md:w-[42%] md:my-0 flex flex-col justify-center bg-white px-16 py-20 min-w-0 md:min-w-[495px]">
          <h2 className="text-5xl font-bold uppercase leading-tight tracking-[4px] mb-8 max-w-[420px]">
            Beautiful stories every time
          </h2>
          <p className="text-gray-600 text-base leading-7 max-w-[420px] mb-12">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <a
            href="/stories"
            className="inline-flex items-center gap-4 text-black text-xs font-bold tracking-[2px] uppercase group hover:underline"
          >
            View the stories
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
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Designed for Everyone Section */}
      <section className="w-full flex flex-col-reverse h-auto md:flex-row md:h-[600px]">
        {/* Left: Text content */}
        <div className="w-full my-7 md:w-[42%] md:my-0 flex flex-col justify-center bg-white px-16 py-20 min-w-0 md:min-w-[495px]">
          <h2 className="text-5xl font-bold uppercase leading-tight tracking-[4px] mb-8 max-w-[420px]">
            Designed for everyone
          </h2>
          <p className="text-gray-600 text-base leading-7 max-w-[420px] mb-12">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses—you name it.
          </p>
          <a
            href="/stories"
            className="inline-flex items-center gap-4 text-black text-xs font-bold tracking-[2px] uppercase group hover:underline"
          >
            View the stories
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
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </a>
        </div>
        {/* Right: Image */}
        <div className="w-full h-[400px] md:w-[58%] md:h-full">
          <img
            src="/assets/home/desktop/designed-for-everyone.jpg"
            alt="Man holding professional camera equipment"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="w-full flex flex-col h-auto md:grid md:grid-cols-2 md:h-auto lg:flex lg:flex-row lg:h-[600px]">
        {featuredStoriesList.map((story, index) => (
          <ImageTextCard
            key={`story-${index}`}
            {...story}
            className="w-full h-[375px] md:w-full md:h-[500px] lg:w-1/4 lg:h-full"
          />
        ))}
      </section>
    </>
  );
}
