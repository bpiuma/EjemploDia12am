import React from "react";
import Card from "./card.js";

export function Home() {
	let personajes = [
		{
			nombre: "Bob Marley",
			descripcion:
				"Robert Nesta Marley, más conocido como Bob Marley, fue un músico, guitarrista y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers y Bob Marley & The Wailers.",
			imagen:
				"https://los40es00.epimg.net/los40/imagenes/2020/06/15/los40classic/1592224638_964781_1592235274_noticia_normal.jpg"
		},
		{
			nombre: "Rosana Arbelo",
			descripcion:
				"Rosana Arbelo Gopar, conocida simplemente como Rosana, es una cantautora española que se dio a conocer con su tema El talismán de su disco Lunas rotas.",
			imagen:
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rosana-1542301234.jpg"
		},
		{
			nombre: "Emiliano Brancciari",
			descripcion:
				"Emiliano Germán Brancciari Amarillo es un músico y compositor argentino, que hizo la mayoría de su carrera musical en Uruguay. Es uno de los líderes fundadores de la banda No Te Va Gustar.",
			imagen:
				"https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/07/Cantante-No-Te-Va-a-Gustar.jpg"
		},
		{
			nombre: "Idea Vilariño",
			descripcion:
				"Idea Vilariño ​ fue una poeta, ensayista y crítica literaria uruguaya perteneciente al grupo de escritores denominado Generación del 45. Dentro de sus facetas menos conocidas se encuentran la de traductora, compositora y docente.",
			imagen:
				"https://www.poeticous.com/system/poets/photos/000/000/632/large/idea.jpg"
		}
	];
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="container">
				<div className="row">
					{personajes.map((elem, i) => {
						return (
							<Card
								key={i}
								nombre={elem.nombre}
								descripcion={elem.descripcion}
								img={elem.imagen}
							/>
						);
					})}

					{/*CÓDIGO ORIGINAL, SIN MAP:
                    
                    <Card
						nombre={info[0].nombre}
						descripcion={info[0].descripcion}
						img={info[0].imagen}
					/>
					<Card
						nombre={info[1].nombre}
						descripcion={info[1].descripcion}
						img={info[1].imagen}
					/>
					<Card
						nombre={info[2].nombre}
						descripcion={info[2].descripcion}
						img={info[2].imagen}
					/>
					<Card
						nombre={info[3].nombre}
						descripcion={info[3].descripcion}
						img={info[3].imagen}
					/> */}
				</div>
			</div>
		</div>
	);
}
