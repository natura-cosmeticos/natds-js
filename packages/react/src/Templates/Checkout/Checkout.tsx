import React from 'react'
import DataMockStatusBar, { dataCartSlide } from '../mocks/mocks'
import StepBar from '../TeamComponent/StepBar/StepBar'
import styles from './Checkout.styles'
import Header from './Header'
import Divider from '../../components/Divider/Divider'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import Summary from './Summary'
import Slide from '../TeamComponent/Slide/Slide'
import CardSlide from '../TeamComponent/Slide/CardSlide'

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
                <Search />
              </div>

            </div>
            <ShoppingCart />
            <Slide>
              {
                dataCartSlide.map((elo) => (

                  <CardSlide
                    prodTitle={elo.prodTitle}
                    brand={elo.brand}
                    theme={elo.theme}
                    code={elo.code}
                    point={elo.point}
                    price={elo.price}
                    url={elo.url}
                  />

                ))
              }

            </Slide>
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
