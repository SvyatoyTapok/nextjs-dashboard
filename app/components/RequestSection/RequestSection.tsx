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
                    flexDirection: 'column'
                }}>
                <h1 style={{ fontSize: 40, fontWeight: 'bold' }}>{'Request A Call back'}</h1>
                <input
                    placeholder="Full Name"
                    onChange={() => setName}
                />
                <input
                    placeholder="Email"
                    onChange={() => setEmail}
                />
                <input
                    placeholder="Phone number"
                    onChange={() => setNumber}
                />
                <input
                    placeholder="Message"
                    onChange={() => setMessage}
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
            <div className="mapContainer">

            </div>
        </div>
    )
}