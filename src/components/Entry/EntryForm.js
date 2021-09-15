import React, { useState, useEffect } from 'react'
import "./EntryForm.css"

const initialForm = {
    id: null,
    price: "",
    description: "",
}
const EntryForm = ({ createEntry, updateEntry, entryToEdit, setEntryToEdit }) => {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if (entryToEdit) {
            setForm({
                price: entryToEdit.attributes.price,
                description: entryToEdit.attributes.description,
                id: entryToEdit.id
            })
        } else {
            setForm(initialForm)
        }
    }, [entryToEdit])

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
            createEntry(form)
        } else {
            // entryToEdit.id = form.id
            updateEntry(form)
        }
        handleReset()
    }
    const handleReset = (e) => {
        setForm(initialForm);
        setEntryToEdit(null)
    }
    const handleInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-sm">
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control " name="price" maxLength="4" minLength="1" onInput={handleInput} placeholder="price" onChange={handleChange} value={form.price} />
                    <input type="text" className="form-control " name="description" placeholder="description" onChange={handleChange} value={form.description} />
                    <button className="btn btn-outline-secondary" type="submit">
                        <i class="bi bi-sd-card"></i>
                    </button>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleReset}>Limpiar</button>
                </div>

            </form>

        </>

    )
}

export default EntryForm
