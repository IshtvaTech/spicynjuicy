import FeatureBanner from '@/components/home/featureBanner'
import HeaderSection from '@/components/home/headerSection'
import IcePopBenefits from '@/components/home/icepopBenefits'
import IcePopSection from '@/components/home/icepopSection'
import ProductBenefits from '@/components/home/productBenefits'
import ProductHighlight from '@/components/home/productHighlight'
import ScrollingBar from '@/components/home/scrollingBar'
import SubcriptionSection from '@/components/home/subcriptionSection'
import React from 'react'

const ShoppingHome = () => {
  return (
    <div>
      <HeaderSection/>
      <ProductBenefits/>
      <ScrollingBar/>
      <FeatureBanner/>
      <IcePopSection/>
      <IcePopBenefits/>
      <ProductHighlight/>
      <SubcriptionSection/>
    </div>
  )
}

export default ShoppingHome
