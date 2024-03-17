import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 30px;
  @media screen and (min-width: 760px) {
    width: 85%;
    max-width: 1140px;
    padding: 40px;
  }
`
export const MainHead = styled.h1`
  font-size: 32px;
  color: #35469c;
  font-weight: bold;
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 760px) {
    flex-direction: row-reverse;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media screen and (min-width: 760px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #7e858e;
  margin-top: 15px;
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
`
export const CustomInput = styled.input`
  margin: 15px 0px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  color: #5a7184;
  outline: none;
  @media screen and (min-width: 760px) {
    font-size: 16px;
  }
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
  margin: 15px 0px;
`
export const CustomOption = styled.option`
  color: #1e293b;
  font-size: 16px;
  padding 15px;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroudImage});
  backgroud-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 300px;
  padding : 0px 10px
  margin-bottom: 50px;
  @media screen and (min-width: 760px) {
    width: 48%;
    margin-bottom: 20px;
    margin-top: 5px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontId}px;
  font-weight: 600;
`
