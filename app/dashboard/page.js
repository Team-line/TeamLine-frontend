import React from 'react'
import {ControllerBoardHeader} from '@/components/ControllerBoardHeader'
import {ControllerBoardCardsSection} from '@/components/ControllerBoardCardsSection'
import {ControllerBoardDetails} from '@/components/ControllerBoardDetails'

export default function DashboardPage() {

      return (
            <div>
                  <ControllerBoardHeader />
                  <ControllerBoardCardsSection />
                  <ControllerBoardDetails />
            </div>
      )
}
