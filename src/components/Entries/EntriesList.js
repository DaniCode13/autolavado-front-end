import EntriesListEmpty from './EntriesListEmpty'
import EntriesListRow from './EntriesListRow'
const EntriesList = ({ data, setEntrieToEdit, deleteEntrie }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? (<EntriesListEmpty />) :
                            (data.map((el) =>
                                <EntriesListRow
                                    key={el.id} el={el}
                                    setEntrieToEdit={setEntrieToEdit}
                                    deleteEntrie={deleteEntrie}
                                />))
                    }

                </tbody>
            </table>
        </>
    )
}


export default EntriesList
