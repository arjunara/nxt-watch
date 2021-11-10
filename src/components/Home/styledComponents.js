import styled from 'styled-components'

export const HomeAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
`
export const HomeContentMainSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#181818')};
  margin-left: 18vw;
  margin-top: 18vh;
`
export const SearchContainer = styled.div`
  width: 50%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => (props.lightMode ? '#cccccc' : '#606060')};
  border-radius: 4px;
  margin-top: 18px;
  margin-left: 35px;
`
export const SearchInput = styled.input`
  padding-left: 18px;
  border: none;
  border-radius: 8px;
  height: 28px;
  width: 80%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#122121' : '#ffffff')};
  margin-top: 8px;
  outline: none;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;
`
export const SearchButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #cccccc;
  height: 34px;
  width: 82px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 5px;
  border-right: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
  padding-bottom: 62px;
`
export const FailureImage = styled.img`
  width: 50%;
  height: 412px;
`
export const FailureMsgHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 600;
  color: ${props => (props.lightMode ? '#231f20' : '#f4f4f4')};
  margin-bottom: 10px;
`
export const FailureMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: ${props => (props.lightMode ? '#383838' : ' #7e858e')};
  text-align: center;
`
export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #4f46e5;
  height: 34px;
  width: 82px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 20px;
`
export const HomeVideosListContainer = styled.ul`
  padding-left: 35px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  overflow-y: auto;
`
