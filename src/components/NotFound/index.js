import Header from '../Header'
import SideNavBar from '../SideNavBar'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeAppContainer,
  HomeContentMainSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMsg,
} from './styledComponents'

const notFoundLightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const notFoundDarkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <>
          <Header />
          <HomeAppContainer>
            <SideNavBar />
            <HomeContentMainSection lightMode={theme === 'light'}>
              <NotFoundImage
                src={
                  theme === 'light'
                    ? notFoundLightThemeUrl
                    : notFoundDarkThemeUrl
                }
                alt="not found"
              />
              <NotFoundHeading lightMode={theme === 'light'}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundMsg lightMode={theme === 'light'}>
                we are sorry, the page you requested could not be found.
              </NotFoundMsg>
            </HomeContentMainSection>
          </HomeAppContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
