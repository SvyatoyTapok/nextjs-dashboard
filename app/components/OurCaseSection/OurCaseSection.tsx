import CaseButton from "../CaseButton/CaseButton"

export type CaseType = {
    id: string,
    src: string,
    title: string,
    subTitle: string,
}

export default function OurCaseSection() {

    const casesData: CaseType[] = [
        {
            id: '1',
            src: 'https://html.design/demo/digian/images/case-1.jpg',
            title: 'Sit amet consectetur adipisicing elit',
            subTitle: `Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        },
        {
            id: '2',
            src: 'https://html.design/demo/digian/images/case-2.jpg',
            title: 'Excepturi placeat nihil eos maxime',
            subTitle: `Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        },
    ]

    return (
        <div
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                }}>{'Our Case Studies'}</h2>
            </div>
            <div
                className="casesContainer"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',

                }}>
                {casesData.map(item => (
                    <CaseButton
                        key={item.id}
                        src={item.src}
                        title={item.title}
                        subTitle={item.subTitle}
                    />))}
            </div>
        </div>
    )
}