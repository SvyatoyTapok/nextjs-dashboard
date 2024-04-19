import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton";

export default function FooterSection() {
    return (
        <div
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#7335b7',
                borderRadius: '350px 0 0 0 ',
                justifyContent: 'center',
            }}>
            <div className="wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 125,
                    width: '70%',
                    justifyContent: 'evenly'
                }}>
                <div className="FirstColumn"
                    style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Digian'}</h1>
                    <p style={{ marginTop: 20, color: 'white' }}>
                        {`Necessary, making this
                        the first true generator
                        on the Internet. It uses a
                        dictionary of over 200 Latin
                        words, combined with a handful`}
                    </p>
                </div>
                <div
                    className="SecondColumn"
                    style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Links'}</h1>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Home'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'About'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Services'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Contact Us'}</p>
                </div>
                <div
                    className="ThirdColumn"
                    style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Subscribe'}</h1>
                    <input
                        className="focus:ring-transparent"
                        style={{
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid white',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            color: 'white',
                            outlineWidth: '0',
                        }}
                        placeholder="Enter email"
                    />
                    <HeaderMoveButton
                        text={"Subscribe"}
                        href={"/"}
                        bgColor="#f8842b"
                        textColor="white"
                        marginTop={15}
                        width={"100%"}
                        paddingTop={10}
                        paddingBottom={10}
                        paddingLeft={55}
                        paddingRight={55}
                        borderRadius={1}
                    />
                </div>
                <div
                    className="FourthColumn"
                    style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Address'}</h1>
                </div>
            </div>
        </div>
    )
}