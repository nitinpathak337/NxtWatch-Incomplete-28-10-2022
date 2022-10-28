import Navbar from '../Navbar/index'
import Banner from '../Banner/index'
import MediumMenuOptions from '../MediumMenuOptions/index'

import {ContentContainer} from './styledComponent'

const Trending = () => (
  <>
    <Navbar />
    <ContentContainer>
      <MediumMenuOptions />
      <Banner />
    </ContentContainer>
  </>
)
export default Trending
