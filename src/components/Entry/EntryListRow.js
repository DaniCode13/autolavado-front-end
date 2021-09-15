const EntryListRow = ({ el, index, setEntryToEdit, deleteEntry }) => {
    let { price, description } = el.attributes
    let { id } = el
    return (
        <tr>
            <td scope="row">{index + 1}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td scope="row" >
                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => setEntryToEdit(el)}>
                    <i class="bi bi-pencil"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => deleteEntry(id)}>
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}

export default EntryListRow
