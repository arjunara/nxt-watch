import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 18vh;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#231f20')};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
`
export const NavContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AppLogo = styled.img`
  height: 45px;
`
export const NavItemContainer = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-around;
`
export const NavButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const ProfileImage = styled.img`
  height: 36px;
  width: 36px;
`
export const NavLogoutButton = styled.button`
  border: 2px solid ${props => (props.lightMode ? '#3b82f6' : '#f1f1f1')};
  color: ${props => (props.lightMode ? '#3b82f6' : '#ffffff')};
  width: 98px;
  height: 38px;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const LogoutAlertMessage = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #383838;
  margin-top: 35px;
`
export const PopupCancelButton = styled(NavLogoutButton)`
  border: 2px solid #909090;
  color: #909090;
`
export const PopupConfirmButton = styled(NavLogoutButton)`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
`
