import React, { useState } from 'react';
import axios from "axios";

export default function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        };
        axios.post("http://localhost:3001/create", newNote);
    }
    return (
        <div className="container">
            <h1>Create a Note Page</h1>

            <form>
                <div className="form-group">
                    <input onChange={handleChange} value={input.title} name="title" autoComplete="off" className="form-control" type="text" placeholder="Note's Name" />
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} value={input.content} name="content" autoComplete="off" className="form-control" placeholder=" Text input"></textarea>
                </div>
                <div className="form-group">
                    <button onClick={handleClick} type="submit" className="btn btn-primary"> ADD NOTE</button>
                </div>

            </form>
        </div>
    )
}