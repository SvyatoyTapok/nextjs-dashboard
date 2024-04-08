"use client"
import ServiceButton from "./ServiceButton"
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton"
export type cardType = {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    url: string,
}

export default function ServicesSection() {
    const cardsData: cardType[] = [
        {
            id: '1',
            image: 'https://html.design/demo/digian/images/s1.png',
            title: 'Link Building',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            url: './'
        },
        {
            id: '2',
            image: 'https://html.design/demo/digian/images/s2.png',
            title: 'On page SEO',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            url: './',
        },
        {
            id: '3',
            image: 'https://html.design/demo/digian/images/s3.png',
            title: 'Online Marketing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            url: './',
        },
        {
            id: '4',
            image: 'https://html.design/demo/digian/images/s4.png',
            title: 'Email Marketing',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            url: './',
        },
    ]

    return (
        <div
            className="container"
            style={{

                display: 'flex',
                flexDirection: 'column'
            }}>
            <div
                className="titleContainer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}>
                <h2 style={{
                    fontSize: 40,
                    color: 'black',
                    fontWeight: 'bold',
                    padding: 0,
                    margin: 0
                }}>{'Our Services'}</h2>
                <h1>{'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</h1>
            </div>
            <div
                className="cardsContainer"
                style={{
                    marginTop: '2%',
                    width: '60%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                }}>
                {cardsData.map(item => (
                    <ServiceButton
                        key={item.id}
                        item={item}
                    />))}
            </div>
            <div style={{
                marginTop: 40,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
            }}>
                <HeaderMoveButton
                    paddingLeft={40}
                    paddingRight={40}
                    height={52}
                    width={200}
                    fontSize={20}
                    bgColor="#5a2a8f"
                    text="View More"
                    href="/"
                    textColor="white"
                />
            </div>
        </div>
    )
}