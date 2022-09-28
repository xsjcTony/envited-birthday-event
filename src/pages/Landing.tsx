import { ReactComponent as PreviewImage } from '@/assets/images/Landing page image.svg'
import EnvitedButton from '@/components/EnvitedButton'
import styles from './Landing.module.scss'


const Landing = (): JSX.Element => (
  <div className={styles.landingPage}>
    <div className={styles.headingText}>
      <h1 className={styles.heading}>
        Imagine if
        <br />
        <span className={styles.headingGradient}>Snapchat</span>
        <br />
        had events.
      </h1>
      <p className={styles.description}>Easily host and share events with your friends across any social media.</p>
    </div>

    <PreviewImage className={styles.previewImage} />

    <EnvitedButton
      routerLink
      className={styles.createEventButton}
      href="create"
    >
      🎉 Create my event
    </EnvitedButton>
  </div>
)

export default Landing
