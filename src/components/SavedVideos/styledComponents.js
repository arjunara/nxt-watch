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
  width: 82vw;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#0f0f0f')};
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
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 55px;
`
export const NoSavedVideoImage = styled.img`
  width: 60%;
  margin-bottom: 25px;
`
export const NoSavedTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
  color: ${props => (props.lightMode ? '#231f20' : '#f4f4f4')};
  margin-top: 12px;
  margin-bottom: 5px;
`
export const NoSavedMessage = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.lightMode ? '#383838' : ' #7e858e')};
`
