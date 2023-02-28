import ProductDiscription from "@/components/Product/productDiscription";
import ProductView from "@/components/Product/productView";
import RelatedProduct from "@/components/Product/relatedProduct";
import Review from "@/components/Product/review";
import ShopRatting from "@/components/Product/shopRatting";
import AddSection from "@/lib/addSection";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import { useGetSingleProductsQuery } from "@/pages/api/apiSlices";
import { useRouter } from "next/router";

const img = "";

export default function ProductPage() {
  const router = useRouter();
  const porductID = router.query.porductID;
  let reward1 = porductID;

  const {
    data: singleProduct,
    isLoading,
    error,
  } = useGetSingleProductsQuery(reward1);

  let mainBody = "";
  if (singleProduct != undefined) {
    mainBody = (
      <>
        <HeaderCom title={`${singleProduct.data.name}`} />

        <main>
          <Navber />
          <ProductView singleProduct={singleProduct.data} />
          <ShopRatting />
          <ProductDiscription singleProduct={singleProduct.data} />
          <Review />
          <AddSection img={img} />
          <RelatedProduct />
          <Footer />
        </main>
      </>
    );
  }

  // console.log(singleProduct.data)

  return !isLoading && !error && mainBody;
}
