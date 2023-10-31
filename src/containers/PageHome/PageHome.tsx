import SectionHero from "components/SectionHero/SectionHero";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React from "react";
// import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
// import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { TaxonomyType } from "data/types";
// import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
// import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
// import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
// import SectionVideos from "./SectionVideos";
// import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import { Helmet } from "react-helmet";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Dubai Marina",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/dubai-ma.jpg"),
  },
  {
    id: "2",
    href: "#",
    name: "Jumeirah Lakes Towers (JLT)",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/jlt.jpg"),
  },
  {
    id: "2",
    href: "#",
    name: "Jumeirah Beach Residence (JBR)",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/jb.jpg"),
  },
  {
    id: "2",
    href: "#",
    name: "Al Barsha",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/al-barsha.png"),
  },
  {
    id: "2",
    href: "#",
    name: "Downtown Dubai",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/down.jpg"),
  },
  {
    id: "2",
    href: "#",
    name: "Dubai Hills",
    taxonomy: "category",
    count: 188288,
    thumbnail: require("../../images/place/dubai-hills.png"),
  },
];

// const DEMO_CATS_2: TaxonomyType[] = [
//   {
//     id: "1",
//     href: "#",
//     name: "Enjoy the great cold",
//     taxonomy: "category",
//     count: 188288,
//     thumbnail:
//       "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//   },
//   {
//     id: "222",
//     href: "#",
//     name: "Sleep in a floating way",
//     taxonomy: "category",
//     count: 188288,
//     thumbnail:
//       "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "3",
//     href: "#",
//     name: "In the billionaire's house",
//     taxonomy: "category",
//     count: 188288,
//     thumbnail:
//       "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "4",
//     href: "#",
//     name: "Cool in the deep forest",
//     taxonomy: "category",
//     count: 188288,
//     thumbnail:
//       "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "5",
//     href: "#",
//     name: "In the billionaire's house",
//     taxonomy: "category",
//     count: 188288,
//     thumbnail:
//       "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
// ];

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Duomo Tourism</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-28 pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />

        {/* SECTION2 */}
        <SectionOurFeatures />

        {/* SECTION */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>

        {/* SECTION */}
        {/* <SectionHowItWork /> */}

        {/* SECTION 1 */}
        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div> */}

        {/* SECTION */}
        {/* <SectionSubscribe2 /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}
        {/* SECTION */}
        {/* <SectionGridCategoryBox /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}

        {/* SECTION 1 */}
        {/* <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        /> */}

        {/* SECTION */}
        {/* <SectionVideos /> */}

        {/* SECTION */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}
      </div>
    </div>
  );
}

export default PageHome;
