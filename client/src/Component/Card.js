function Card({time, itemDelete, incidentNo, priority, status, title}){
  const handleDeleteIcon = ()=> itemDelete(incidentNo) ;
    return(
        <div className="card">
        <div className="header-container">
          <div className='incident-info-container'>
            <div style= {{
              backgroundColor: status === "on_hold"?"gold": "cyan"}}>{status}</div>
            <span>{incidentNo}</span>
          </div>
          <div className='header-menu-container'>
              <i className="fa fa-trash" aria-hidden="true" onClick={handleDeleteIcon}></i>
          </div>
        </div>
        <h5>{title}</h5>
        <small>{time}</small>
        <hr />
        <div className='further-detail-container'>
          <div className='further-detail-item-container'>
            <span>Priority</span> <br />
            <span>{priority}</span>
          </div>
          <div className='further-detail-item-container'>
            <span>Priority</span> <br />
            <span>2-High</span>
          </div>
        </div>
      </div>
    )
}
export default Card;