import { Link } from "react-router-dom"

function Header({ toggleTheme, theme }) {

return (

<header className="navbar">

<div className="logo">
🔥 Rocky Todo
</div>

<nav>

<Link to="/home">Home</Link>

<Link to="/about">About</Link>

<Link to="/progress">Progress</Link>

<button onClick={toggleTheme}>
{theme === "dark" ? "☀" : "🌙"}
</button>

</nav>

</header>

)

}

export default Header