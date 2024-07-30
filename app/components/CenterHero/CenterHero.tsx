import styles from './CenterHero.module.scss'

export default function CenterHero({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.center_hero}>
            {children}
        </div>
    )
}