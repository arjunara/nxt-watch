import styled from 'styled-components'

export const SideNavContainer = styled.div`
  width: 18vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  position: fixed;
  margin-top: 18vh;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#231f20')};
`
export const NavListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0px;
`
export const NavItemContainer = styled.li`
  display: flex;
  list-style-type: none;
  align-items: center;
  height: 40px;
`
export const NavItem = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#1e293b' : '#f1f1f1')};
  margin-left: 18px;
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialDescription = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.title ? 22 : 18)}px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#1e293b' : '#f1f1f1')};
`
export const SocialIcon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 18px;
`
