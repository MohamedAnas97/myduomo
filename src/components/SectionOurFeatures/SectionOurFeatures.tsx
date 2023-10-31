import React, { FC } from "react";
// import rightImg from "images/our-features.png";
// import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";
import ReactPlayer from "react-player";
export interface SectionOurFeaturesProps {
  className?: string;
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "py-14",
}) => {
  const video =
    "https://res.cloudinary.com/dpr62vxd6/video/upload/v1697807207/where_to_next_lrx6cy.mp4";
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col lg:flex-row ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow " >
        {/* <NcImage src={rightImg} /> */}
        <ReactPlayer
          url={video}
          controls={false}
          loop
          playing
          playsinline={true}
          muted={true}
          className="video-container"
        />
      </div>
      <div className="max-w-2xl flex-shrink-0 mb-10 lg:mb-0 lg:pt-0 pt-3 lg:pl-16 lg:w-2/5">
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Exclusive Advantages
        </span>
        <h2 className="font-semibold text-4xl mt-5">Elite Selections</h2>
        <ul className="space-y-10 mt-8">
          <li className="space-y-4">
            <Badge name="Advertising" />
            <span className="block text-xl font-semibold">Best Prices</span>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400">
              Discover opulent listings tailored to your distinct preferences,
              ensuring the perfect match for your Dubai retreat.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Exposure " />
            <span className="block text-xl font-semibold">
              Unparalleled Residences
            </span>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400">
              From lavish private villas to exclusive penthouses, our curated
              portfolio offers the epitome of luxury accommodations in Dubai.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Secure" />
            <span className="block text-xl font-semibold">
              Enhanced Security and Absolute Privacy
            </span>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400">
              Rest assured with our advanced security measures and the utmost in
              guest privacy, ensuring your peace of mind during your luxury
              Dubai escape.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
