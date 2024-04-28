import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    return (
        <form className='new-event-form'>
            <label>
                <span>EventTitle:</span>
                <input
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>EventDate:</span>
                <input
                    type='date'
                    onChange={e => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <button>Submit</button>
            <p>title- {title}, date- {date}</p>
            <p onClick={resetForm}>rest the form</p>
        </form>
    )
}
