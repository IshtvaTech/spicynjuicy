import SubcriptionSection from '@/components/home/subcriptionSection'
import FAQSection from '@/components/subscribe-page/faqSection'
import SubscriptionFeatures from '@/components/subscribe-page/subcriptionFeatures'
import SubscribeSection2 from '@/components/subscribe-page/subscriptionSection2'
import React from 'react'

const SubscribePage = () => {
  return (
    <div>
      <SubcriptionSection/>
      <SubscribeSection2/>
      <SubscriptionFeatures/>
      <FAQSection/>
    </div>
  )
}

export default SubscribePage
