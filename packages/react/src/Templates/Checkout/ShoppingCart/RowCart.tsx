/* eslint-disable max-len */
import React from 'react'
import Button from '../../../components/Button'
import Counter from '../../../components/Counter'
import Icon from '../../../components/Icon'
import labelText from '../../mocks/labelText'
import { IDataCartProps } from '../../mocks/mocks'
import Targ from '../Targ'
import styles from './styles'
import Image from '../../../components/Image'

const RowCart = React.forwardRef<HTMLDivElement, IDataCartProps>(
  (props, ref) => {
    const {
      prodTitle,
      url = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png',
      brand,
      code,
      point,
      theme,
      price
    } = props
    const {
      cell, flex1, noBorder, empety, tableColumn, productorContainer,
      productorRow, imgWrapper, prodWrapper, tagContainer, cardTitle, cardBody,
      cardFooter, CorrectionPadding, codBrand, colorLow
    } = styles()
    return (
      <div ref={ref} className={tagContainer}>
        <Targ label="on" size="small" top={24} brand={theme} mode="light" />
        <div className={tableColumn}>
          <div className={`${cell} ${noBorder} ${flex1}`}>
            <div className={productorContainer}>
              <div className={productorRow}>
                <div className={imgWrapper}>
                  <Image sourceImage="INVALID_URL" fallbackImage={url} />

                </div>
                <div className={prodWrapper}>
                  <div className={cardTitle}>
                    {prodTitle}
                  </div>
                  <div className={cardBody}>
                    <span>{brand}</span>
                    <div className={codBrand}>
                      <div className={colorLow}>
                        {`${labelText.mycar.tableCardRow.code}:`}
                      </div>
                      <div>
                        {code}
                      </div>
                    </div>
                    <div className={codBrand}>
                      <div className={colorLow}>
                        {`${labelText.mycar.tableCardRow.dots}:`}
                      </div>
                      <div>
                        {point}
                      </div>
                    </div>
                  </div>
                  <div className={cardFooter}>
                    <Counter className={CorrectionPadding} onIncrement={() => 1} onDecrement={() => 2} />
                    <span className={CorrectionPadding}>
                      <Button onClick={() => ''}>{`${labelText.mycar.tableCardRow.btnUpdate}`}</Button>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className={`${cell} ${noBorder}`}>
            <div>
              {price}
            </div>
          </div>
          <div className={`${cell} ${noBorder}`}>
            {price}
          </div>
          <div className={`${cell} ${noBorder}`}>
            {price}
          </div>
          <div className={`${cell} ${noBorder}`}>
            {price}
          </div>
          <div className={`${cell} ${noBorder} ${empety}`}>
            <Icon size="small" name="filled-action-delete" color="highEmphasis" />
          </div>
        </div>
      </div>
    )
  }
)
export default RowCart
