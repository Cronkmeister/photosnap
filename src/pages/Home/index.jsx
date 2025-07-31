import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResponsiveFeatureSection from "../../components/ResponsiveFeatureSection";
import HomeContentSection from "./HomeContentSection";
import React, { Suspense } from "react";

const responsiveFeaturesList = [
  {
    featureImage: "/assets/features/desktop/responsive.svg",
    featureTitle: "100% Responsive",
    featureDescription:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    featureImage: "/assets/features/desktop/no-limit.svg",
    featureTitle: "No Photo Upload Limit",
    featureDescription:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    featureImage: "/assets/features/desktop/embed.svg",
    featureTitle: "Available to Embed",
    featureDescription:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Photo Stories – Share Your Visual Narratives</title>
        <meta
          name="description"
          content="Discover Photosnap, the ultimate platform for photographers and storytellers. Share your photo stories with beautiful design templates, responsive layouts, and unlimited uploads. Connect and resonate with a global audience today."
        />
      </Helmet>

      <div className="w-full bg-white">
        <Header />
        <div className="flex flex-col items-center">
          {/* home content section */}
          <HomeContentSection />
          <div className="w-full bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-24 items-center justify-items-center">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {responsiveFeaturesList.map((d, index) => (
                      <ResponsiveFeatureSection
                        {...d}
                        key={"list100Responsi" + index}
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
