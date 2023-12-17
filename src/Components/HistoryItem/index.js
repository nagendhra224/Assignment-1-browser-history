import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {domainUrl, timeAccessed, id, logoUrl, title} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
