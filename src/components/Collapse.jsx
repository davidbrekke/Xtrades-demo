import expand from '../assets/expand.svg'
import collapse from '../assets/collapse.svg'
const Collapse = ({ isCollapsed, setIsCollapsed }) => {
  const handleCollapse = () => setIsCollapsed(!isCollapsed)

  return isCollapsed ? (
    <div className="collapse" onClick={handleCollapse}>
      <img src={expand} alt="expand" />
    </div>
  ) : (
    <div className="collapse" onClick={handleCollapse}>
      <img src={collapse} alt="collapse" />
      <p className="collapse-text">Collapse</p>
    </div>
  )
}

export default Collapse
