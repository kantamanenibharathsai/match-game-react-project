import {Component} from 'react'

import Navbar from '../Navbar'

import TabItem from '../TabItem'

import Thumbnail from '../Thumbnail/index'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabId: props.tabsList[0].tabId,
      isGameInProgress: true,
      matchedImagesList: [],
      timer: 60,
      imageObj: props.imagesList[0],
      //  onThumbnailClicked: false,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.onDecreaseTime, 1000)
  }

  componentWillUnmount() {
    this.clearIntervalId()
  }

  clearIntervalId = () => clearInterval(this.intervalId)

  onDecreaseTime = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.clearIntervalId()
      this.setState(prevState => ({
        isGameInProgress: !prevState.isGameInProgress,
      }))
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  clearInterval = () => this.clearInterval(this.intervalId)

  getActiveTabObjectsList = imagesList => {
    const {activeTabId} = this.state
    return imagesList.filter(eachObject => eachObject.category === activeTabId)
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onResetGame = () => {
    this.clearIntervalId()
    const {tabsList, imagesList} = this.props
    this.setState({
      activeTabId: tabsList[0].tabId,
      isGameInProgress: true,
      matchedImagesList: [],
      timer: 60,
      imageObj: imagesList[0],
      //  onThumbnailClicked: false,
      // score: 0,
    })
    this.componentDidMount()
  }

  /*  onClearingInterval = timer => {
    if (timer === 0) {
      clearInterval(this.intervalId)
    }
  } */

  getImageObject = () => {
    const {imagesList} = this.props
    const newImageObj =
      imagesList[Math.floor(Math.random() * imagesList.length)]
    this.setState({imageObj: newImageObj})
  }

  clickThumbnail = (thumbnailId, randomImageId) => {
    if (thumbnailId === randomImageId) {
      this.setState(prevState => ({
        matchedImagesList: [...prevState.matchedImagesList, randomImageId],
      }))
    } else {
      this.setState(prevState => ({
        isGameInProgress: !prevState.isGameInProgress,
      }))
    }
    this.getImageObject()
  }

  render() {
    const {
      activeTabId,
      isGameInProgress,
      timer,
      matchedImagesList,
      imageObj,
    } = this.state
    const {imagesList, tabsList} = this.props

    const {imageUrl, id} = imageObj
    const activeTabObjectsList = this.getActiveTabObjectsList(imagesList)
    //  const clearTheInterval = this.onClearingInterval(timer)
    //  const seconds = this.getSeconds()

    return (
      <div className="main-container">
        <Navbar countDown={timer} score={matchedImagesList.length} />
        <div className="child-container">
          {isGameInProgress && timer ? (
            <div className="adjust-width-container">
              <img src={imageUrl} alt="match" className="big-image" />
              <ul className="unordered-list-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    key={eachTab.tabId}
                    eachTab={eachTab}
                    setActiveTabId={this.setActiveTabId}
                    isActive={activeTabId === eachTab.tabId}
                  />
                ))}
              </ul>
              <ul className="thumbnails-unordered-list-container">
                {activeTabObjectsList.map(eachObject => (
                  <Thumbnail
                    eachThumbnail={eachObject}
                    key={eachObject.id}
                    randomImageId={id}
                    clickThumbnail={this.clickThumbnail}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="score-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                className="trophy-image"
                alt="trophy"
              />
              <p className="your-score-text">YOUR SCORE</p>
              <p className="your-score-number">{matchedImagesList.length}</p>
              <button
                onClick={this.onResetGame}
                type="button"
                className="play-again-btn"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset-image"
                />
                <p className="play-again-text">PLAY AGAIN</p>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
