import logo from '../assets/logo.svg'

const Logo = ({ isCollapsed }) => {
  return isCollapsed ? (
    <>
      <img className="logo-svg" src={logo} alt="logo" />
    </>
  ) : (
    <>
      <img className="logo-svg" src={logo} alt="logo" />
      <div className="logo-text">Xtrades</div>
    </>
  )
}

export default Logo
