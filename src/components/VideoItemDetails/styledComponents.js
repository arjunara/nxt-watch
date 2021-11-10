import styled from 'styled-components'

export const HomeAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
`
export const HomeContentMainSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18vw;
  margin-top: 18vh;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#0f0f0f')};
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
  padding-left: 380px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
  padding-bottom: 62px;
`
export const FailureImage = styled.img`
  width: 50%;
  height: 412px;
`
export const FailureMsgHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 600;
  color: ${props => (props.lightMode ? '#231f20' : '#f4f4f4')};
  margin-bottom: 10px;
`
export const FailureMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#383838' : ' #7e858e')};
  text-align: center;
`
export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #4f46e5;
  height: 34px;
  width: 82px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 20px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 82vw;
  border: 2px solid red;
  padding: 35px;
  padding-left: 65px;
  overflow-y: auto;
`
export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  border-bottom: 2px solid #cbd5e1;
  margin-bottom: 15px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#606060' : '#ebebeb')};
  line-height: 25px;
  margin-top: 25px;
`
export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  color: ${props => (props.lightMode ? '#616e7c' : '#ebebeb')};
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`
export const VideoOptionsContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`
export const HitButtonLikeContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  border: none;
  outline: none;
  cursor: pointer;
  width: 90px;
  margin-right: 12px;
`
export const HitButtonDislikeContainer = styled(HitButtonLikeContainer)`
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`
export const HitButtonSaveContainer = styled(HitButtonLikeContainer)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`
export const VideoChannelLogoContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 55px;
  width: 48px;
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: #616e7c;
  margin-top: 5px;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: ${props => (props.lightMode ? '#616e7c' : '#ebebeb')};
  margin-left: 73px;
`
