import './Pro.css'
import pfpf from './1661979596655.jpeg'
import  PropTypes  from 'prop-types';
export default function Profile({name}) {
	const handleClick = e => {
		e.preventDefault();
	alert(` welcome ${name}`);
	  };
	 
  return (
   <>
<div class="card-container" >
	<img  src={pfpf} alt="user" style={{
    width :"50px",
    borderRadius:"50%"
  }} />
	<h3>{name}</h3>

	<p>looking 4 web dev job</p>
	<div class="buttons">
		<button class="primary" onClick={handleClick}>
			click me!
		</button>
		
	</div>
	<div class="skills">
		<h6>Profession</h6>
		<ul>
			<li >student at boulbaba</li>
	<li>fullstack developer</li>
		</ul>
	</div>
</div>


   </>
  )
}
Profile.defaultProps = {
	"username":"user"
}

