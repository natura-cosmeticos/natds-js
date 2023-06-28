import React from 'react'
import { HomeProps } from './Home.props'
import styles from './Home.styles'
import Header from '../Checkout/Header'
import Button from '../../components/Button'

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  (props, ref) => {
    const {
      container, containerSwitchTheme, wrapperBrandButtons,
      wrapperColumn, containerTimeCounter, containerBanner
    } = styles()
    return (
      <div className={container} ref={ref}>
        <Header />

        <div className={containerSwitchTheme}>
          <div className={wrapperColumn}>
            <div>Clic y navegue por nuestras marcas</div>
            <div className={wrapperBrandButtons}>
              <Button onClick={() => ''} variant="outlined">
                Natura
              </Button>
              <Button onClick={() => ''} variant="outlined">
                Avon
              </Button>
              <Button onClick={() => ''} variant="outlined">
                Casa & Estilo
              </Button>
            </div>

            <div className={containerTimeCounter}>
              <div style={{ width: '100%', flex: 1 }}>Ciclo actual: 01 | 24/12 a 21/01</div>
              <div style={{ width: '100%', flex: 2 }}>Tiempo para cerrar el ciclo: 2 dias | 12 horas | 45 minutos | 45 minutos</div>
              <div style={{ width: '100%', flex: 1 }} />
            </div>

          </div>

        </div>
        <div className={containerBanner}>
          oi
        </div>
      </div>
    )
  }
)
export default Home
