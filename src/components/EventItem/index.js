import './index.css'

const EventItem = props => {
  const {event, eventTriggered} = props
  const {imageUrl, name, location, registrationStatus} = event

  const clickToEvent = () => {
    console.log(registrationStatus)
    eventTriggered(registrationStatus)
  }

  return (
    <li className="list-container">
      <button onClick={clickToEvent} className="button-event list-items">
        <img className="list-image" src={imageUrl} alt="event" />
        <p className="heading-item">{name}</p>
        <p className="para-item">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
