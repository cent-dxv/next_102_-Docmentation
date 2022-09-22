import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from "../styles/event.module.css"

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async (category) => {
    const url = `http://localhost:4000/events?category=${category}`
    if (category === 'all'){
      console.log("rendering page ...");
      url = `http://localhost:4000/events`
    }

    const response = await fetch(url)
    const data = await response.json()
    setEvents(data)
    category === 'all' ?
    router.push(`/events`, undefined, { shallow: true }) : 
    router.push(`/events?category=${category}`, undefined, { shallow: true })
    
  }


  return (
    <>
      <button onClick={()=>fetchSportsEvents('sports')}>Sports Events</button>
      <button onClick={()=>fetchSportsEvents('art')}>art Events</button>
      <button onClick={()=>fetchSportsEvents('food')}>foods Events</button>
      <button onClick={()=>fetchSportsEvents('all')}>all Events</button>
      <h1>List of events</h1>
      {events.map(event => {
        return (
          <div key={event.id}>
            <h2 className={styles.text}>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default EventList

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query

  console.log(category); 
  const queryString = category ? `category=${category}` : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}