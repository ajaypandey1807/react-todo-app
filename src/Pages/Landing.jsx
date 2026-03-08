import { Link } from "react-router-dom"

function Landing(){

return(

<div className="landing">

<h1>🔥 Rocky Todo</h1>

<p>Smart Task Manager Built with React</p>

<Link to="/home">

<button className="enter-btn">

Enter App 🚀

</button>

</Link>

</div>

)

}

export default Landing