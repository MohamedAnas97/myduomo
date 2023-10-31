import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/banner-main.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      {/* <div className="flex flex-col lg:flex-row"> */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pt-11 pb-14 lg:pb-60 xl:pr-14 lg:mr-10 xl:mr-0"> */}
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start  pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            Epitome of Luxury Stays
          </h2>
          <h6 className="font-semibold text-[#4f46e5] ml-1">REDEFINE LUXURY</h6>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mt-8 mb-12">
            Enhance your travel experience with our exclusive collection of
            luxury stays. From lavish villas with breathtaking views to
            sumptuous penthouses in the heart of the city, we've curated a
            portfolio of unparalleled elegance just for you.
          </span>
          <ButtonPrimary>Start your search</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
