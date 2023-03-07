import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="history-card-container">
      <p className="time-accessed">{timeAccessed}</p>
      <img src={logoUrl} className="logo-url" alt="logo url" />
      <p className="title">{title}</p>
      <p className="domainUrl">{domainUrl}</p>
      <button className="delete-button" onClick={onDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
