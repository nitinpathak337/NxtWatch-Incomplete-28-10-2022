import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4%;
  margin-bottom: 0px;
  background-color: ${props => (props.theme === true ? '#383838' : 'white')};
  @media screen and (min-width: 768px) {
    padding: 2%;
  }
`

export const NavLogo = styled.img`
  width: 28%;
  @media screen and (min-width: 768px) {
    width: 12%;
  }
`
export const UL = styled.ul`
  display: ${props => (props.visible === true ? 'flex' : 'none')};
  background-color: ${props => (props.theme === true ? '#383838' : 'white')};
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  padding-top: 0;
  margin-top: 0px;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavItemsStyle = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsMd = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
`

export const ProfileImage = styled.img`
  width: 30%;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  border-radius: 3px;
  height: 31px;
  width: 85px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.theme === true ? 'white' : '#3b82f6')};
  border: 1px solid ${props => (props.theme === true ? 'white' : '#3b82f6')};
`
export const MenuOptionsSm = styled.div`
  display: ${props => (props.visible === true ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
  padding: 3%;
  width: 100%;
  font-size: 40px;
  color: ${props => (props.theme === true ? 'white' : 'black')};
  font-family: 'Roboto';
  text-decoration: none;
  color: 'red';
  @media screen and (min-width: 768px) {
    display: none;
  }
`
