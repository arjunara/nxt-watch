import {IoMdClose} from 'react-icons/io'

import {
  PosterContainer,
  PosterContent,
  AppLogo,
  PosterText,
  GetItNowButton,
  CloseIconContainer,
  CloseButton,
} from './styledComponents'

const HomePoster = props => {
  const {changeClosePoster} = props
  const closePoster = () => {
    changeClosePoster()
  }

  return (
    <PosterContainer data-testid="banner">
      <PosterContent>
        <AppLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PosterText>Buy Nxt Watch Premium Prepaid plans with UPI</PosterText>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </PosterContent>
      <CloseIconContainer>
        <CloseButton type="button" onClick={closePoster} data-testid="close">
          <IoMdClose size={25} />
        </CloseButton>
      </CloseIconContainer>
    </PosterContainer>
  )
}

export default HomePoster
