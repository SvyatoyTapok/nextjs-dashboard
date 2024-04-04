"use client"
import Image from "next/image"
import sliderImg from '../../../public/carouselImg/slider-img.png'
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
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: 1,
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        },
        {
            id: 2,
            src: './',
            title: 'Digital Marketing Experts',
            subTitle: 'Aenean scelerisque felis utorci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.'
        }
    ]
    const [move, setMove] = useState('0')
    return (
        <div className="container">
            < div
                className="slider"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1920
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
                                width: 1920,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            className="sliderItem"
                            key={item.id}>
                            <div className="imageContaner"
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <div style={{
                                    display: 'flex',
                                    width: '62%',
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
                <CarouselButtons amount={carouselData} setMove={setMove} />
            </div >
        </div >
    )
}