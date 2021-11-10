import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeAppContainer,
  HomeContentMainSection,
  PosterContainer,
  OptionIconContainer,
  SavedVideoHeading,
  UnorderedVideoListContainer,
  NoVideosContainer,
  NoSavedVideoImage,
  NoSavedTitle,
  NoSavedMessage,
} from './styledComponents'

class SavedVideos extends Component {
  state = {savedList: [], isShowSavedList: false}

  componentDidMount() {
    const parsedSaveList = JSON.parse(localStorage.getItem('savedList'))
    if (parsedSaveList === null || parsedSaveList.length === 0) {
      this.setState({isShowSavedList: false})
    } else {
      this.setState({savedList: parsedSaveList, isShowSavedList: true})
    }
  }

  renderSavedVideosPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const {savedList} = this.state
        return (
          <>
            <PosterContainer lightMode={theme === 'light'}>
              <OptionIconContainer lightMode={theme === 'light'}>
                <MdPlaylistAdd size={35} style={{color: ' #ff0b37'}} />
              </OptionIconContainer>
              <SavedVideoHeading lightMode={theme === 'light'}>
                Saved Videos
              </SavedVideoHeading>
            </PosterContainer>
            <UnorderedVideoListContainer>
              {savedList.map(each => (
                <TrendingVideoCard key={each.id} videoCardDetails={each} />
              ))}
            </UnorderedVideoListContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoSavedVideosPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <>
            <NoVideosContainer>
              <NoSavedVideoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedTitle lightMode={theme === 'light'}>
                No Saved videos Found
              </NoSavedTitle>
              <NoSavedMessage lightMode={theme === 'light'}>
                You can save your videos while watching them.
              </NoSavedMessage>
            </NoVideosContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {isShowSavedList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <HomeAppContainer>
                <SideNavBar />
                <HomeContentMainSection
                  lightMode={theme === 'light'}
                  data-testid="savedVideos"
                >
                  {isShowSavedList
                    ? this.renderSavedVideosPage()
                    : this.renderNoSavedVideosPage()}
                </HomeContentMainSection>
              </HomeAppContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
