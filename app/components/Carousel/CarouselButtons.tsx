"use client"

type Props = {
    setMove: (px: string) => void
}

export default function CarouselButtons({ }: Props) {

    const active = 0

    // const handleClick = (transformInfo: number) => {
    //     setActive(transformInfo)
    //     switch (transformInfo) {
    //         case 0: setMove('0')
    //     }
    //     switch (transformInfo) {
    //         case 1: setMove('-1920px')
    //     }
    //     switch (transformInfo) {
    //         case 2: setMove('-3840px')
    //     }
    // }

    const buttons = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
    ]

    return (
        <div
            style={{
                height: '50',
                display: 'flex',
                alignItems: 'center',
            }}>
            {buttons.map(item => (
                <div
                    key={item.id}
                    // onClick={() => handleClick(item.id)}
                    style={{
                        marginLeft: '4px',
                        marginRight: '4px',
                        transition: 'all 150ms linear',
                        width: active === item.id ? '23px' : '15px',
                        height: active === item.id ? '23px' : '15px',
                        borderRadius: active === item.id ? 11.5 : 7.5,
                        backgroundColor: active === item.id ? 'orange' : 'white'
                    }}>
                </div>
            ))}
        </div>
    )
}