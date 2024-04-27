import './NewEventForm.css'

export default function NewEventForm() {
    return (
        <form className='new-event-form'>
            <label>
                <span>EventTitle:</span>
                <input type='text' />
            </label>
            <label>
                <span>EventDate:</span>
                <input type='date' />
            </label>
            <button>Submit</button>
        </form>
    )
}
