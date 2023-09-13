/* eslint-disable complexity */
import React, { useState } from 'react'
import styles from './Login.style'
import TextField from '../../components/TextField/TextField'
import Logo from '../../components/Logo/Logo'
import Icon from '../../components/Icon'
import CheckBox from '../../components/Checkbox'
import Typography from '../../components/Typography'
import Button from '../../components/Button'
// import Image from '../../components/Image'
import useMedia from '../hookMedia/useMedia'
import IconButton from '../../components/IconButton'

const URLIMG = 'https://www.naturaeco.com/wp-content/uploads/sites/428/2021/06/NET-ZERO-scaled.jpg'

const Login: React.FC = (() => {
  const [password, setPassword] = useState<string>('Hello World')
  const [email, setEmail] = useState<string>('')
  const [passwordTrans, setPasswordTrans] = useState<boolean>(false)
  const [check, setCheck] = useState<boolean>(false)
  const [openImg, setOpenImg] = useState<boolean>(false)
  const { mediaOn } = useMedia(768)
  const {
    container, wrapper, wrapperLogin,
    wrapperLogo, wrapperChecks, wrapperBTN, row, colLeft, colRight, btnOpenIMG
  } = styles()
  return (
    <div className={container}>
      {
          !mediaOn && (
            <div className={btnOpenIMG}>
              <IconButton
                ariaLabel="visibility"
                backgroundStyle="float"
                size="medium"
                onClick={() => setOpenImg(!openImg)}
                IconComponent={openImg ? <Icon name="outlined-action-visibility" color="highEmphasis" /> : <Icon name="outlined-action-visibilityoff" color="highEmphasis" />}
              />
            </div>
          )
      }

      <div className={row}>
        <div className={colLeft}>
          <div className={wrapperLogo}>
            <Logo />
          </div>
          <div className={wrapperLogin}>
            <div className={wrapper}>
              <TextField
                size="mediumX"
                id="LoginEmail"
                ariaLabel="Email"
                onClick={() => setPasswordTrans(!passwordTrans)}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                label="Login"
              />

            </div>
            <div className={wrapper}>
              <TextField
                id="LoginPass"
                ariaLabel="Pass"
                onClick={() => setPasswordTrans(!passwordTrans)}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={`${passwordTrans ? 'text' : 'password'}`}
                label="Password"
                action="icon"
                IconComponent={passwordTrans ? <Icon name="outlined-action-visibility" color="highEmphasis" /> : <Icon name="outlined-action-visibilityoff" color="highEmphasis" />}
              />
            </div>
          </div>
          <div className={wrapperChecks}>
            <CheckBox value="" label="Remember me" checked={check} onChange={() => setCheck(!check)} />
            <Typography variant="body2">Forgot password?</Typography>
          </div>
          <div className={wrapperBTN}>
            <Button size="medium" fullWidth onClick={() => ''}>Login</Button>
            <Button variant="outlined" size="medium" fullWidth onClick={() => ''}>Sign In</Button>
          </div>
        </div>
        {
          !mediaOn && openImg && (
            <div className={colRight}>
              {/* <Image sourceImage={URLIMG} /> */}
              <img src={URLIMG} alt="" width="1280" />

            </div>
          )
        }

      </div>

    </div>
  )
}
)
export default Login
