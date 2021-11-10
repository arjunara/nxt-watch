import styled from 'styled-components'

export const LogInBgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#181818')};
  overflow-y: auto;
`
export const LoginCardContainer = styled.div`
  width: 40%;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;
  padding-bottom: 55px;
  margin-top: 156px;
  margin-bottom: 156px;
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#0f0f0f')};
`
export const AppLogo = styled.img`
  height: 50px;
`
export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`
export const InputContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 16px
  font-weight: 600;
  color: ${props => (props.isLightMode ? '#181818' : '#f9f9f9')};
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isLightMode ? '#181818' : '#f9f9f9')};
`
export const Input = styled.input`
  padding-left: 18px;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  margin-top: 8px;
  outline: none;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-bottom: 35px;
`
export const InputCheckbox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 12px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #ff0000;
  margin-top: 5px;
`
