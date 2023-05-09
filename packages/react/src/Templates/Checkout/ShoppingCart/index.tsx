/* eslint-disable max-len */
import React from 'react'
import Button from '../../../components/Button'
import Divider from '../../../components/Divider/Divider'
import useMedia from '../../hookMedia/useMedia'
import labelText from '../../mocks/labelText'
import { dataCart } from '../../mocks/mocks'
import MobiCart from './MobiCart/MobiCart'
import RowCart from './RowCart'
import styles from './styles'

const ShoppingCart: React.FC = () => {
  const { mediaOn } = useMedia(780)
  const {
    container, header, title, subtitulo, tableConteiner,
    tableRow, cell, flex1, noBorder, empety, footer
  } = styles()
  return (
    <div className={container}>
      <div className={header}>
        <div className={title}>
          {labelText.mycar.title}
        </div>
        <div className={subtitulo}>
          {labelText.mycar.subTitle}
        </div>
      </div>
      <div className={tableConteiner}>
        {/* Header */}
        <div className={tableRow}>
          <div className={`${cell} ${flex1}`}>
            {labelText.mycar.tableHead.product}
          </div>
          { !mediaOn
        && (
        <>

          <div className={cell}>
            {labelText.mycar.tableHead.purchaseUni}
          </div>
          <div className={cell}>
            {labelText.mycar.tableHead.offer}
          </div>
          <div className={cell}>
            {labelText.mycar.tableHead.incoming}
          </div>
          <div className={`${cell} ${noBorder}`}>
            {labelText.mycar.tableHead.purchase}
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
          {`${labelText.mycar.tableCardRow.allDelete}`}
        </Button>
      </div>
    </div>
  )
}

export default ShoppingCart
