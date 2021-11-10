import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 30px;
  width: 30%;
`
export const ThumbnailImage = styled.img`
  height: 180px;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 95px;
`
export const ChannelLogo = styled.img`
  height: 48px;
  width: 42px;
  padding-left: 8px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#606060' : '#f4f4f4')};
  line-height: 25px;
  padding-left: 12px;
`
export const VideoOtherDetailsContainer = styled.div`
  margin-left: 62px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: #616e7c;
  margin-top: 5px;
  margin-bottom: 5px;
  list-style-type: circle;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`
