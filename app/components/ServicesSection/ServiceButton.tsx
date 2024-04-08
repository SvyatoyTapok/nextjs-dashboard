import Image from "next/image"
import { useState } from "react"
import type { cardType } from "./ServicesSection"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
type Props = {
    item: cardType,
}
export default function ServiceButton({ item }: Props) {
    const [hover, setHover] = useState(false)

    return (
        <div
            style={{
                boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                overflow: 'hidden',
                borderRadius: 10,
            }}>
            <div
                style={{
                    position: 'relative',
                }}>
                <Link
                    href={item.url}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="card"
                    style={{
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
                            left: hover ? '-25%' : '0%',
                            top: hover ? '-25%' : '0%',
                            transition: 'all 300ms',
                            zIndex: -10,
                            borderRadius: 250,
                            height: 500,
                            width: 500,
                            backgroundColor: hover ? '#7335b7' : '',
                        }}>
                    </div>
                </Link>
            </div>
        </div>
    )
}