import { CSSProperties } from 'react'
import styles from './FullScreenWrapper.module.scss'

export default function FullScreenWrapper({
    children,
    noOveflow,
    column,
    ...delegated
}: {
    children: React.ReactNode,
    noOveflow: Boolean,
    column?: Boolean
}) {
   return (
        <div className={`${styles.fullScreenWrapper} ${!noOveflow ? styles.hiddenOverflow : '' } ${column ? styles.flexColumn : ''}`} {...delegated}>
            {children}
        </div>
   )
}