import Image from "next/image"

type CaseData = {
    src: string,
    title: string,
    subTitle: string,
}

export default function CaseButton({ src, title, subTitle }: CaseData) {
    return (
        <div
            className='container'
            style={{
                margin: 15,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 555,
                height: 580,
                boxShadow: '0px 0px 10px 6px rgba(0, 0, 0, 0.25)',

            }}>
            <Image
                width={555}
                height={416}
                src={src}
                alt={'Case Image'}
            />
            <div className="titleContainer">
                <div
                    className="title"
                    style={{ marginTop: 12 }}>
                    <p style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{title}</p>
                </div>
                <div
                    className="subTitle"
                >
                    <p style={{ fontSize: 15, textAlign: 'center' }}>{subTitle}</p>
                </div>
            </div>
        </div>
    )
}