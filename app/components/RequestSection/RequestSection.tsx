"use client"
import { useState } from "react";
import HeaderMoveButton from "../HeaderMoveButton/HeaderMoveButton";


export default function RequestSection() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div
            className="container"
            style={{
                display: 'flex',
                width: '100wh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div
                className="inputContainer"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <h1 style={{ fontSize: 40, fontWeight: 'bold' }}>{'Request A Call back'}</h1>
                <input
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                    placeholder="Full Name"
                    onChange={e => setName(e.target.value)}
                />
                <input
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                    placeholder="Phone number"
                    onChange={e => setNumber(e.target.value)}
                />
                <input
                    style={{
                        marginTop: 10,
                        marginBottom: 30,
                        height: 120
                    }}
                    placeholder="Message"
                    onChange={e => setMessage(e.target.value)}
                />
                <HeaderMoveButton
                    text={"SEND"}
                    width={182}
                    height={52}
                    bgColor="#7335b7"
                    href={"/"}
                    borderRadius={3}
                />
            </div>
            <div
                className="mapContainer"
                style={{
                    height: 200,
                    backgroundColor: 'red'
                }}
            >

            </div>
        </div>
    )
}