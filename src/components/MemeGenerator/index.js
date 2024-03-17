import {Component} from 'react'

import {
  MainHead,
  TextContent,
  FormAndMemeContainer,
  PageContainer,
  FormContainer,
  ContextContainer,
  CustomLabel,
  CustomInput,
  GenerateButton,
  CustomOption,
  MemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroudImgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    backgroudImgUrl: '',
    topText: '',
    bottomText: '',
    activeFontId: '',
  }

  submitChanges = event => {
    event.preventDefault()

    const {
      activeFontSize,
      backgroudImgUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    this.setState({
      backgroudImgUrl: backgroudImgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontId: activeFontSize,
    })
  }

  changeImgUrl = event => {
    this.setState({backgroudImgUrlInput: event.target.value})
  }

  changeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  changeFonstSize = event => {
    this.setState({activeFontSize: event.target.value})
  }

  renderForm = () => {
    const {
      activeFontSize,
      backgroudImgUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <FormContainer onSubmit={this.submitChanges}>
        <CustomLabel htmlFor="imgUrl">Image URL</CustomLabel>
        <CustomInput
          id="imgUrl"
          type="text"
          value={backgroudImgUrlInput}
          placeholder="Enter the Image URL"
          onChange={this.changeImgUrl}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          value={topTextInput}
          onChange={this.changeTopText}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="botText">Bottom Text</CustomLabel>
        <CustomInput
          id="botText"
          type="text"
          value={bottomTextInput}
          onChange={this.changeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomInput
          value={activeFontSize}
          onChange={this.changeFonstSize}
          id="fontSize"
          as="select"
        >
          {fontSizesOptionsList.map(eachItem => (
            <CustomOption key={eachItem.optionId} value={eachItem.optionId}>
              {eachItem.displayText}
            </CustomOption>
          ))}
        </CustomInput>
        <GenerateButton type="submit">Generate</GenerateButton>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {backgroudImgUrl, topText, bottomText, activeFontId} = this.state

    return (
      <MemeContainer data-testid="meme" backgroudImage={backgroudImgUrl}>
        <TextContent activeFontId={activeFontId}>{topText}</TextContent>
        <TextContent activeFontId={activeFontId}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <PageContainer>
        <ContextContainer>
          <MainHead>Meme Generator</MainHead>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderForm()}
          </FormAndMemeContainer>
        </ContextContainer>
      </PageContainer>
    )
  }
}

export default MemeGenerator
