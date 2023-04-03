import Listas from "./Listas";

const ListaD=({per})=>{
    let {nombree}=per
    let {apellido}=per
    return(
        <div>
            <ul>
                <Listas nom={nombree} ape={apellido}/>
            </ul>
        </div>
    )
}
export default ListaD;