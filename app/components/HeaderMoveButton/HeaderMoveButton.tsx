"use client"
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
    marginTop?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,
}

export default function HeaderButton({ bgColor, paddingLeft, paddingRight, paddingTop, paddingBottom, marginTop, width, height, textColor, text, href, onClick, fontSize, fontWeight }: Props) {

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
                marginTop: marginTop ? marginTop : '',
                backgroundColor: bgColor,
                height: height ? height : 34,
                width: width ? width : '',
                alignContent: 'center',
                justifyContent: 'center',
                transition: 'transform 250ms ease-in-out',
                borderRadius: 6,
                paddingLeft: paddingLeft ? paddingLeft : 20,
                paddingRight: paddingRight ? paddingRight : 20,
                paddingTop: paddingTop ? paddingTop : 20,
                paddingBottom: paddingBottom ? paddingBottom : 20,
                marginLeft: 10,
                marginRight: 10,
                transform: hover ? 'translateY(-6%)' : 'translateY(0%)'
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