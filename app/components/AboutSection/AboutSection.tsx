import Image from "next/image";
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton";


export default function AboutSection() {
    return (
        <div
            className="wrapper"
            style={{
                display: 'flex',
                backgroundColor: '#7335b7',
                alignItems: 'center',
                borderRadius: '250px 0 250px 0',
                justifyContent: 'center',
                height: '75vh'
            }}>
            <div
                className="contentContainer"
                style={{
                    width: '60%',
                    display: 'flex'
                }}
            >
                <div
                    className="aboutContainer"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        justifyContent: 'center',
                    }}>
                    <p
                        className="title"
                        style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    >About Us</p>
                    <p className="subTitle"
                        style={{ marginTop: 12, color: 'white' }}
                    >{`There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words which don't
                    look even slightly believable.
                    If you are going to use a passag
                    of Lorem Ipsum, you need to be
                    sure there isn't anything
                    embarrassing hidden in the middle
                    of text. All`}</p>
                    <HeaderMoveButton
                        marginTop={20}
                        text={"Read More"}
                        href={"./"}
                        width={200}
                        height={52}
                        bgColor="#f8842b"
                    />
                </div>
                <div
                    className="imageContainer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                    }}
                >
                    <Image
                        alt="image"
                        src={'https://html.design/demo/digian/images/about-img.png'}
                        width={555}
                        height={567}
                        unoptimized
                    />
                </div>
            </div>
        </div>
    )
}