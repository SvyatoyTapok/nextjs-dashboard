"use client"
import Image from "next/image"
import sliderImg from '../../../public/carouselImg/slider-img.png'
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton"
import { useState } from "react"

export default function Carousel() {
    const carouselData = [
        {
            id: '1',
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: '2',
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: '3',
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
    ]
    const [move, setMove] = useState('0')
    return (
        <div className="container">
            < div className="slider" style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="sliderLine"
                    style={{
                        width: '5760px',
                        transform: `translateX(${move})`,
                        transition: 'transform 750ms ease-in-out',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    {carouselData.map(item =>
                        <div
                            style={{ width: 1920 }}
                            className="sliderItem"
                            key={item.id}>
                            <div className="imageContaner"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',

                                }}>
                                <div style={{
                                    display: 'flex', width: '63%'
                                }}>
                                    <Image
                                        priority={true}
                                        width={600}
                                        src={sliderImg}
                                        alt={"img"}
                                    />
                                    <div
                                        className="textContainer"
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                        <p style={{
                                            textAlign: 'center',
                                            fontSize: 46,
                                            fontWeight: 'bold',
                                            color: 'white'
                                        }}>
                                            {item.title}
                                        </p>
                                        <p
                                            style={{
                                                color: 'white',
                                                textAlign: 'center',
                                                marginTop: 10
                                            }}>
                                            {item.subTitle}
                                        </p>
                                        <HeaderMoveButton
                                            paddingLeft={30}
                                            paddingRight={30}
                                            height={55}
                                            fontSize={18}
                                            marginTop={40}
                                            bgColor="#5a2a8f"
                                            text="Contact Us"
                                            href="/"
                                            textColor="white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}