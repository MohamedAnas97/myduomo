import React, { FC } from "react";
import { Helmet } from "react-helmet";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
export interface PageAboutProps {
  className?: string;
}
const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container py-16 lg:py-20 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={""}
          heading="ONLINE BOOKING TERMS & CONDITIONS"
          btnText=""
          subHeading=""
        />
      </div>
    </div>
  );
};

export default PageAbout;
