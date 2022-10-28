import {MdClose} from 'react-icons/md'

import {
  BannerBg,
  LogoCrossContainer,
  BannerLogoImage,
  BannerPara,
  BannerBtn,
} from './styledComponent'

const Banner = () => (
  <>
    <BannerBg>
      <LogoCrossContainer>
        <BannerLogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <MdClose />
      </LogoCrossContainer>
      <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
      <BannerBtn type="button">GET IT NOW</BannerBtn>
    </BannerBg>
  </>
)

export default Banner
