const EntriesListRow = ({el,setEntrieToEdit,deleteEntrie}) => {
    let {price, description,id} = el
    return (
        <tr>
            <td>{price}</td>
            <td>{description}</td>
            <td>
                <button type="button" onClick={()=> setEntrieToEdit(el)}>Editar</button>
                <button type="button" onClick={()=> deleteEntrie(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default EntriesListRow
