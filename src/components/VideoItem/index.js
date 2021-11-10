import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoListItem,
  ThumbnailImage,
  TitleContainer,
  ChannelLogo,
  VideoTitle,
  VideoOtherDetailsContainer,
  ChannelName,
  ViewsContainer,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = videoDetails
  const {profileImageUrl, name} = channel
  const dateInWords = formatDistanceToNow(new Date(publishedAt))
  const matches = dateInWords.match(/(\d+)/)
  let formatedDate = ''
  if (dateInWords.includes('years')) {
    formatedDate += `${matches[0]} years ago`
  }
  if (dateInWords.includes('months')) {
    formatedDate += `${matches[0]} months ago`
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <VideoListItem>
            <Link to={`/videos/${id}`} className="link-item">
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <TitleContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoTitle lightMode={theme === 'light'}>{title}</VideoTitle>
              </TitleContainer>
              <VideoOtherDetailsContainer>
                <ChannelName>{name}</ChannelName>
                <ViewsContainer>
                  <ChannelName>{viewCount} views</ChannelName>
                  <BsDot size={28} />
                  <ChannelName>{formatedDate}</ChannelName>
                </ViewsContainer>
              </VideoOtherDetailsContainer>
            </Link>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
