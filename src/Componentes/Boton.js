

const Boton = ({ Nombre, click, est }) => {
  
   return (
      <div>
         <label>Cantidad de clics: {click}</label>
         <button onClick={est}>{Nombre}</button>
      </div>
   )
}
export default Boton;