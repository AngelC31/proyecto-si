
import TablaB from "./TablaB";
import TablaH from "./TablaH";

const Tabla = ({persona}) => {
    return (
        
        <div>
            <table>
            <TablaH/>
            <TablaB persona={persona}/>
            </table>
        </div>
    )
}
export default Tabla;