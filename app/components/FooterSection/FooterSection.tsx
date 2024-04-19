export default function FooterSection() {
    return (
        <div
            className="container"
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#7335b7',
                borderRadius: '350px 0 0 0 ',
                justifyContent: 'center'
            }}>
            <div className="wrapper"
                style={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 125,
                    justifyContent: 'space-between'
                }}>
                <div className="FirstColumn"
                    style={{
                        display: 'flex',
                        flex: 25,
                        width: '100%',
                        flexDirection: 'column',
                    }}>
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
                    style={{
                        display: 'flex',
                        flex: 25,
                        flexDirection: 'column',
                        paddingLeft: '10%',
                    }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Links'}</h1>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Home'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'About'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Services'}</p>
                    <p style={{ marginTop: 20, color: 'white' }}>{'Contact Us'}</p>
                </div>
                <div
                    className="ThirdColumn"
                    style={{
                        display: 'flex',
                        flex: 25,
                        width: '100%',
                        flexDirection: 'column',
                    }}>
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
                </div>
                <div
                    className="FourthColumn"
                    style={{
                        display: 'flex',
                        flex: 25,
                        width: '100%',
                        flexDirection: 'column',
                    }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>{'Address'}</h1>
                </div>
            </div>
        </div>
    )
}