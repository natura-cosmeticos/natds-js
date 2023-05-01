import React from 'react'
import DataMockStatusBar from '../mocks/mocks'
import StepBar from '../TeamComponent/StepBar/StepBar'
import styles from './Checkout.styles'
import Header from './Header'
import Divider from '../../components/Divider/Divider'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import Summary from './Summary'
import Slide from '../TeamComponent/Slide/Slide'

const Checkout: React.FC = () => {
  const {
    container, containerBody, banner, containerSection, containerSearch,
    containerStep, sectionSearchContainer, summaryContainer
  } = styles()
  return (

    <div className={container}>
      <Header />
      <div className={containerBody}>
        <div className={banner} />
        <div className={containerSection}>

          <div className={containerStep}>
            <div className={sectionSearchContainer}>
              <StepBar dataLabel={DataMockStatusBar} />
              <Divider variant="full-bleed" />

              <div className={containerSearch}>
                <Search data="Faça seus pedidos" />
              </div>

            </div>
            <ShoppingCart />
            <Slide />
          </div>

          {/* Resume */}
          <div className={summaryContainer}>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
