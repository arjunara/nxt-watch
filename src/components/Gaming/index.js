import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoGameController} from 'react-icons/io5'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeAppContainer,
  HomeContentMainSection,
  FailureContainer,
  FailureImage,
  FailureMsgHeading,
  FailureMsg,
  RetryButton,
  LoaderContainer,
  PosterContainer,
  OptionIconContainer,
  SavedVideoHeading,
  UnorderedVideoListContainer,
  GamingVideoCard,
  GamingVideoImage,
  GamingVideoTitle,
  VideoViewCount,
} from './styledComponents'
import './index.css'

const failureViewLightUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureViewDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const apiStatusConstantsList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstantsList.initial, gamingList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onClickRetryButton = () => {
    this.getGamingVideos()
  }

  convertCamelCase = body => ({
    id: body.id,
    thumbnailUrl: body.thumbnail_url,
    viewCount: body.view_count,
    title: body.title,
  })

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstantsList.inProgress})
    const gamingVideoApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const gamingVideosResponse = await fetch(gamingVideoApiUrl, options)
    if (gamingVideosResponse.ok) {
      const gamingVideosData = await gamingVideosResponse.json()

      const updatedData = gamingVideosData.videos.map(eachObj =>
        this.convertCamelCase(eachObj),
      )
      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstantsList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantsList.failure})
    }
  }

  renderTrendingSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const {gamingList} = this.state
        return (
          <>
            <PosterContainer lightMode={theme === 'light'}>
              <OptionIconContainer lightMode={theme === 'light'}>
                <IoGameController size={35} style={{color: ' #ff0b37'}} />
              </OptionIconContainer>
              <SavedVideoHeading lightMode={theme === 'light'}>
                Gaming
              </SavedVideoHeading>
            </PosterContainer>
            <UnorderedVideoListContainer>
              {gamingList.map(each => (
                <GamingVideoCard key={each.id}>
                  <Link to={`/videos/${each.id}`} className="game-link-item">
                    <GamingVideoImage
                      src={each.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GamingVideoTitle lightMode={theme === 'light'}>
                      {each.title}
                    </GamingVideoTitle>
                    <VideoViewCount>
                      {each.viewCount} Watching Worldwide
                    </VideoViewCount>
                  </Link>
                </GamingVideoCard>
              ))}
            </UnorderedVideoListContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureContainer>
            <FailureImage
              src={theme === 'light' ? failureViewLightUrl : failureViewDarkUrl}
              alt="failure view"
            />
            <FailureMsgHeading lightMode={theme === 'light'}>
              Oops! Something Went Wrong
            </FailureMsgHeading>
            <FailureMsg lightMode={theme === 'light'}>
              We are having some trouble to complete your request.
              <br /> Please try again
            </FailureMsg>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  switchTrendingPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstantsList.inProgress:
        return this.renderTrendingLoadingView()
      case apiStatusConstantsList.success:
        return this.renderTrendingSuccessView()
      case apiStatusConstantsList.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
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
                  data-testid="gaming"
                >
                  {this.switchTrendingPage()}
                </HomeContentMainSection>
              </HomeAppContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
