import birthdayCake from '@/assets/images/Birthday cake.png'
import { ReactComponent as Calendar } from '@/assets/images/calendar.svg'
import { ReactComponent as Location } from '@/assets/images/location.svg'
import InfoDisplayer from '@/components/InfoDisplayer'
import { useAppSelector } from '@/hooks'
import styles from './Event.module.scss'


const Event = (): JSX.Element => {
  // Was planing to use dynamic route `/event/:id` but due to the time limit.

  // For name / host editing, was planning to use ContentEditable property and listen to the change event to update the event in store.

  const {
    name: eventName,
    host: eventHost,
    start: eventStartTime,
    end: eventEndTime,
    location: {
      street: eventStreet,
      suburb: eventSuburb,
      state: eventState,
      postcode: eventPostcode
    },
    photo: eventPhoto
  } = useAppSelector(state => state.event)


  return (
    <div className={styles.eventPage}>
      <img alt="birthday cake" className={styles.birthdayCake} src={birthdayCake} />

      <div className={styles.eventDetail}>
        <h2 className={styles.eventName}>Birthday Bash</h2>
        <p className={styles.eventHost}>
          Hosted by <span className={styles.hostName}>Elysia</span>
        </p>

        <InfoDisplayer
          description={eventEndTime.toString()}
          icon={<Calendar />}
          title={eventStartTime.toString()}
        />
        <InfoDisplayer
          description={`${eventSuburb}, ${eventState}, ${eventPostcode}`}
          icon={<Location />}
          title={eventStreet}
        />
      </div>
    </div>
  )
}

export default Event
