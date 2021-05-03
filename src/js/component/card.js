import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">{props.descripcion}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	descripcion: PropTypes.string,
	img: PropTypes.string
};

export default Card;
