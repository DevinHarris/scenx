'use client'
import { useContext } from 'react';
import Image from "next/image";
import CenterHero from "../CenterHero";
import FullScreenWrapper from "../FullScreenWrapper";
import Logo from '../Logo'
import HeroImage from "../HeroImage/HeroImage";
import Card from "../Card";
import { UserContext } from '../../providers/userContext'

import styles from './Home.module.scss'

export default function Home() {

    const { user, setUser } = useContext(UserContext);

    return (
        <main className={`landing ${styles.landing}`}>
            <FullScreenWrapper noOveflow={false}>
            <div className={styles.landingLeft}>
                <h1 className="landing_caption">selfcare is nothing but fun.</h1>
                
                        <div>
                            {/* <h1 className={styles.signupHeading}>Sign up</h1> */}
                            <p className={styles.signupText}>Signup and join a community of people just like you.</p>
                        </div>
                        <form>
                            <input className="form_input" type="text" value={user.firstName} onChange={(e) => setUser(e.target.value)} />
                            <button className="form_btn">Join</button>
                        </form>
                
            </div>
                
                <HeroImage src="/images/bg-img-4.jpg" />
            <div>
               
                <Card 
                    cardColor="hsl(0, 0%, 95%)" 
                   
                >
                   <>
                        <h1>Welcome, {user.firstName}.</h1>
                        <p>Join a community.</p> 
                   </>
                </Card>
            </div>
            </FullScreenWrapper>
        </main> 
    )
}