import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('baft')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('baft')
    }

    const handelSubmit = e => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        addEvent(event)
        resetForm()
    }

    return (
        <form className='new-event-form' onSubmit={handelSubmit}>
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
            <label>
                <span>Event location:</span>
                <select onChange={e => setLocation(e.target.value)}>
                    <option value="baft">Baft</option>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
