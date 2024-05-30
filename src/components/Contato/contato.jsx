import React from "react"
import "./contato.css";

function Contact() {
	return (
		<div className="data-info">
			<div className="infos">
				<h1> DADOS PARA CONTATO </h1>
				<ul>
					<li> WHATSAPP: </li>
					<li> EMAIL: </li>
					<li> INSTAGRAM: </li>
				</ul>
				<br/>
				<br/>
				<br/>
				<br/>

				<h1> NOSSA LOCALIZAÇÃO </h1>
				<p> 716 bounty dr ap 1617, Foster City - CA <br/> ZIP CODE: 94404 </p>
			</div>
			<img className="twolines"src="./images/content/twolines-page7.png" alt="twolines" />
			
			<div className="location">

				<p> Link da localização </p>
				<img className="loc-image" src="" alt="" />
			
			</div>
			
		</div>
	);
}

export default Contact;