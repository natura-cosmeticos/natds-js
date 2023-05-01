import React from 'react'
import styles from './styles'
import { TextField } from '../../../components/TextField'
import { Counter } from '../../../components/Counter'
import Button from '../../../components/Button'

interface SearchProps {
    data: string
}

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  (props, ref) => {
    const { data } = props
    const {
      container, title, subtitulo, containerSearch, searchRow,
      CorrectionPadding, width100, counterRow
    } = styles()
    return (
      <div ref={ref} className={container}>
        <div className={title}>
          {' '}
          { data }
        </div>

        <div className={containerSearch}>
          <span className={subtitulo}>
            Encontre seus produtos Natura,
            Avon e Casa & Estilo e finalize os
            pedidos de forma fácil.
          </span>
          <div className={searchRow}>
            <TextField className={width100} size="medium" id="T" placeholder="Insira o código ou o nome do produto" />
            <div className={counterRow}>
              <Counter className={CorrectionPadding} onIncrement={() => 1} onDecrement={() => 2} />
              <span className={CorrectionPadding}>
                <Button onClick={() => ''}>Adicionar</Button>
              </span>
            </div>
          </div>

        </div>
      </div>
    )
  }
)
export default Search
