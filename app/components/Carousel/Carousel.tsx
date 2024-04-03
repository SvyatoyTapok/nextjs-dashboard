import Image from "next/image"
import sliderImg from '../../../public/carouselImg/slider-img.png'
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton"

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

    return (
        <div
            className="container"
            style={{
                alignContent: 'center',
                height: '100%'
            }}>
            < div className="slider" >
                <div className="sliderLine"
                    style={{
                        width: 3450,
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    {carouselData.map(item =>
                        <div
                            className="sliderItem"
                            key={item.id}>
                            <div className="imageContaner"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: 1920,
                                    justifyContent: 'center',
                                }}>
                                <div style={{
                                    display: 'flex', width: '60%',
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
                                            fontSize: 50,
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

                    )

                    }

                </div>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'black' }}></div>
            </div >
            <button></button>
        </div >
    )
}