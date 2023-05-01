/* eslint-disable max-len */
import React, { useState } from 'react'
import Button from '../../../components/Button'
import Counter from '../../../components/Counter'
import Divider from '../../../components/Divider/Divider'
import Icon from '../../../components/Icon'
import useMedia from '../../hookMedia/useMedia'
import { dataCart } from '../../mocks/mocks'
import Targ from '../Targ'
import MobiCart from './MobiCart/MobiCart'
import RowCart from './RowCart'
import styles from './styles'

const ShoppingCart: React.FC = () => {
  const [data, setData] = useState('S/0.000.00')
  const { mediaOn } = useMedia(780)
  const {
    container, header, title, subtitulo, tableConteiner,
    tableRow, cell, flex1, noBorder, empety, tableColumn, footer, productorContainer,
    productorRow, imgWrapper, prodWrapper, tagContainer, cardTitle, cardBody,
    cardFooter, CorrectionPadding, codBrand, colorLow
  } = styles()
  return (
    <div className={container}>
      <div className={header}>
        <div className={title}>
          Meu Carrinho
        </div>
        <div className={subtitulo}>
          Agora seus produtos estão agrupados por marca e para ver mais detalhes basta selecionar a marca.
        </div>
      </div>
      <div className={tableConteiner}>
        {/* Header */}
        <div className={tableRow}>
          <div className={`${cell} ${flex1}`}>
            Produtos
          </div>
          { !mediaOn
        && (
        <>

          <div className={cell}>
            Compra uni.
          </div>
          <div className={cell}>
            Oferta
          </div>
          <div className={cell}>
            Receita
          </div>
          <div className={`${cell} ${noBorder}`}>
            Compra
          </div>
          <div className={`${cell} ${noBorder} ${empety}`}>
            {'   '}
          </div>
        </>
        )}
        </div>
        {/* Row */}
        {
          !mediaOn
            ? (dataCart.map((elo) => (
              <>
                <RowCart
                  prodTitle={elo.prodTitle}
                  brand={elo.brand}
                  theme={elo.theme}
                  code={elo.code}
                  point={elo.point}
                  price={elo.price}
                  url={elo.url}
                />
                <Divider variant="middle" />
              </>
            ))) : (
              dataCart.map((elo) => (
                <>
                  <MobiCart
                    prodTitle={elo.prodTitle}
                    brand={elo.brand}
                    theme={elo.theme}
                    code={elo.code}
                    point={elo.point}
                    price={elo.price}
                    url={elo.url}
                  />
                  <Divider variant="middle" />
                </>
              ))
            )
        }
      </div>
      <div className={footer}>
        <Button variant="outlined" onClick={() => ''}>
          Eliminar Todos
        </Button>
      </div>
    </div>
  )
}

export default ShoppingCart
