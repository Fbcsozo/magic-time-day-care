import React from "react";
import "./galeria.css";

function Galery() {

	return (
		<div className="container">
			<img className="yellow" src="./images/content/page5-big-yellow.png" alt="yellow"/>
			<img className="stars5" src="./images/content/page-5-stars.png" alt="stars"/>
			<img className="purplebot" src="./images/content/page5-6.png" alt="purple"/>
			
			<div className="galery" >
				<h1 className="title-galery" > GALERIA </h1>
				<div className="images">
					<div className="row">

						<img className="images-line" src="./images/content/allFamily.jpeg" alt="" />
						<img className="images-line" src="./images/content/arthurDrawingPeople.jpeg" alt="" />
						<img className="images-line" src="./images/content/boysInBallPool.jpeg" alt="" />
						<img className="images-line" src="./images/content/nathanyAndboys.jpeg" alt="" />
						<img className="images-line" src="./images/content/nathanyOnly.jpeg" alt="" />
					</div>

					<div className="row">
						<img className="images-line" src="./images/content/nathanyOnly2.jpeg" alt="" />
						<img className="images-line" src="./images/content/packedLunch.jpeg" alt="" />
						<img className="images-line" src="./images/content/samuelDirtyHand.jpeg" alt="" />
						<img className="images-line" src="./images/content/samuelRice.jpeg" alt="" />
						<img className="images-line" src="./images/content/samuelwithdraws.jpeg" alt="" />
					</div>

				</div>
			</div>
		</div>
	);
}

export default Galery;
