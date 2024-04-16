import React from "react";
import Link from "next/link";
import { useState } from "react";

type Props = {
    bgColor?: string,
    textColor?: string,
    text: string,
    href: string,
    onClick?: () => void,
    isHover: boolean,
    fontSize?: number | string,
    fontWeight?: string,
    width?: number,
    height?: number,
}

export default function HeaderButton({ bgColor, width, height, textColor, text, href, onClick, isHover, fontSize, fontWeight }: Props) {

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
                backgroundColor: hover && isHover ? 'white' : bgColor,
                height: height ? height : 34,
                width: width ? width : '',
                transition: "background-color 300ms ease-in-out",
                alignContent: 'center',
                borderRadius: 6,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                marginLeft: 10,
                marginRight: 10
            }}>
            <p style={{
                color: hover && isHover ? '' : textColor,
                transition: "color 300ms ease-in-out",
                fontSize: fontSize ? fontSize : 16,
                fontWeight: fontWeight ? fontWeight : 400,
            }}>
                {text}
            </p>
        </Link>
    )
}