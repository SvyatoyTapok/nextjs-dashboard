import React from "react";
import Link from "next/link";
import { useState } from "react";

type Props = {
    bgColor?: string,
    textColor?: string,
    text: string,
    href: string,
    onClick?: () => void,
    fontSize?: number | string,
    fontWeight?: string,
    width?: number,
    height?: number,
}

export default function HeaderButton({ bgColor, width, height, textColor, text, href, onClick, fontSize, fontWeight }: Props) {

    const [hover, setHover] = useState(false)
    const handleMouseEnter = () => { setHover(true) }
    const handleMouseLeave = () => { setHover(false) }

    return (
        <Link
            onClick={onClick ? () => onClick() : undefined}
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: bgColor,
                height: height ? height : 34,
                width: width ? width : '',
                alignContent: 'center',
                transition: 'transform 200ms ease-in-out',
                borderRadius: 6,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                marginLeft: 10,
                marginRight: 10,
                transform: hover ? 'translateY(-8%)' : 'translateY(0%)'
            }}>
            <text style={{
                color: textColor,
                fontSize: fontSize ? fontSize : 16,
                fontWeight: fontWeight ? fontWeight : 400,
            }}>
                {text}
            </text>
        </Link>
    )
}