import CategorisHeros from "@/components/categories/categorisHeros";
import MainBody from "@/components/categories/mainBody";
import SectionWrapper from "@/layouts/sectionWrapper";
import HeaderCom from "@/lib/header";
import PagesHeros from "@/lib/pagesHeros";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import { useRouter } from "next/router";
import React from "react";


export default function Categories() {
  const router =  useRouter()
  const CategoriesID = router.query.CategoriesID;

  return (
    <>
      <HeaderCom title={`Categorie  ${CategoriesID}`} />

      <main>
        <Navber />

        <SectionWrapper sectionClass="MainBodyTop HerosSection">
          <CategorisHeros />
          <MainBody />
        </SectionWrapper>  

        <Footer />
      </main>
    </>
  );
}
