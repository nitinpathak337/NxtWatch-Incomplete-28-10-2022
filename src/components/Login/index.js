import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginBG,
  LoginForm,
  LoginLogo,
  Label,
  Input,
  Checkbox,
  ShowPassword,
  CheckboxContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      this.onSuccessLogin(jwtToken)
    } else {
      const data = await response.json()

      this.onFailureLogin(data.error_msg)
    }
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    console.log(errorMsg)
    this.setState({errorMsg, showError: true})
  }

  render() {
    const {isChecked, errorMsg, showError} = this.state
    const passwordType = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          return (
            <LoginBG theme={isDarkTheme}>
              <LoginForm theme={isDarkTheme}>
                <LoginLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <Label htmlFor="username" theme={isDarkTheme}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  theme={isDarkTheme}
                  id="username"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="password" theme={isDarkTheme}>
                  PASSWORD
                </Label>
                <Input
                  type={passwordType}
                  theme={isDarkTheme}
                  id="password"
                  onChange={this.onChangePassword}
                  placeholder="Password"
                />
                <CheckboxContainer>
                  <Checkbox type="checkbox" onChange={this.onCheckbox} />
                  <ShowPassword theme={isDarkTheme}>Show Password</ShowPassword>
                </CheckboxContainer>
                <LoginButton type="button" onClick={this.onLogin}>
                  Login
                </LoginButton>
                {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginBG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
