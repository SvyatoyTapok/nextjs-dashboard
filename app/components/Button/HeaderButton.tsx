import React from "react";
import Link from "next/link";
import { useState } from "react";

type Props = {
    bgColor?: string,
    textColor?: string,
    text: string,
    href: string,
    onClick?: () => void
}

export default function HeaderButton({ bgColor, textColor, text, href, onClick }: Props) {

    const [hover, setHover] = useState(false)
    const handleMouseEnter = () => { setHover(true) }
    const handleMouseLeave = () => { setHover(false) }

    return (
        <Link
            onClick={() => onClick()}
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: hover ? 'white' : bgColor,
                height: 34,
                transition: "all 400ms ease",
                alignContent: 'center',
                borderRadius: 6,
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: 10,
                marginRight: 10
            }}>
            <text style={{
                color: hover ? '' : textColor,
                transition: "all 400ms ease",
                fontSize: 16,
                fontWeight: 400
            }}>
                {text}
            </text>
        </Link>
    )
}