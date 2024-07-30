import { CSSProperties } from 'styled-components'
import styles from './Card.module.scss'

export default function Card({ 
    cardColor,
    media,
    style,
    children,
    ...delegated
}: {
    cardColor: string,
    media?: React.ReactNode,
    style?: CSSProperties
    children: React.ReactNode
}) {

    return (
        <div className={styles.card} style={{ backgroundColor: cardColor, ...style}} {...delegated}>
            {children}

            <div className={styles.cardMediaWrapper}>
                {media}
            </div>
        </div>
    )
}