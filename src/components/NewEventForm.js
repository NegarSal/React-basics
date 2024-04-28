import { useState, useRef } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')
    const title = useRef()
    const date = useRef()

    const resetForm = () => {
        //setTitle('')
        //setDate('')
        title.current.value = ""
        date.current.value = ""
    }

    const handelSubmit = e => {
        e.preventDefault()
        console.log(title, date)
        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()

        // const event = {
        //     title: title,
        //     date: date,
        //     id: Math.floor(Math.random() * 10000)
        // }
        // addEvent(event)
        // resetForm()
    }

    return (
        <form className='new-event-form' onSubmit={handelSubmit}>
            <label>
                <span>EventTitle:</span>
                <input
                    type='text'
                    //onChange={e => setTitle(e.target.value)}
                    //value={title}
                    ref={title}
                />
            </label>
            <label>
                <span>EventDate:</span>
                <input
                    type='date'
                    //onChange={e => setDate(e.target.value)}
                    //value={date}
                    ref={date}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}
