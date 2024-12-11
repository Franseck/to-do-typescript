import logo from "../assets/Logo.png"
import "../scss/header.scss"

const Header = () => {
  return (
    <div className="head">
      <img src={logo} alt="" />
      <h1>Task Control System</h1>
    
</div>

  )
}

export default Header