import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ])
  console.log(showModal)
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in mario kingdom"

  return (
    <div className="App">
      <Title title="Event in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {/* <Modal>
        <h2>10% off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat.</p>
      </Modal>}
      <div>
        <button onClick={() => { setShowModal(true) }}>Show Modal</button>
      </div>
    </div >
  );
}

export default App;
