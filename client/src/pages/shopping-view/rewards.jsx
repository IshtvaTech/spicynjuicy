import EarnPoints from '@/components/rewards-page/earnPoints'
import QuestionSection from '@/components/rewards-page/questionSection'
import RewardsSection from '@/components/rewards-page/rewardsSection'
import VipRewards from '@/components/rewards-page/vipRewards'
import React from 'react'

const RewardsPage = () => {
  return (
    <div>
    <RewardsSection/>
    <VipRewards/>
    <EarnPoints/>
    <QuestionSection/>
      
    </div>
  )
}

export default RewardsPage
