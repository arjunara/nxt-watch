import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardItem,
  CardVideoThumbnailImage,
  CardOtherDetails,
  CardTitle,
  ChannelName,
  ViewsContainer,
} from './styledComponents'
import './index.css'

const TrendingVideoCard = props => {
  const {videoCardDetails} = props
  const {
    title,
    channel,
    thumbnailUrl,
    viewCount,
    publishedAt,
    id,
  } = videoCardDetails
  const {name} = channel

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
          <VideoCardItem>
            <Link to={`/videos/${id}`} className="trending-link-item">
              <CardVideoThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <CardOtherDetails>
                <CardTitle lightMode={theme === 'light'}>{title}</CardTitle>
                <ChannelName>{name}</ChannelName>
                <ViewsContainer>
                  <ChannelName>{viewCount} views</ChannelName>
                  <BsDot size={28} />
                  <ChannelName>{formatedDate}</ChannelName>
                </ViewsContainer>
              </CardOtherDetails>
            </Link>
          </VideoCardItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
