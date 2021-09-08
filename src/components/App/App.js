import EntriesForm from '../Entries/EntriesForm';
import EntriesList from '../Entries/EntriesList';
import initialDb from '../App/data.json'
import React, { useState, useEffect } from 'react'


import './App.css';

const App = () => {
  const [db, setDB] = useState(initialDb)
  const [entrieToEdit, setEntrieToEdit] = useState()
  const createEntrie = (data) => { 
    data.id = Date.now()
    console.log(data)
    setDB([...db,data])
  }
  const updateEntrie = (entrie) => {
    let newData = db.map((el)=> el.id == entrie.id ? entrie : el)
    setDB(newData)
  }
  const deleteEntrie = (id) => { 
    let newData = db.filter((el) => el.id!=id )
    setDB(newData)
  }
  return (
    <>
      <div className="m-container">
        <h3 className="app-title">Autolavado</h3>
        <EntriesForm
          createEntrie = {createEntrie}
          updateEntrie = {updateEntrie}
          entrieToEdit = {entrieToEdit}
          setEntrieToEdit = {setEntrieToEdit}
          />

        <EntriesList data={db} setEntrieToEdit={setEntrieToEdit} deleteEntrie = {deleteEntrie} />
      </div>
    </>
  )
}

export default App

