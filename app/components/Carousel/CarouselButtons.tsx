import { useState } from "react"
import { carouselDataType } from "./Carousel"

type Props = {
    setMove: (px: string) => void
    amount: carouselDataType[]
}

export default function CarouselButtons({ setMove, amount }: Props) {
    const [active, setActive] = useState(0)
    const handleClick = (transformInfo: number) => {
        setActive(transformInfo)
        const transformPx = transformInfo * -1 * 1920
        setMove(`${transformPx}px`)
    }
    return (
        <div
            style={{
                marginTop: '50px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                width: 1920,
                justifyContent: 'center'
            }}>
            {amount.map((item: carouselDataType) => (
                <div
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    style={{
                        marginLeft: '4px',
                        marginRight: '4px',
                        transition: 'all 150ms linear',
                        width: active === item.id ? '23px' : '15px',
                        height: active === item.id ? '23px' : '15px',
                        borderRadius: active === item.id ? 11.5 : 7.5,
                        backgroundColor: active === item.id ? '#F8842B' : 'white'
                    }}>
                </div>
            ))}
        </div>
    )
}