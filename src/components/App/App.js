import EntryForm from '../Entry/EntryForm';
import EntryList from '../Entry/EntryList';
import React, { useState, useEffect } from 'react'
import { helper_http } from '../../helpers/helper_http';
import './App.css';
import Message from '../Message';
import Loader from '../Loader';
import Total from '../Total/Total';
import Navbar from '../Navbar/Navbar';

const App = () => {
  const [db, setDB] = useState({data:null})
  const [entryToEdit, setEntryToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  let url = "http://localhost:8000/api/v1/entries"
  let api = helper_http()

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if (!res.err) {
        setDB(res)
        setError(null)
      } else {
        setDB(null)
        setError(res)
      }
      setLoading(false)
    })
  }, [])
  const createEntry = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    }
    api.post(url, options).then((res) => {
      if (!res.err) {

        setDB({
          data: [...db.data, res.data]
        });
      } else {
        setError(res)
      }
    })
  }
  const updateEntry = (entry) => {
    let options = {
      body: entry,
      headers: { "content-type": "application/json" },
    };
    let endpoint = `${url}/${entry.id}`
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let format = entryToEdit
        format.id = entry.id
        format.attributes.price = entry.price
        format.attributes.description = entry.description
        let newData = db.data.map((el) => (el.id === entry.id ? format : el));
        setDB({ data: newData });
      } else {
        setError(res);
      }
    })

  }
  const deleteEntry = (id) => {
    let endpoint = `${url}/${id}`;
    api.del(endpoint).then((res) => {
      if (!res.err) {
        let newData = db.data.filter((el) => el.id != id)
        setDB({ data: newData })
      } else {
        setError(res)
      }
    })
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="m-4 text-center">{entryToEdit ? 'Editar Entrada' : 'Nueva Entrada'}</h4>
        <EntryForm
          createEntry={createEntry}
          updateEntry={updateEntry}
          entryToEdit={entryToEdit}
          setEntryToEdit={setEntryToEdit}
        />

        {loading && <Loader />}
        {error && <Message />}
        <h4 className="text-center m-4">Lista de entradas</h4>
        {db.data && <EntryList
          db={db}
          setEntryToEdit={setEntryToEdit}
          deleteEntry={deleteEntry} />

        }
        {db.data && <Total data={db.data} />}
      </div>
    </>
  )
}

export default App

