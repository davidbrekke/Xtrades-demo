import { useState } from 'react'
import Links from 'components/Links'
import Logo from 'components/Logo'
import Ad from 'components/Ad'
import Collapse from 'components/Collapse'

import '../styles/sidebar.css'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return isCollapsed ? (
    <div className="sidebar-collapsed">
      <Logo isCollapsed={isCollapsed} />
      <Links isCollapsed={isCollapsed} />
      <Collapse isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </div>
  ) : (
    <div className="sidebar">
      <Logo isCollapsed={isCollapsed} />
      <Links isCollapsed={isCollapsed} />
      <Ad />
      <Collapse isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </div>
  )
}

export default Sidebar
