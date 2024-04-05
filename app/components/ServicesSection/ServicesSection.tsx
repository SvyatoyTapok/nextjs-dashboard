"use client"
import { useState } from "react"
import ServiceButton from "./ServiceButton"
export type cardType = {
    id: string,
    image: string,
    title: string,
    subtitle: string,
}

export default function ServicesSection() {
    const cardsData: cardType[] = [
        {
            id: '1',
            image: 'https://html.design/demo/digian/images/s1.png',
            title: 'Link Building',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '2',
            image: 'https://html.design/demo/digian/images/s2.png',
            title: 'On page SEO',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '3',
            image: 'https://html.design/demo/digian/images/s3.png',
            title: 'Online Marketing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: '4',
            image: 'https://html.design/demo/digian/images/s4.png',
            title: 'Email Marketing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ]


    return (
        <div
            className="container"
            style={{
                width: 1920,
                display: 'flex',
                flexDirection: 'column'
            }}>
            <div
                className="titleContainer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}>
                <h2 style={{
                    fontSize: 40,
                    color: 'black',
                    fontWeight: 'bold',
                    padding: 0,
                    margin: 0
                }}>{'Our Services'}</h2>
                <h1>{'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</h1>
            </div>
            <div
                className="cardsContainer"
                style={{
                    width: '60%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                }}
            >
                {cardsData.map(item => (
                    <ServiceButton
                        key={item.id}
                        item={item}
                    />))}
            </div>
        </div>
    )
}