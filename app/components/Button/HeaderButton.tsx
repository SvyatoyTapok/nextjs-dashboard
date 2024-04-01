import React from "react";
import Link from "next/link";
import { useState } from "react";

type ButtonProps = {
    bgColor?: string,
    textColor?: string,
    text: string,
    href: string,
    onClick: () => void
}

export default function HeaderButton({ bgColor, textColor, text, href, onClick }: ButtonProps) {

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }
    return (
        <>
            <Link href={href}>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onClick()}
                    style={{
                        backgroundColor: hover ? 'grey' : bgColor,
                        height: 42,
                        transition: "all 0.33s",
                        alignContent: 'center',
                        borderRadius: 8,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 20,
                        marginRight: 20
                    }}>
                    <text style={{ color: textColor, fontSize: 18, fontWeight: 500 }}>
                        {text}
                    </text>
                </div>
            </Link>
        </>
    )
}