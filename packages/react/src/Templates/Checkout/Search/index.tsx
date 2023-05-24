import React from 'react'
import styles from './styles'
import { TextField } from '../../../components/TextField'
import { Counter } from '../../../components/Counter'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import labelText from '../../mocks/labelText'

const Search = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const {
      container, title, subtitulo, containerSearch, searchRow,
      CorrectionPadding, width100, counterRow, wrapperIcon, iconPossition
    } = styles()
    return (
      <div ref={ref} className={container}>
        <div className={title}>
          {' '}
          {labelText.search.title}
        </div>

        <div className={containerSearch}>
          <span className={subtitulo}>
            {labelText.search.subTitle}
          </span>
          <div className={searchRow}>
            <div className={wrapperIcon}>
              <TextField onClick={() => ''} ariaLabel="Search" action="icon" IconComponent={<Icon name="outlined-action-search" color="highlight" />} className={width100} size="medium" id="T" placeholder={labelText.search.placeHolder} />
            </div>
            <div className={counterRow}>
              <Counter className={CorrectionPadding} onIncrement={() => 1} onDecrement={() => 2} />
              <span className={CorrectionPadding}>
                <Button onClick={() => ''}>{labelText.search.buttonAdd}</Button>
              </span>
            </div>
          </div>

        </div>
      </div>
    )
  }
)
export default Search
