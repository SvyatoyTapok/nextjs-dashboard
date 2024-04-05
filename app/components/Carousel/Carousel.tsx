"use client"
import Image from "next/image"
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton"
import { useState } from "react"
import CarouselButtons from "./CarouselButtons"

export type carouselDataType = {
    id: number,
    src: string,
    title: string,
    subTitle: string,
}

export default function Carousel() {
    const carouselData: carouselDataType[] = [
        {
            id: 0,
            src: 'https://html.design/demo/digian/images/slider-img.png',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: 1,
            src: 'https://html.design/demo/digian/images/slider-img.png',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: 2,
            src: 'https://html.design/demo/digian/images/slider-img.png',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
    ]

    const [move, setMove] = useState('1')
    return (

        <div className="container">
            < div
                className="slider"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <div
                    className="sliderLine"
                    style={{
                        width: 1920 * carouselData.length,
                        transform: `translateX(${move})`,
                        transition: 'transform 500ms ease-in-out',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    {carouselData.map(item =>
                        <div
                            style={{
                                display: 'flex',
                                width: 1920,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                            className="sliderItem"
                            key={item.id}>
                            <div className="imageContaner"
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                <div style={{
                                    display: 'flex',
                                    width: '60%',
                                }}>
                                    <Image
                                        priority={true}
                                        width={555}
                                        unoptimized
                                        height={533}
                                        src={item.src}
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
                                            fontSize: 48,
                                            fontWeight: 'bolder',
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
                                            paddingLeft={40}
                                            paddingRight={40}
                                            height={55}
                                            fontSize={20}
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
            <CarouselButtons amount={carouselData} setMove={setMove} />
        </div >
    )
}