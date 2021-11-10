import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideoCard from '../TrendingVideoCard'

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
} from './styledComponents'

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
  state = {apiStatus: apiStatusConstantsList.initial, trendingList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onClickRetryButton = () => {
    this.getTrendingVideos()
  }

  convertCamelCase = body => ({
    id: body.id,
    publishedAt: body.published_at,
    thumbnailUrl: body.thumbnail_url,
    viewCount: body.view_count,
    title: body.title,
    channel: {
      name: body.channel.name,
      profileImageUrl: body.channel.profile_image_url,
    },
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstantsList.inProgress})
    const trendingVideoApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const trendingVideosResponse = await fetch(trendingVideoApiUrl, options)
    if (trendingVideosResponse.ok) {
      const trendingVideosData = await trendingVideosResponse.json()

      const updatedData = trendingVideosData.videos.map(eachObj =>
        this.convertCamelCase(eachObj),
      )
      this.setState({
        trendingList: updatedData,
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
        const {trendingList} = this.state
        return (
          <>
            <PosterContainer lightMode={theme === 'light'}>
              <OptionIconContainer lightMode={theme === 'light'}>
                <FaFire size={30} style={{color: ' #ff0b37'}} />
              </OptionIconContainer>
              <SavedVideoHeading lightMode={theme === 'light'}>
                Trending
              </SavedVideoHeading>
            </PosterContainer>
            <UnorderedVideoListContainer>
              {trendingList.map(each => (
                <TrendingVideoCard key={each.id} videoCardDetails={each} />
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
                  data-testid="trending"
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
