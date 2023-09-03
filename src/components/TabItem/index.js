import './index.css'

const TabItem = props => {
  const {eachTab, setActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const borderStyle = isActive ? 'active-list-item' : ''
  const textColor = isActive ? 'text-color' : ''

  return (
    <li className={`list-item ${borderStyle}`}>
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-item-button ${textColor}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
