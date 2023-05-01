/* eslint-disable max-len */
import React, { useState } from 'react'
import Button from '../../../components/Button'
import Counter from '../../../components/Counter'
import Icon from '../../../components/Icon'
import { IDataCartProps } from '../../mocks/mocks'
import Targ from '../Targ'
import styles from './styles'

const RowCart = React.forwardRef<HTMLDivElement, IDataCartProps>(
  (props, ref) => {
    const {
      prodTitle, url, brand, code, point, theme
    } = props
    const [data, setData] = useState('S/0.000.00')
    const {
      cell, flex1, noBorder, empety, tableColumn, productorContainer,
      productorRow, imgWrapper, prodWrapper, tagContainer, cardTitle, cardBody,
      cardFooter, CorrectionPadding, codBrand, colorLow
    } = styles()
    return (
      <div className={tagContainer}>
        <Targ label="on" size="small" top={24} brand={theme} mode="light" />
        <div className={tableColumn}>
          <div className={`${cell} ${noBorder} ${flex1}`}>
            <div className={productorContainer}>
              <div className={productorRow}>
                <div className={imgWrapper}>
                  IMG
                </div>
                <div className={prodWrapper}>
                  <div className={cardTitle}>
                    {prodTitle}
                  </div>
                  <div className={cardBody}>
                    <span>{brand}</span>
                    <div className={codBrand}>
                      <div className={colorLow}>
                        Código:
                      </div>
                      <div>
                        {code}
                      </div>
                    </div>
                    <div className={codBrand}>
                      <div className={colorLow}>
                        Pontos:
                      </div>
                      <div>
                        {point}
                      </div>
                    </div>
                  </div>
                  <div className={cardFooter}>
                    <Counter className={CorrectionPadding} onIncrement={() => 1} onDecrement={() => 2} />
                    <span className={CorrectionPadding}>
                      <Button onClick={() => ''}>Atualizar</Button>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className={`${cell} ${noBorder}`}>
            <div>
              {data}
            </div>
          </div>
          <div className={`${cell} ${noBorder}`}>
            {data}
          </div>
          <div className={`${cell} ${noBorder}`}>
            {data}
          </div>
          <div className={`${cell} ${noBorder}`}>
            {data}
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
