const Link = ({ icon, title, number, selected, isCollapsed }) => {
  return isCollapsed ? (
    selected ? (
      <div className="link-selected">{icon}</div>
    ) : (
      <div className="link">
        <img className="link-icon" src={icon} alt="icon" />
      </div>
    )
  ) : selected ? (
    <div className="link-selected">
      {icon}
      <p className="alert-title">{title}</p>
      <div className="alert-number">
        <p>{number}</p>
      </div>
    </div>
  ) : (
    <div className="link">
      <img className="link-icon" src={icon} alt="icon" />
      <p className="link-title">{title}</p>
    </div>
  )
}

export default Link
