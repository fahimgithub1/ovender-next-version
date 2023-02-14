import ProductDiscription from '@/components/Product/productDiscription'
import ProductView from '@/components/Product/productView'
import RelatedProduct from '@/components/Product/relatedProduct'
import Review from '@/components/Product/Review'
import ShopRatting from '@/components/Product/shopRatting'
import AddSection from '@/lib/addSection'
import HeaderCom from '@/lib/header'
import Footer from '@/navAndFooter/footer'
import Navber from '@/navAndFooter/navber'
import { useRouter } from 'next/router'

const img = "";

export default function ProductPage() {
  const router = useRouter()
  const porductID = router.query.porductID;
  let reward1 = porductID;

  return (
    <>
      <HeaderCom title={`product ${reward1}`} />

      <main>
        <Navber />
        <ProductView />
        <ShopRatting />
        <ProductDiscription />
        <Review />
        <AddSection img={img} />
        <RelatedProduct />
        <Footer/>
      </main>
    </>
  )
}
