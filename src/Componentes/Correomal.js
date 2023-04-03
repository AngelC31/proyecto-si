import { useState } from "react";
import Boton from "./Boton";

const Correomal=()=>{
    let person={
        nombre:"Angel",
        correo:"estenoes@gmail.com"
    }

    let [correo, setCorreo]=useState(person.correo);
    const cambio=(e)=>{
        e.preventDefault();
        setCorreo(correo="adssd")
    }

    return(
        <div>
            <h3>{person.nombre}</h3>
            <h3>{person.correo}</h3>
            <Boton est={cambio} Nombre="Cambio"/>
        </div>
    )
}
export default Correomal;