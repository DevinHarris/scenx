import styles from './Logo.module.scss';

interface LogoProps {
    href?: string,
    withCaption?: boolean
}

export default function Logo({ href, withCaption, ...delegated }: LogoProps) {

    const Tag  = typeof href === 'string' ? 'a' : 'span';


    return (
        <Tag
            href={href}
            className={`${styles.logo} ${href ? styles.logoLink : ''}`}
            {...delegated}
        >
            {withCaption ? (
                <span>scenx <span className={styles.logoCaption}>selfcare.</span></span>
            ) : 'scenx.'}
        </Tag>
    )
}