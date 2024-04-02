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
    ]

    return (
        <div className="container" >
            < div className="slider"
                style={{
                    width: '1000px',
                    border: '2px solid black',
                    margin: '30px auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <div className="sliderLine"
                    style={{
                        height: '600px',
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',

                    }}>
                    {carouselData.map(item =>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className="sliderItem"
                            key={item.id}>
                            <div className="imageContaner"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Image
                                    width={600}
                                    height={500}
                                    src={sliderImg}
                                    alt={"img"} />
                                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="textContainer">
                                    <p style={{
                                        textAlign: 'center',
                                        fontSize: 46,
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>{item.title}</p>
                                    <p style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>{item.subTitle}</p>
                                    <HeaderMoveButton
                                        paddingBottom={12}
                                        paddingTop={12}
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
                    )
                    }
                </div>
            </div >
            <button></button>
        </div >
    )
}