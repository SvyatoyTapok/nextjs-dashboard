import Image from "next/image"
import { useState } from "react"
import type { cardType } from "./ServicesSection"
import Link from "next/link"

type Props = {
    item: cardType,
}

export default function ServiceButton({ item }: Props) {
    const [hover, setHover] = useState(false)
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        setPositionX(mouseX / 100 * 70)
        setPositionY(mouseY / 100 * 80)

        console.log()
    }

    return (
        <div
            onMouseEnter={(e) => handleMouseMove(e)}
            onMouseLeave={(e) => handleMouseMove(e)}

            style={{
                display: 'flex',
                overflow: 'hidden',
                boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                borderRadius: 10,
            }}>
            <div style={{
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Link
                    href={item.url}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="card"
                    style={{
                        transition: 'all 300ms',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flexDirection: 'column',
                        width: 262,
                        height: 320,
                        textAlign: 'center',
                        borderRadius: 10,
                    }}>
                    <div style={{
                        transition: 'all 300ms',
                        filter: hover ? 'invert(100%)' : 'invert(0%)'
                    }}>
                        <Image
                            width={75}
                            height={75}
                            unoptimized
                            src={item.image}
                            alt={"card"}
                        />
                    </div>
                    <h1 style={{
                        transition: 'all 300ms',
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginTop: 28,
                        color: hover ? 'white' : 'black'
                    }}>{item.title}</h1>
                    <p style={{
                        transition: 'all 300ms',
                        marginTop: 8,
                        color: hover ? 'white' : 'black'
                    }}>{item.subtitle}</p>
                    <div
                        style={{
                            position: 'absolute',
                            left: positionX,
                            top: positionY,
                            transition: 'all 300ms',
                            zIndex: -1,
                            borderRadius: 250,
                            height: 100,
                            width: 100,
                            backgroundColor: hover ? '#7335b7' : '',
                        }}>
                    </div>
                </Link>
            </div>
        </div>
    )
}