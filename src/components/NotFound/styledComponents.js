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
  justify-content: center;
  align-items: center;
  margin-left: 18vw;
  margin-top: 18vh;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#0f0f0f')};
  width: 82vw;
`
export const NotFoundImage = styled.img`
  width: 50%;
  height: 412px;
  margin-top: 65px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 600;
  color: ${props => (props.lightMode ? '#231f20' : '#f9f9f9')};
  margin-bottom: 15px;
`
export const NotFoundMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 0px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#383838' : ' #7e858e')};
  text-align: center;
`
