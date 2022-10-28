import styled from 'styled-components'

export const BannerBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 8%;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 4%;
  }
`

export const LogoCrossContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BannerLogoImage = styled.img`
  width: 45%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const BannerPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  width: 50%;
  color: #212121;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const BannerBtn = styled.button`
  height: 32px;
  width: 100px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 600;
  color: #212121;
  border: 1px solid #212121;
  border-radius: 2px;
`
