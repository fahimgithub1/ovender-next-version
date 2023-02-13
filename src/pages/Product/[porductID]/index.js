// import MainBodyRewards from '@/components/rewardsAndGift/mainBodyRewards'
import ProductDiscription from '@/components/Product/productDiscription'
import ProductView from '@/components/Product/productView'
import ShopRatting from '@/components/Product/shopRatting'
import HeaderCom from '@/lib/header'
import Footer from '@/navAndFooter/footer'
import Navber from '@/navAndFooter/navber'
import React from 'react'

export default function RewardsAndGift() {
  return (
    <>
      <HeaderCom title="Rewards And Gift" />

      <main>
        <Navber />
        <ProductView />
        <ShopRatting />
        <ProductDiscription />

        <Footer/>
      </main>
    </>
  )
}
