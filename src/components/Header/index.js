import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {IoSunny} from 'react-icons/io5'

import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'
import './index.css'

import {
  NavBar,
  NavContentContainer,
  AppLogo,
  NavItemContainer,
  NavButton,
  NavLogoutButton,
  ProfileImage,
  LogoutAlertMessage,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponents'

const lightThemeAppLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeAppLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const themeIconColor = {
    color: '#f9f9f9',
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, toggleTheme} = value
        const onClickToggleTheme = () => {
          if (theme === 'light') {
            toggleTheme('dark')
          } else {
            toggleTheme('light')
          }
        }
        const themeIcon =
          theme === 'light' ? (
            <FaMoon size={30} />
          ) : (
            <IoSunny size={30} style={themeIconColor} />
          )
        return (
          <NavBar lightMode={theme === 'light'}>
            <NavContentContainer>
              <Link to="/">
                <AppLogo
                  src={
                    theme === 'light'
                      ? lightThemeAppLogoUrl
                      : darkThemeAppLogoUrl
                  }
                  alt="website logo"
                />
              </Link>
              <NavItemContainer>
                <NavButton
                  type="button"
                  onClick={onClickToggleTheme}
                  data-testid="theme"
                >
                  {themeIcon}
                </NavButton>
                <NavButton type="button">
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavButton>
                <Popup
                  trigger={
                    <NavLogoutButton
                      lightMode={theme === 'light'}
                      type="button"
                    >
                      Logout
                    </NavLogoutButton>
                  }
                  modal
                  lockScroll
                  className="popup-content"
                >
                  {close => (
                    <>
                      <LogoutAlertMessage lightMode={theme === 'light'}>
                        Are you sure, you want to Logout?
                      </LogoutAlertMessage>
                      <div className="pop-up-button-container">
                        <PopupCancelButton
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupConfirmButton
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </div>
                    </>
                  )}
                </Popup>
              </NavItemContainer>
            </NavContentContainer>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
