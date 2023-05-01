import React, { useEffect, useState } from 'react'
import AppBarTop from '../../../components/AppBarTop'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import IconButton from '../../../components/IconButton'
import Logo from '../../../components/Logo'
import useMedia from '../../hookMedia/useMedia'
import styles from './styles'

const Header: React.FC = () => {
  const { surface, header } = styles()
  const { mediaOn } = useMedia(780)
  return (
    <div className={header}>
      <AppBarTop behaviour="absolute">
        <div className={surface}>
          <div style={{
            display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', border: '1 px solid red'
          }}
          >
            <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
            <span>Início</span>
          </div>
          <div style={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
            <Logo size="largeXXX" />
          </div>
          <div style={{
            display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', border: '1 px solid red'
          }}
          >
            {' '}
            {
            !mediaOn ? (
              <>
                <Button variant="text" onClick={() => ''} showIcon iconName="outlined-action-search" iconPosition="left">
                  <span>Buscar</span>
                </Button>
                <Button variant="text" onClick={() => ''} showIcon iconName="outlined-finance-shoppingcart" iconPosition="left">
                  <span>Meu Carrinho</span>
                </Button>
                <Button variant="text" onClick={() => ''} showIcon iconName="outlined-social-myprofile" iconPosition="left">
                  <span>Olá, [Nome]</span>
                </Button>
              </>
            ) : (
              <>
                <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
                <IconButton IconComponent={<Icon name="outlined-finance-shoppingcart" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
              </>
            )
           }

          </div>
        </div>
      </AppBarTop>
    </div>
  )
}

export default Header
