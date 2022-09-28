import { ReactComponent as ArrowRight } from '@/assets/images/arrow-right.svg'
import styles from './InfoDisplayer.module.scss'
import type { ReactElement } from 'react'


interface InfoDisplayerProps {
  icon: ReactElement
  title: string
  description: ReactElement | string
}


const InfoDisplayer = ({
  icon,
  title,
  description
}: InfoDisplayerProps): JSX.Element => (
  <div className={styles.infoDisplayer}>
    <span className={styles.infoIcon}>{icon}</span>
    <div className={styles.infoContent}>
      <p className={styles.infoTitle}>{title}</p>
      <p className={styles.infoDescription}>{description}</p>
    </div>
    <ArrowRight />
  </div>
)


export default InfoDisplayer
