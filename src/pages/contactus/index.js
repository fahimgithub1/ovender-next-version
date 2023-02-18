import ContactInfo from "@/components/contactus/contactInfo";
import MapAndFrom from "@/components/contactus/mapAndFrom";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";


export default function UserProfile() {
  return (
    <>
      <HeaderCom title="PrivacyPolicy" />

      <main>
        <Navber />
        <MapAndFrom />  
        <ContactInfo />        
        <Footer />
      </main>
    </>
  );
}
