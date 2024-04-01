'use client'

import styles from './mystyle.module.css'
import { useState } from 'react';
import HeaderButton from '../Button/HeaderButton';

export default function Header() {

    const [activeButton, setActiveButton] = useState(1)

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerContainer}>
                <HeaderButton
                    textColor='black'
                    bgColor={activeButton === 1 ? 'white' : ''}
                    text='HOME'
                    href='/'
                    onClick={() => setActiveButton(1)}
                />
                <HeaderButton
                    textColor='black'
                    bgColor={activeButton === 2 ? 'white' : ''}
                    text='ABOUT'
                    href='/about'
                    onClick={() => setActiveButton(2)}
                />
                <HeaderButton
                    textColor='black'
                    bgColor={activeButton === 3 ? 'white' : ''}
                    text='SERVICES'
                    href='/services'
                    onClick={() => setActiveButton(3)}
                />
                <HeaderButton
                    textColor='black'
                    text='CONTACT US'
                    href='/'
                    bgColor={activeButton === 4 ? 'white' : ''}
                    onClick={() => setActiveButton(4)}
                />
            </div>
        </div>
    )
}