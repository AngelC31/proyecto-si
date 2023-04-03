import Listas from "./Listas";

const ListaO=({per})=>{
    let {nombree}=per
    let {apellido}=per
    return(
        <div>
            <ol>
                <Listas nom={nombree} ape={apellido}/>
            </ol>
        </div>
    )
}
export default ListaO;