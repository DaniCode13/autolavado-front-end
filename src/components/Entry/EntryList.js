import EntryListEmpty from './EntryListEmpty'
import EntryListRow from './EntryListRow'
import React, { Component } from 'react'



const EntryList = ({ db, setEntryToEdit, deleteEntry }) => {
    const { data } = db;
    return (
        <>
        {db && data.length === 0 ?<EntryListEmpty/> :
            <div className="table-responsive">
            

                <table className="table table-borderless caption-top">
                    <caption>Entradas de : {new Date(Date.now()).toLocaleDateString()}</caption>
                    <thead>
                        <tr>
                            <th className="col" style={{ width: '10%' }}>#</th>
                            <th className="col" style={{ width: '20%' }}>Precio</th>
                            <th className="col" style={{ width: '35%' }}>Descripcion</th>
                            <th className="col" style={{ width: '35%' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                (data.map((el, index) =>
                                    <EntryListRow
                                        key={el.id} el={el}
                                        index={index}
                                        setEntryToEdit={setEntryToEdit}
                                        deleteEntry={deleteEntry}
                                    />)) 
                        }

                    </tbody>
                    
                </table>
            </div>
            }
        </>
    )
}

export default EntryList
