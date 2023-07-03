/* eslint-disable complexity */
import React, { useState } from 'react'
import { HomeProps } from './Home.props'
import styles from './Home.styles'
import Header from '../Checkout/Header'
import Slide from '../TeamComponent/Slide/Slide'
import CardSlide from '../TeamComponent/Slide/CardSlide'
import mockNatura from './mockHome/Natura.mock'
import mockAvon from './mockHome/Avon.mock'
import mockCasaEestilo from './mockHome/CasaEestilo.mock'
import LogoButton from './LogoButton/LogoButton'
import SlideBanner from './SlideBanner/SlideBanner'
import useMedia from '../hookMedia/useMedia'
import { BrandProps } from '../GlobalTypes'

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  (props, ref) => {
    const [activeLogoBtn, setActiveLogoBtn] = useState<BrandProps | undefined>('natura_v2')
    const { mediaOn } = useMedia(1064)
    const handleActive = (brands: BrandProps) => (activeLogoBtn === brands)
    const {
      container, containerSwitchTheme, wrapperBrandButtons,
      wrapperColumn, containerTimeCounter, containerBanner,
      containerSlides, TextRegular
    } = styles()
    return (
      <div className={container} ref={ref}>
        <Header />

        <div className={containerSwitchTheme}>
          <div className={wrapperColumn}>
            <div>Clic y navegue por nuestras marcas</div>
            <div className={wrapperBrandButtons}>
              <LogoButton onClick={() => setActiveLogoBtn('natura_v2')} brand="natura_v2" model="a" size="largeXX" isActive={handleActive('natura_v2')} />
              <LogoButton onClick={() => setActiveLogoBtn('avon')} brand="avon" model="a" size="mediumX" isActive={handleActive('avon')} />
              <LogoButton onClick={() => setActiveLogoBtn('casaEestilo')} brand="casaEestilo" model="a" size="mediumX" isActive={handleActive('casaEestilo')} />
            </div>

            <div className={containerTimeCounter}>
              <div style={!mediaOn ? { width: '100%', flex: 1 } : {
                display: 'flex', justifyContent: 'center', width: '100%', flex: 1
              }}
              >
                <span className={TextRegular}>Ciclo actual:</span>
                {' '}
                <span>01 | 24/12</span>
                {' '}
                <span className={TextRegular}>a</span>
                {' '}
                <span>21/01</span>
              </div>
              {
                !mediaOn
                && (
                <>
                  <div style={{
                    display: 'flex', justifyContent: 'center', width: '100%', flex: 2, gap: 4
                  }}
                  >
                    <span className={TextRegular}> Tiempo para cerrar el ciclo:</span>
                    {' '}
                    <span>2</span>
                    {' '}
                    <span className={TextRegular}>dias</span>
                    {' '}
                    <span className={TextRegular}>|</span>
                    {' '}
                    <span>12</span>
                    {' '}
                    <span className={TextRegular}>horas</span>
                    {' '}
                    <span className={TextRegular}>|</span>
                    {' '}
                    <span>45</span>
                    {' '}
                    <span className={TextRegular}>minutos</span>
                    {' '}
                    <span className={TextRegular}>|</span>
                    {' '}
                    <span>48</span>
                    {' '}
                    <span className={TextRegular}>segundos</span>
                  </div>
                  <div style={{ width: '100%', flex: 1 }} />
                </>
                )
              }
            </div>

          </div>

        </div>
        <div className={containerBanner}>
          <SlideBanner brand={activeLogoBtn} />
        </div>
        <div className={containerSlides}>
          {
            activeLogoBtn === 'natura_v2'
            && (
            <Slide brand="natura_v2" slideTitle="Novidades Natura">
              {
              mockNatura.map((elo) => (

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
            )
          }
          {
            activeLogoBtn === 'avon'
            && (
            <Slide brand="avon" slideTitle="Novidades Avon">
              {
              mockAvon.map((elo) => (

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
            )
          }
          {
            activeLogoBtn === 'casaEestilo'
            && (
            <Slide brand="casaEestilo" slideTitle="Novidades Casa & Estilo">
              {
              mockCasaEestilo.map((elo) => (

                <CardSlide
                  prodTitle={elo.prodTitle}
                  brand={elo.brand}
                  code={elo.code}
                  theme={elo.theme}
                  point={elo.point}
                  price={elo.price}
                  url={elo.url}
                />

              ))
            }

            </Slide>
            )
          }

        </div>
      </div>
    )
  }
)
export default Home
