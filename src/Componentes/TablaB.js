import Boton from "./Boton";

const TablaB = ({persona}) => {
    let {direccion:{colonia}}=persona
    return (
        <tbody>
            <tr>
                <td>{persona.nombree}</td>
                <td>{persona.apellido}</td>
                <td>{persona.telefono}</td>
                <td>{colonia}</td>
                <td>
                    <Boton Nombre="Agregar" />
                    <Boton Nombre="Eliminar" />
                </td>
            </tr>
            <tr>
                <td>Angel</td>
                <td>Cruz</td>
                <td>644411</td>
                <td>Mas lejos</td>
                <td>
                    <Boton Nombre="Agregar" />
                    <Boton Nombre="Eliminar" />
                </td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>Zeta</td>
                <td>644411</td>
                <td>Lejos</td>
                <td>
                    <Boton Nombre="Agregar" />
                    <Boton Nombre="Eliminar" />
                </td>
            </tr>

        </tbody>
    )
}
export default TablaB;