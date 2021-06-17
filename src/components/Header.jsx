import { FiSearch } from 'react-icons/fi'
import bell from '../assets/bell.svg'
import questions from '../assets/questions.svg'
import settings from '../assets/settings.svg'
import avatar from '../assets/avatar.png'

import '../styles/header.css'
const Header = () => {
  return (
    <header>
      <h1 className="header-title">Alerts</h1>
      <Search />
      <HeaderRight />
    </header>
  )
}

const HeaderRight = () => {
  return (
    <div className="header-right">
      <div className="invite-btn">+ Invite a friend</div>
      <div className="notifications">
        <img src={bell} alt="bell" />
        <div className="dot"></div>
      </div>
      <img src={questions} alt="questions" className="margin pointer" />
      <img src={settings} alt="settings" className="margin pointer" />
      <img src={avatar} alt="avatar" className="pointer" />
    </div>
  )
}
const Search = () => {
  return (
    <div className="search">
      <FiSearch style={searchStyles} />
      <input
        type="text"
        placeholder="Search for ticker, user, or other information"
        className="search-input"
      />
    </div>
  )
}
const searchStyles = {
  color: '#A2B1C3',
  fontSize: '16px',
  marginLeft: '12px',
}

export default Header
