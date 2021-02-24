
import React, { useState, useEffect } from 'react';

export default function Notes() {

    //an array of content
    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect((() => {
        fetch("/notes")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setNotes(jsonRes));
    }))

    return (
        <div className="container">
            <h1>Notes Page</h1>
            {notes.map(note => {
                return (
                    <div>
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </div>
                )
            })}
        </div>
    )
}