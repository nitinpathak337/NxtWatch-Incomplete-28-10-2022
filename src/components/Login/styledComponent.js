import styled from 'styled-components'

export const LoginBG = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#2c2c2c' : '#f9f9f9')};
`

export const LoginForm = styled.div`
  width: 75%;
  padding: 4%;
  background-color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.theme === true ? 'black' : 'white')};
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 34%;
  }
`
export const LoginLogo = styled.img`
  width: 35%;
  margin-top: 10%;
  margin-bottom: 15%;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-bottom: 10%;
    margin-top: 0px;
  }
`
export const Label = styled.label`
  color: ${props => (props.theme === true ? 'white' : '#475569')};
  align-self: flex-start;
  font-weight: 600;
  margin-bottom: 1%;
  font-size: 13px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border-radius: 2px;
  padding: 2%;
  outline: none;
  border: 1px solid ${props => (props.theme === true ? ' #00306e' : '#d7dfe9')};
  height: 30px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
  margin-bottom: 6%;
  @media screen and (min-width: 768px) {
    margin-bottom: 6%;
    height: 35px;
    font-size: 16px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  align-self: flex-start;
  align-items: center;
  margin-top: 0px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    height: 19px;
    width: 19px;
  }
`

export const ShowPassword = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  width: 200px;
  margin-left: 1%;
  color: ${props => (props.theme === true ? 'white' : 'black')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 6px;
  height: 32px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: #3b82f6;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    height: 37px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 11px;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
