import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styles from './EnvitedButton.module.scss'


interface EnvitedButtonProps {
  routerLink?: boolean
  state?: any
  href?: string
  className?: string
}


const EnvitedButton = ({
  routerLink = false,
  state = void 0,
  href = '',
  className = void 0,
  children = void 0
}: PropsWithChildren<EnvitedButtonProps>): JSX.Element => routerLink
  ? (
    <Link
      className={clsx(className, styles.envitedButton)}
      state={state}
      to={href}
    >
      {children}
    </Link>
  )
  : (
    <a
      className={clsx(className, styles.envitedButton)}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </a>
  )

export default EnvitedButton
