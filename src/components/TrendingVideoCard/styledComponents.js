import styled from 'styled-components'

export const VideoCardItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 90%;
  margin-bottom: 25px;
`
export const CardVideoThumbnailImage = styled.img`
  width: 55%;
  max-width: 450px;
  height: 250px;
`
export const CardOtherDetails = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const CardTitle = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#383838' : '#f4f4f4')};
  line-height: 25px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: #7e858e;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
