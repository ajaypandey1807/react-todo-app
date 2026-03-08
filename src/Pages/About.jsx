
import { Link } from "react-router-dom"

function About(){

return(

<div className="app" style={{marginTop:"120px"}}>

<h1>About This Project</h1>

<p>
This is a Smart Todo App built using React.
</p>

<ul>

<li>Dark / Light Mode</li>
<li>Edit Tasks</li>
<li>Delete Tasks</li>
<li>Local Storage Save</li>
<li>Responsive UI</li>

</ul>

<h3>Connect With Me</h3>

<div className="social">

<a href="https://github.com/ajaypandey1807" target="_blank">🐙 GitHub</a>

<a href="https://www.linkedin.com/in/ajay-pandey-4141462a4/" target="_blank">💼 LinkedIn</a>

<a href="https://www.instagram.com/pandey.ji__800/" target="_blank">📷 Instagram</a>

<a href="https://www.facebook.com/ajaypandey4976" target="_blank">📘 Facebook</a>

</div>

<p>
Built by Rocky ⚡
</p>

<Link to="/">
<button className="clear">
Back to Home
</button>
</Link>

</div>

)

}

export default About

