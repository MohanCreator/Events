import {Component} from 'react'
import './index.css'
import EventItem from '../EventItem'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const eventStatus = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  clickToKnowAboutRegister: 'CLICK_TO_KNOW_ABOUT_REGISTER',
}

class Events extends Component {
  state = {eventStatusInState: eventStatus.clickToKnowAboutRegister}

  eventTriggered = registrationStatus => {
    this.setState({eventStatusInState: registrationStatus})
  }

  switchCase = () => {
    const {eventStatusInState} = this.state
    switch (eventStatusInState) {
      case eventStatus.clickToKnowAboutRegister:
        return this.renderKnowAboutRegister()
      case eventStatus.registered:
        return this.renderRegistered()
      case eventStatus.yetToRegister:
        return this.renderYetToRegister()
      case eventStatus.registrationClosed:
        return this.renderRegistrationClosed()
      default:
        return null
    }
  }

  renderKnowAboutRegister = () => {
    return (
      <div className="no-event-container">
        <p className="no-event">
          Click on an event, to view its registration details
        </p>
      </div>
    )
  }

  renderRegistered = () => {
    return (
      <div className="registered-container">
        <img
          className="registered-img"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1 className="registered-para">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderYetToRegister = () => {
    return (
      <div className="yet-to-register-container">
        <img
          className="yet-to-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="yet-para">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button className="yet-but">Register Here</button>
      </div>
    )
  }

  renderRegistrationClosed = () => {
    return (
      <div className="registration-closed-container">
        <img
          className="registration-closed-img"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1 className="registration-closed-para">
          Registrations Are Closed Now!
        </h1>
        <p>Stay tuned. We will reopen</p>
      </div>
    )
  }

  render() {
    return (
      <div className="event-container">
        <div className="event-list-container">
          <h1 className="event-heading">Events</h1>
          <ul className="list">
            {eventsList.map(event => (
              <EventItem
                key={event.id}
                eventTriggered={this.eventTriggered}
                event={event}
              />
            ))}
          </ul>
        </div>
        <div>{this.switchCase()}</div>
      </div>
    )
  }
}

export default Events
