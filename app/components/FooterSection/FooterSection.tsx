export default function FooterSection() {
    return (
        <div className="container"
            style={{
                paddingTop: 145,
                backgroundColor: '#7335b7',
                borderRadius: '350px 0 0 0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div className="wrapper"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '65%'
                }}>
                <div className="FirstColumn"
                    style={{ display: 'flex', maxWidth: '25%', flexDirection: 'column' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>Digian</h1>
                    <p style={{ marginTop: 20, color: 'white' }}>
                        Necessary, making this
                        the first true generator
                        on the Internet. It uses a
                        dictionary of over 200 Latin
                        words, combined with a handful
                    </p>
                </div>
                <div className="SecondColumn" style={{ display: 'flex', maxWidth: '25%', flexDirection: 'column' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>Links</h1>
                    <p style={{ marginTop: 20, color: 'white' }}>Home</p>
                    <p style={{ marginTop: 20, color: 'white' }}>About</p>
                    <p style={{ marginTop: 20, color: 'white' }}>Services</p>
                    <p style={{ marginTop: 20, color: 'white' }}>Contact Us</p>
                </div>
                <div className="ThirdColumn"
                    style={{ display: 'flex', maxWidth: '25%', flexDirection: 'column' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>Subscribe</h1>
                    <input
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            borderBottom: '1px solid white',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            color: 'white',
                            outlineWidth: '0'
                        }}
                        placeholder="Enter email"
                    ></input>
                </div>
                <div className="FourthColumn"
                    style={{ display: 'flex', maxWidth: '25%' }}>
                    <h1 style={{ fontWeight: 600, color: 'white', fontSize: 30 }}>Address</h1>
                </div>
            </div>
        </div>
    )
}