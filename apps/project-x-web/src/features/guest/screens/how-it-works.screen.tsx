
import { Banner } from "../components/how-it-works/banner";
import { HowItWorksText } from "../components/how-it-works/how-it-works-text";
import { AsARenter } from "../components/how-it-works/as-a-renter";
import { FindingAHome } from "../components/how-it-works/finding-a-home";
import { GetYourProperty } from "../components/how-it-works/get-your-property";
import { TrustListing } from "../components/how-it-works/trust-listing";
import { Faq } from "../components/homepage/faq";
import { EverythingYouNeed } from "../components/homepage/everything-you-need";

export const HowItWorksScreen = () => {
  return (
    <>
      <Banner />
      <HowItWorksText />
      <AsARenter />
      <FindingAHome />
      <GetYourProperty />
      <TrustListing />
      <Faq />
      <EverythingYouNeed />
    </>
  );
};
