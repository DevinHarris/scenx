import styles from './Navbar.module.scss'

export default function Navbar({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <nav className={styles.navbar}>
            {children}
        </nav>
    )
}