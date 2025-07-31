import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import ArticleCard from "../../components/ArticleCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FeaturedStorySection from "./FeaturedStorySection";
import React, { Suspense } from "react";

const recentStoriesGrid = [
  {
    mainImage: "/assets/stories/desktop/mountains.jpg",
    publishDate: "April 16th 2020",
    title: "The Mountains",
    author: "by John Appleseed",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/cityscapes.jpg",
    publishDate: "April 14th 2020",
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/18-days-voyage.jpg",
    publishDate: "April 11th 2020",
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/architecturals.jpg",
    publishDate: "April 9th 2020",
    title: "Architecturals",
    author: "by Samantha Brooke",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/world-tour.jpg",
    publishDate: "April 7th 2020",
    title: "World Tour 2019",
    author: "by Timothy Wagner",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/unforeseen-corners.jpg",
    publishDate: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/king-on-africa.jpg",
    publishDate: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/trip-to-nowhere.jpg",
    publishDate: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/rage-of-the-sea.jpg",
    publishDate: "March 19th 2020",
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/running-free.jpg",
    publishDate: "March 16th 2020",
    title: "Running Free",
    author: "by Michelle",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/behind-the-waves.jpg",
    publishDate: "March 11th 2020",
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/calm-waters.jpg",
    publishDate: "March 9th 2020",
    title: "Calm Waters",
    author: "by Samantha Brooke",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/milky-way.jpg",
    publishDate: "March 5th 2020",
    title: "The Milky Way",
    author: "by Benjamin Cruz",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/dark-forest.jpg",
    publishDate: "March 4th 2020",
    title: "Night at The Dark Forest",
    author: "by Mohammed Abdul",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/somwarpet.jpg",
    publishDate: "March 1st 2020",
    title: "Somwarpet's Beauty",
    author: "by Michelle",
    ctaText: "READ STORY",
  },
  {
    mainImage: "/assets/stories/desktop/land-of-dreams.jpg",
    publishDate: "February 25th 2020",
    title: "Land of Dreams",
    author: "by William Malcolm",
    ctaText: "READ STORY",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Helmet>
        <title>Stories – Explore Captivating Narratives</title>
        <meta
          name="description"
          content="Dive into the world of storytelling with Photosnap's featured stories. From the Hazy Full Moon of Appalachia to the Milky Way, experience tales of adventure, nature, and culture. Read and share inspiring stories today."
        />
      </Helmet>
      <div className="w-full bg-white">
        <Header />
        <div className="w-full">
          {/* featured story section */}
          <FeaturedStorySection />
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<div>Loading feed...</div>}>
              {recentStoriesGrid.map((d, index) => (
                <ArticleCard
                  {...d}
                  key={"stories" + index}
                  className="bg-gray-200"
                />
              ))}
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
