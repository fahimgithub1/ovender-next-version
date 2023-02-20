import Categoris from "@/components/home/categoris";
import DailyProduct from "@/components/home/dailyProduct";
import Heros from "@/components/home/heros";
import MostPopuler from "@/components/home/mostPopuler";
import OvendarMall from "@/components/home/ovendarMall";
import RewardsAndGiftSection from "@/components/home/rewardsAndGiftSection";
import ShockingSale from "@/components/home/ShockingSale";
import AddSection from "@/lib/addSection";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import HeaderCom from "../lib/header";

export default function Home() {

  return (
    <>
      <HeaderCom title="Ovendar Shopping Site" />

      <main>
        <Navber />
        <Heros />
        <RewardsAndGiftSection />
        <AddSection />
        <ShockingSale />
        <Categoris />
        <OvendarMall />
        <MostPopuler />
        <AddSection />
        <DailyProduct />

        <Footer />
      </main>
    </>
  );
}
