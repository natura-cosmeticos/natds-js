/* eslint-disable max-len */
import React from 'react'
import AppBarTop from '../../../components/AppBarTop'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import IconButton from '../../../components/IconButton'
import Logo from '../../../components/Logo'
import Badge from '../../../components/Badge'
import useMedia from '../../hookMedia/useMedia'
import styles from './styles'
import labelText from '../../mocks/labelText'

const Header: React.FC = () => {
  const {
    surface, header, wrapper, wrapperLogo, wrapperBtn, wrapperBadge, badgePosition, badgeIconBtnPosition
  } = styles()
  const { mediaOn } = useMedia(780)
  return (
    <div className={header}>
      <AppBarTop behaviour="absolute">
        <div className={surface}>
          <div className={wrapper}>
            <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
            {
               !mediaOn
            && <span>{labelText.appBar.start}</span>
            }
          </div>
          <div className={wrapperLogo}>
            <Logo size="largeXXX" />
          </div>
          <div className={wrapperBtn}>
            {' '}
            {
            !mediaOn ? (
              <>
                <Button variant="text" onClick={() => ''} showIcon iconName="outlined-action-search" iconPosition="left">
                  <span>{labelText.appBar.search}</span>
                </Button>
                <div className={wrapperBadge}>
                  <div className={badgePosition}>
                    <Badge
                      ariaLabel="notifications"
                      className="natds-badge-0-2-2"
                      color="primary"
                      value={3}
                      variant="standard"
                    />
                  </div>
                  <Button variant="text" onClick={() => ''} showIcon iconName="outlined-finance-shoppingcart" iconPosition="left">
                    <span>{labelText.appBar.mycar}</span>
                  </Button>
                </div>
                <Button variant="text" onClick={() => ''} showIcon iconName="outlined-social-myprofile" iconPosition="left">
                  <span>{labelText.appBar.perfil}</span>
                </Button>
              </>
            ) : (
              <>
                <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
                <div className={wrapperBadge}>
                  <div className={badgeIconBtnPosition}>
                    <Badge
                      ariaLabel="notifications"
                      className="natds-badge-0-2-2"
                      color="primary"
                      value={3}
                      variant="standard"
                    />
                  </div>
                  <IconButton IconComponent={<Icon name="outlined-finance-shoppingcart" color="highlight" />} ariaLabel="menu" onClick={() => ''} />
                </div>
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
