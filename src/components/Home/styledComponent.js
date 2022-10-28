import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
`
export const VideoSearchContainer = styled.div`
  background-color: ${props => (props.theme === true ? 'black' : '#f9f9f9')};
`
