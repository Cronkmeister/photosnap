import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResponsiveFeatureSection from "../../components/ResponsiveFeatureSection";
import BetaInviteSection from "../../components/BetaInviteSection";
import FeaturesSection from "./FeaturesSection";
import React, { Suspense } from "react";

const featuresGrid = [
  {
    featureImage: "/assets/features/desktop/responsive.svg",
    featureTitle: "100% Responsive",
    featureDescription:
      "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
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
  {
    featureImage: "/assets/features/desktop/custom-domain.svg",
    featureTitle: "Custom Domain",
    featureDescription:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    featureImage: "/assets/features/desktop/boost-exposure.svg",
    featureTitle: "Boost Your Exposure",
    featureDescription:
      "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
  },
  {
    featureImage: "/assets/features/desktop/drag-drop.svg",
    featureTitle: "Drag & Drop Image",
    featureDescription:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Photography Features – Enhance Your Storytelling</title>
        <meta
          name="description"
          content="Elevate your photography with Photosnap's cutting-edge features. Enjoy a fully responsive site, no upload limits, and custom domains. Boost your exposure and create stunning visual stories with ease. Join our beta and get your invite today!"
        />
      </Helmet>

      <div className="flex w-full flex-col items-center bg-white">
        <Header className="self-stretch" />

        {/* Features Hero Section */}
        <FeaturesSection />

        {/* Features Grid Section */}
        <section className="w-full bg-white py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-24 items-start justify-items-center">
              <Suspense fallback={<div>Loading features...</div>}>
                {featuresGrid.map((feature, index) => (
                  <ResponsiveFeatureSection
                    {...feature}
                    key={`feature-${index}`}
                    className="w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </section>

        <div className="mt-40 self-stretch">
          {/* Beta invite section */}
          <BetaInviteSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
