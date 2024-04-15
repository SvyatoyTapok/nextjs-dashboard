"use client"
import Image from "next/image";
import CarouselButtons from "../Carousel/CarouselButtons";
import { useState } from "react";

export type User = {
    id: number,
    src: string,
    text: string,
    name: string,
}

export default function TestimonialSection() {

    const usersData: User[] = [
        {
            id: 0,
            name: 'MOROJINK',
            src: 'https://html.design/demo/digian/images/client.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        },
        {
            id: 1,
            name: 'MOROJINK',
            src: 'https://html.design/demo/digian/images/client.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        },
        {
            id: 2,
            name: 'MOROJINK',
            src: 'https://html.design/demo/digian/images/client.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        },
    ]

    const [move, setMove] = useState('1')
    const fullwidth = 1920 * usersData.length
    return (
        <div
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <h1 style={{
                color: 'black',
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>Testimonial</h1>
            <div
                className="sliderLine"
                style={{
                    transform: `translateX(${move})`,
                    transition: 'transform 500ms ease-in-out',
                    display: 'flex',
                    flexDirection: 'row',
                    width: fullwidth
                }}>
                {usersData.map(item => (
                    <div
                        key={item.id}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}>
                        <div
                            className="baseContainer"
                            style={{
                                display: 'flex',
                                marginTop: '4%',
                                width: '50%',
                                backgroundColor: '#7335b7',
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                padding: 40,
                                position: 'relative'
                            }}>
                            <Image
                                src={item.src}
                                alt={'avatarImage'}
                                width={125}
                                height={125}
                                style={{
                                    borderRadius: '100%',
                                    position: 'absolute',
                                    top: -62.5
                                }} />
                            <p style={{
                                fontSize: 24,
                                color: 'white',
                                fontWeight: 'bold',
                                marginTop: '5%'
                            }}>{item.name}</p>
                            <p style={{
                                color: 'white',
                                textAlign: 'center',
                                marginTop: '2%'
                            }}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CarouselButtons setMove={setMove} amount={usersData} notActiveColor={'#7335b7'} />
        </div>
    )
}