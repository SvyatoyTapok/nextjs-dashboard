'use client'

import styles from './mystyle.module.css'
import { useState } from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMoveButton from '../HeaderMoveButton/HeaderMoveButton';
export default function Header() {

    const [activeButton, setActiveButton] = useState(1)

    return (
        <div className={styles.wrapper}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                left: 0,
                marginLeft: 30,
            }}>
                <HeaderLogo href={'/'} />
            </div>
            <div className={styles.headerItems}>
                <HeaderButton
                    isHover={true}
                    textColor={activeButton === 1 ? 'black' : 'white'}
                    bgColor={activeButton === 1 ? 'white' : ''}
                    text='HOME'
                    href='/'
                    onClick={() => setActiveButton(1)}
                    fontSize={20}
                />
                <HeaderButton
                    isHover={true}
                    textColor={activeButton === 2 ? 'black' : 'white'}
                    bgColor={activeButton === 2 ? 'white' : ''}
                    text='ABOUT'
                    href='/about'
                    onClick={() => setActiveButton(2)}
                    fontSize={20}
                />
                <HeaderButton
                    isHover={true}
                    textColor={activeButton === 3 ? 'black' : 'white'}
                    bgColor={activeButton === 3 ? 'white' : ''}
                    text='SERVICES'
                    href='/services'
                    onClick={() => setActiveButton(3)}
                    fontSize={20}
                />
                <HeaderButton
                    isHover={true}
                    text='CONTACT US'
                    href='/'
                    textColor={activeButton === 4 ? 'black' : 'white'}
                    bgColor={activeButton === 4 ? 'white' : ''}
                    onClick={() => setActiveButton(4)}
                    fontSize={20}
                />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                right: 0,
                marginRight: 20
            }}>
                <HeaderMoveButton
                    href={'/'}
                    text={'GET A QUOTE'}
                    bgColor='#f8842b'
                    fontSize={'1rem'}
                    textColor='white'
                    height={42}
                    width={180}
                />
            </div>
        </div>
    )
}