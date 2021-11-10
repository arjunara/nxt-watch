import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

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
  VideoDetailsContainer,
  VideoContainer,
  VideoTitleContainer,
  VideoTitle,
  ViewsContainer,
  ChannelName,
  VideoOptionsContainer,
  HitButtonLikeContainer,
  HitButtonDislikeContainer,
  HitButtonSaveContainer,
  VideoChannelLogoContainer,
  ChannelLogo,
  ChannelNameContainer,
  SubscriberCount,
  VideoDescription,
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

class VideoItemDetails extends Component {
  state = {
    isLike: false,
    isDislike: false,
    apiStatus: apiStatusConstantsList.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
    const {match} = this.props
    const {params} = match
    const {id} = params
    const parsedSavedList = JSON.parse(localStorage.getItem('savedList'))
    if (parsedSavedList === null || parsedSavedList.length === 0) {
      this.setState({isSaved: false})
    } else {
      const videoItemObject = parsedSavedList.find(each => each.id === id)

      if (videoItemObject === undefined) {
        this.setState({isSaved: false})
      } else {
        const {isUserSaved} = videoItemObject
        this.setState({isSaved: isUserSaved})
      }
    }
  }

  onClickRetryButton = () => {
    this.getVideoItemDetails()
  }

  onClickLikeButton = () => {
    this.setState(prevState => {
      const {isDislike} = this.state
      if (isDislike) {
        return {
          isLike: !prevState.isLike,
          isDislike: !prevState.isDislike,
        }
      }
      return {
        isLike: !prevState.isLike,
      }
    })
  }

  onClickDislikeButton = () => {
    this.setState(prevState => {
      const {isLike} = this.state
      if (isLike) {
        return {
          isLike: !prevState.isLike,
          isDislike: !prevState.isDislike,
        }
      }
      return {
        isDislike: !prevState.isDislike,
      }
    })
  }

  updateLocalStorage = () => {
    const {isSaved, videoDetails} = this.state
    const {
      title,
      channel,
      thumbnailUrl,
      publishedAt,
      viewCount,
      id,
    } = videoDetails
    const newSavedData = {
      thumbnailUrl,
      channel,
      title,
      publishedAt,
      viewCount,
      id,
      isUserSaved: isSaved,
    }
    const savedListFromStorage = JSON.parse(localStorage.getItem('savedList'))
    if (savedListFromStorage === null || savedListFromStorage.length === 0) {
      const updatedEmptySavedList = []

      if (isSaved === true) {
        updatedEmptySavedList.push(newSavedData)
        localStorage.setItem('savedList', JSON.stringify(updatedEmptySavedList))
      }
    } else {
      const filterSavedList = savedListFromStorage.filter(
        each => each.id !== id,
      )

      //   filter savedList before storing for pretend duplicate items
      if (isSaved) {
        filterSavedList.push(newSavedData)
        localStorage.setItem('savedList', JSON.stringify(filterSavedList))
      } else {
        localStorage.setItem('savedList', JSON.stringify(filterSavedList))
      }
    }
  }

  onClickSaveButton = () => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      this.updateLocalStorage,
    )
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstantsList.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const videoDetailsResponse = await fetch(videoDetailsApiUrl, options)
    if (videoDetailsResponse.ok) {
      const body = await videoDetailsResponse.json()

      const updatedVideoDetails = {
        channel: {
          name: body.video_details.channel.name,
          profileImageUrl: body.video_details.channel.profile_image_url,
          subscriberCount: body.video_details.channel.subscriber_count,
        },
        description: body.video_details.description,
        publishedAt: body.video_details.published_at,
        thumbnailUrl: body.video_details.thumbnail_url,
        title: body.video_details.title,
        videoUrl: body.video_details.video_url,
        viewCount: body.video_details.view_count,
        id: body.video_details.id,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        apiStatus: apiStatusConstantsList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantsList.failure})
    }
  }

  renderHomeSuccessView = () => {
    const {videoDetails, isLike, isDislike, isSaved} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    const dateInWords = formatDistanceToNow(new Date(publishedAt))
    const matches = dateInWords.match(/(\d+)/)
    let formatedDate = ''
    if (dateInWords.includes('years')) {
      formatedDate += `${matches[0]} years ago`
    }
    if (dateInWords.includes('months')) {
      formatedDate += `${matches[0]} months ago`
    }
    const saveText = isSaved ? 'Saved' : 'Save'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <VideoDetailsContainer>
              <ReactPlayer url={videoUrl} width="100%" height={512} />
              <VideoTitleContainer>
                <VideoTitle lightMode={theme === 'light'}>{title}</VideoTitle>
                <VideoContainer>
                  <ViewsContainer>
                    <ChannelName>{viewCount} views</ChannelName>
                    <BsDot size={28} />
                    <ChannelName>{formatedDate}</ChannelName>
                  </ViewsContainer>
                  <VideoOptionsContainer>
                    <HitButtonLikeContainer
                      type="button"
                      isLike={isLike}
                      onClick={this.onClickLikeButton}
                    >
                      <BiLike size={20} />
                      Like
                    </HitButtonLikeContainer>
                    <HitButtonDislikeContainer
                      type="button"
                      isDislike={isDislike}
                      onClick={this.onClickDislikeButton}
                    >
                      <BiDislike size={20} />
                      Dislike
                    </HitButtonDislikeContainer>
                    <HitButtonSaveContainer
                      type="button"
                      isSaved={isSaved}
                      onClick={this.onClickSaveButton}
                    >
                      <MdPlaylistAdd size={20} />
                      {saveText}
                    </HitButtonSaveContainer>
                  </VideoOptionsContainer>
                </VideoContainer>
              </VideoTitleContainer>
              <VideoChannelLogoContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelNameContainer>
                  <ChannelName
                    lightMode={theme === 'light'}
                    style={{fontWeight: 500}}
                  >
                    {name}
                  </ChannelName>
                  <SubscriberCount>
                    {subscriberCount} subscribers
                  </SubscriberCount>
                </ChannelNameContainer>
              </VideoChannelLogoContainer>
              <VideoDescription lightMode={theme === 'light'}>
                {description}
              </VideoDescription>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureContainer lightMode={theme === 'light'}>
            <FailureImage
              src={theme === 'light' ? failureViewLightUrl : failureViewDarkUrl}
              alt="failure view"
            />
            <FailureMsgHeading lightMode={theme === 'light'}>
              Oops! Something Went Wrong
            </FailureMsgHeading>
            <FailureMsg lightMode={theme === 'light'}>
              We are having some trouble to complete your request.
              <br /> Please try again.
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
          const {theme} = value
          return (
            <>
              <Header />
              <HomeAppContainer>
                <SideNavBar />
                <HomeContentMainSection
                  lightMode={theme === 'light'}
                  data-testid="videoItemDetails"
                >
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

export default VideoItemDetails
