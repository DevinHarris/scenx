
import Image from 'next/image';
import styles from './HeroImage.module.scss';

export default function HeroImage({ src }: {
    src: string
}) {
    return (
        <div className={styles.heroImageWrapper}>
            <Image src={src} alt='image' className={styles.heroImage} width={0} height={0} priority unoptimized/>
        </div>
    )
}