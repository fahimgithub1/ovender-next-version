import LeftMenu from "@/components/userProfile/leftMenu";
import RightSide from "@/components/userProfile/rightSide";
import SectionWrapper from "@/layouts/sectionWrapper";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

const TramsAndConditons = [
  {
    id: 1,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 2,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 3,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 4,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
];

export default function UserProfile() {
  return (
    <>
      <HeaderCom title="PrivacyPolicy" />

      <main>
        <Navber />

        <SectionWrapper sectionClass="MainBodyTop HerosSection">
          <div className="row">
            <LeftMenu />
            <RightSide />
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}
