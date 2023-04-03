import React from "react";
import Boton from "./Componentes/Boton";
import ListaD from "./Componentes/ListaD";
import ListaO from "./Componentes/ListaO";
import Tabla from "./Componentes/Tabla";
import { useState } from "react";
import Correomal from "./Componentes/Correomal";


const App = () => {
    let [clic, setClic] = useState(0);
    const mas=(e)=>{
        e.preventDefault();
        setClic(clic+1)
    }
    const menos=(e)=>{
        e.preventDefault();
        if(clic!==0){
        setClic(clic-1)}
    }

    const reinicio=(e)=>{
        e.preventDefault();
        setClic(clic=0)
    }


    const arre = ['Hola', 'yo', 'soy', 'Angel']
    console.log(arre[1])
    console.log(arre[2])
    console.log(arre[3])


    let [pos1, pos2, pos3, pos4] = arre
    console.log(pos1)
    console.log(pos2, pos3, pos4)

    const persona = 
        {
            nombree: 'Angel',
            apellido: 'Cruz',
            correo: 'angelcza31@gmail.com',
            telefono: '6442316059',
            direccion: {
                pais: "Mexico",
                estado: "Sonora",
                colonia: "Municipio Libre"
            }
        }
        
        
    
    let { direccion: { pais, estado, colonia } } = persona;




    console.log(persona.nombree)
    console.log(persona.telefono)
    console.log(persona.direccion.pais)






    return (
        <div>
            <div>
                <ListaD per={persona} />
                <ListaO per={persona} />
            
            </div>
            <br/><br/>
            <div>
                <Boton Nombre="Sumar" click={clic} est={mas}/>
                <Boton Nombre="Restar" click={clic} est={menos}/>
                <Boton Nombre="Reiniciar" click={clic} est={reinicio}/>
                <Boton Nombre="Boton4" />
                <Boton Nombre="Boton5" />
            </div>
            <br /><br />
            <Tabla persona={persona} />
            <img src={require("./Imagenes/Casa.jfif")} alt="casita" />
            <div>
                <h3>Nombre: {persona.nombree}</h3>
                <h3>Telefono: {persona.telefono}</h3>
                <h3>Pais: {pais}</h3>
                <h3>Estado: {estado}</h3>
                <h3>Colonia: {colonia}</h3>
            </div>
            <Correomal/>
        </div>
    )
}
export default App;