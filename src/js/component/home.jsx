import React, {useState} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [clase, setClase] = useState("red")

	const handleClick1 = () => {
		setClase("red-light-select")
		setClase2("yellow")
		setClase3("green")
	}
	
	const [clase2, setClase2] = useState("yellow")
	const handleClick2 = () => {
		setClase2("yellow-light-select")
		setClase("red")
		setClase3("green")
	}
	const [clase3, setClase3] = useState("green")
	const handleClick3 = () => {
		setClase3("green-light-select")
		setClase("red")
		setClase2("yellow")
	}
	return (
		<div className="fondo">
			<div class="text-center"><button onClick={handleClick1}className={clase}></button></div>
				
			<div class="text-center"><button onClick={handleClick2}className={clase2}></button></div>
			
			<div class="text-center"><button onClick={handleClick3}className={clase3}></button></div>

			</div>
		
			
		
	
	);
};

export default Home;
