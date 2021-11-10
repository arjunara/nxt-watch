import styled from 'styled-components'

export const PosterContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 38vh;
  width: 80vw;
  padding: 22px;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
`
export const PosterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`
export const AppLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const PosterText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  color: #383838;
`
export const GetItNowButton = styled.button`
  border: 2px solid #383838;
  color: #383838;
  width: 130px;
  height: 38px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const CloseIconContainer = styled.div`
  align-self: flex-start;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 20px;
`
