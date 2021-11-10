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
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 62px;
  width: 80vw;
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
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
  width: 80vw;
`
export const PosterContainer = styled.div`
  height: 150px;
  width: 100%;
  background-color: ${props => (props.lightMode ? '#f4f4f4' : '#181818')};
  display: flex;
  align-items: center;
  padding-left: 65px;
`
export const OptionIconContainer = styled.div`
  border-radius: 35px;
  height: 70px;
  width: 70px;
  background-color: ${props => (props.lightMode ? '#d7dfe9' : '#000000')};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 600;
  color: ${props => (props.lightMode ? '#231f20' : '#f9f9f9')};
  margin-left: 25px;
`
export const UnorderedVideoListContainer = styled.ul`
  padding-left: 0px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
