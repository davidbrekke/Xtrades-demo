import Link from 'components/Link'
import { RiUserVoiceFill } from 'react-icons/ri'
import trophy from '../assets/trophy.svg'
import hat from '../assets/hat.svg'
const Links = ({ isCollapsed }) => {
  return (
    <div className="links">
      <Link
        icon={<RiUserVoiceFill style={alertStyles} />}
        title="Alerts"
        number={32}
        selected
        isCollapsed={isCollapsed}
      />
      <Link icon={trophy} title="Leaderboard" isCollapsed={isCollapsed} />
      <Link icon={hat} title="Xhub" isCollapsed={isCollapsed} />
    </div>
  )
}

export default Links

const alertStyles = {
  color: '#00f595',
  fontSize: '20px',
  marginLeft: '19px',
}
