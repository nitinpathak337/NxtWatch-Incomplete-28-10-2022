import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: none;
  background-color: ${props => (props.theme === true ? '#383838' : 'white')};
  @media screen and (min-width: 768px) {
    width: 25%;
    display: flex;
    min-height: 100vh;
    padding-top: 4%;
    padding-left: 0%;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Nav = styled.div`
  display: flex;
  padding-left: 4%;
  flex-direction: column;
  justify-content: flex-start;
`

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  padding-left: 0;
`

export const LinkName = styled.p`
  color: ${props => (props.theme === true ? '#f1f1f1' : '#7e858e')};
  margin-left: 30px;
  font-size: 18px;
  font-family: 'Roboto';
`
export const ContactUs = styled.p`
  color: ${props => (props.theme === true ? '#ffffff' : '#383838')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ContactPara = styled(ContactUs)`
  font-size: 17px;
`
