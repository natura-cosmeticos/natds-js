import React from 'react'
import Typography from '../../components/Typography'
import styles, { ColorViewColors } from './ColorView.styles'

type tokenLab = {
    labelToken: ColorViewColors;
    keyToken: string;
  }

const ColorView = React.forwardRef<HTMLDivElement, tokenLab>(
  ({ labelToken, keyToken }, ref) => {
    const { container, colorText } = styles({ labelToken })
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px', marginBottom: '15px'
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'column', width: '240px', justifyContent: 'space-between'
        }}
        >
          <Typography variant="subtitle2">{labelToken}</Typography>
          <Typography variant="body2"><div className={colorText}>{keyToken}</div></Typography>
        </div>

        <div className={container} />
      </div>
    )
  }
)
export default ColorView
