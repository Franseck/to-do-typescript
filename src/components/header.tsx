import logo from "../assets/Logo.png"
import "../scss/header.scss"

const Header = () => {
  return (
    <div className="head">
      <img src={logo} alt="" />
      <h1>Task Control System <sub className="sub">with Typescript</sub></h1>
    
</div>

  )
}

export default Header