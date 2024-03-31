'use client'

import Link from 'next/link'
import styles from './mystyle.module.css'
import { poppins } from '@/app/ui/fonts';
import { useState } from 'react';


export default function Header() {

    const [activeButton, setActiveButton] = useState(false)
    return (
        <div className={styles.headerContainer}>
            <Link
                onMouseOver={() => setActiveButton(true)}
                onMouseOut={() => setActiveButton(false)}
                className={activeButton
                    ? styles.inactiveLinkText
                    : styles.activeLinkText}
                href={'/'}
            >HOME</Link>
            <Link className={`${poppins.className} styles.linkText`} href={'./about'}>ABOUT</Link>
            <Link className={`${poppins.className} styles.linkText`} href={'/phone'}>SERVICES</Link>
            <Link className={`${poppins.className} styles.linkText`} href={'/phone'}>CONTACT US</Link>
        </div>
    )
}