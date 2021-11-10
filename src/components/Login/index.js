import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LogInBgContainer,
  LoginCardContainer,
  AppLogo,
  FormContainer,
  InputContainer,
  Label,
  Input,
  InputCheckbox,
  ShowPasswordLabel,
  LoginButton,
  ShowPasswordContainer,
  ErrorMsg,
} from './styledComponents'

const lightThemeAppLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeAppLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    isPasswordShow: false,
    errMsg: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState({isPasswordShow: event.target.checked})
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    history.replace('/')
  }

  onFailureLogin = errMsg => {
    this.setState({errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {
      username: usernameInput,
      password: passwordInput,
    }
    const logInApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const logInResponse = await fetch(logInApiUrl, options)
    const body = await logInResponse.json()
    if (body.status_code !== 400) {
      this.onSuccessLogin(body.jwt_token)
    } else {
      console.log(body)
      this.onFailureLogin(body.error_msg)
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            usernameInput,
            passwordInput,
            isPasswordShow,
            errMsg,
          } = this.state
          const {theme} = value
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LogInBgContainer isLightMode={theme === 'light'}>
              <LoginCardContainer isLightMode={theme === 'light'}>
                <AppLogo
                  src={
                    theme === 'light'
                      ? lightThemeAppLogoUrl
                      : darkThemeAppLogoUrl
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label isLightMode={theme === 'light'} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      name="username"
                      value={usernameInput}
                      onChange={this.onChangeUsername}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label isLightMode={theme === 'light'} htmlFor="password">
                      PASSWORD
                    </Label>
                    <Input
                      type={isPasswordShow ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      name="password"
                      value={passwordInput}
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>
                  <ShowPasswordContainer>
                    <InputCheckbox
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onChangeCheckbox}
                    />
                    <ShowPasswordLabel
                      isLightMode={theme === 'light'}
                      htmlFor="checkbox"
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {errMsg && <ErrorMsg>*{errMsg}</ErrorMsg>}
                </FormContainer>
              </LoginCardContainer>
            </LogInBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
