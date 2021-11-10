import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  SideNavContainer,
  NavListContainer,
  NavItemContainer,
  NavItem,
  ContactUsSection,
  SocialIconContainer,
  SocialDescription,
  SocialIcon,
} from './styledComponents'

import './index.css'

class SideNavBar extends Component {
  state = {}

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const navIconStyle = {
            color: theme === 'light' ? '#212121' : ' #cccccc',
          }
          return (
            <SideNavContainer lightMode={theme === 'light'}>
              <NavListContainer>
                <Link to="/" className="item-link" onClick={this.onClickHome}>
                  <NavItemContainer>
                    <AiFillHome size={20} style={navIconStyle} />
                    <NavItem lightMode={theme === 'light'}>Home</NavItem>
                  </NavItemContainer>
                </Link>
                <Link
                  to="/trending"
                  className="item-link"
                  onClick={this.onClickTrending}
                >
                  <NavItemContainer>
                    <FaFire size={20} style={navIconStyle} />
                    <NavItem lightMode={theme === 'light'}>Trending</NavItem>
                  </NavItemContainer>
                </Link>
                <Link to="/gaming" className="item-link">
                  <NavItemContainer>
                    <IoGameController size={20} style={navIconStyle} />
                    <NavItem lightMode={theme === 'light'}>Gaming</NavItem>
                  </NavItemContainer>
                </Link>
                <Link to="/saved-videos" className="item-link">
                  <NavItemContainer>
                    <MdPlaylistAdd size={20} style={navIconStyle} />
                    <NavItem lightMode={theme === 'light'}>
                      Saved Videos
                    </NavItem>
                  </NavItemContainer>
                </Link>
              </NavListContainer>
              <ContactUsSection>
                <SocialDescription title="true" lightMode={theme === 'light'}>
                  CONTACT US
                </SocialDescription>
                <SocialIconContainer>
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconContainer>
                <SocialDescription lightMode={theme === 'light'}>
                  Enjoy! Now to see your channels and recommendations!
                </SocialDescription>
              </ContactUsSection>
            </SideNavContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideNavBar
