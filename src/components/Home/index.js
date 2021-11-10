import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomePoster from '../HomePoster'
import VideoItem from '../VideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeAppContainer,
  HomeContentMainSection,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureMsgHeading,
  FailureMsg,
  RetryButton,
  HomeVideosListContainer,
} from './styledComponents'

const apiStatusConstantsList = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const failureViewLightUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureViewDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class Home extends Component {
  state = {
    showPoster: true,
    searchInput: '',
    apiStatus: apiStatusConstantsList.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
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

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstantsList.inProgress})
    const homeVideoApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const homeVideosResponse = await fetch(homeVideoApiUrl, options)
    if (homeVideosResponse.ok) {
      const body = await homeVideosResponse.json()

      const updatedData = body.videos.map(eachObj =>
        this.convertCamelCase(eachObj),
      )
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiStatusConstantsList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantsList.failure})
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideos()
  }

  changeClosePoster = () => {
    this.setState({showPoster: false})
  }

  onClickRetryButton = () => {
    this.getHomeVideos()
  }

  renderNoSearchPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureMsgHeading lightMode={theme === 'light'}>
              No Search results found
            </FailureMsgHeading>
            <FailureMsg lightMode={theme === 'light'}>
              Try different key words or remove search filter
            </FailureMsg>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeSuccessView = () => {
    const {homeVideosList} = this.state
    return homeVideosList.length === 0 ? (
      this.renderNoSearchPage()
    ) : (
      <HomeVideosListContainer>
        {homeVideosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </HomeVideosListContainer>
    )
  }

  renderFailureView = () => (
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

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  switchHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstantsList.inProgress:
        return this.renderLoadingView()
      case apiStatusConstantsList.success:
        return this.renderHomeSuccessView()
      case apiStatusConstantsList.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showPoster, searchInput} = this.state
          const {theme} = value
          return (
            <>
              <Header />
              <HomeAppContainer>
                <SideNavBar />
                <HomeContentMainSection
                  lightMode={theme === 'light'}
                  data-testid="home"
                >
                  {showPoster && (
                    <HomePoster changeClosePoster={this.changeClosePoster} />
                  )}
                  <SearchContainer lightMode={theme === 'light'}>
                    <SearchInput
                      lightMode={theme === 'light'}
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.changeSearchInput}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchButton}
                    >
                      <AiOutlineSearch
                        size={20}
                        style={{
                          color: theme === 'light' ? '#909090' : '#606060',
                        }}
                      />
                    </SearchButton>
                  </SearchContainer>
                  {this.switchHomePage()}
                </HomeContentMainSection>
              </HomeAppContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
