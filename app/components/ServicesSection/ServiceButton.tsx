import Image from "next/image"
import { useState } from "react"
import type { cardType } from "./ServicesSection"
type Props = {
    item: cardType,

}
export default function ServiceButton({ item }: Props) {
    const [hover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="card"
            style={{
                backgroundColor: hover ? '#7335b7' : '',
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
            <Image
                width={75}
                height={75}
                unoptimized
                style={{ color: hover ? 'white' : 'black' }}
                src={item.image}
                alt={"card"}
            />
            <h1 style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 28
            }}>{item.title}</h1>
            <p style={{ marginTop: 8 }}>{item.subtitle}</p>
            <div
                className="cardArrow"
                style={{}}
            >
                <p style={{ marginTop: 12 }}>{'Read More'}</p>
            </div>
        </div>
    )
}