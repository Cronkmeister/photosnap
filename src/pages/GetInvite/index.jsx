import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import GetInviteContentSection from "./GetInviteContentSection";

export default function GetInvitePage() {
  return (
    <>
      <Helmet>
        <title>Get Your Invite – Join Photosnap Beta</title>
        <meta
          name="description"
          content="Join the Photosnap beta and be among the first to experience our revolutionary photo sharing platform. Get early access to exclusive features and help shape the future of visual storytelling."
        />
      </Helmet>

      <div className="w-full bg-white">
        <Header />
        <div className="flex flex-col items-center">
          {/* Get Invite content section */}
          <GetInviteContentSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
