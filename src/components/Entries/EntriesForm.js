import React, { useState, useEffect } from 'react'

const initialForm = {
    id: null,
    price: "",
    description: "",
}
const EntriesForm = ({ createEntrie, updateEntrie, entrieToEdit, setEntrieToEdit }) => {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if (entrieToEdit) {
            setForm(entrieToEdit)
        } else {
            setForm(initialForm)
        }
    }, [entrieToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.price || !form.description) {
            alert("datos incompletos");
            return
        }
        if (form.id == null) {
            createEntrie(form)
        } else {
            updateEntrie(form)
        }
        handleReset()
    }
    const handleReset = (e) => {
        setForm(initialForm);
        setEntrieToEdit(null)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="price" placeholder="price" onChange={handleChange} value={form.price} />
            <input name="description" placeholder="description" onChange={handleChange} value={form.description} />
            <button type="submit" >Guardar</button>
            <button type="button" onClick={handleReset}>Limpiar</button>
        </form>
    )
}

export default EntriesForm
