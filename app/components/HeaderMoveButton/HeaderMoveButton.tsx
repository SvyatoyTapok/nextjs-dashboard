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
    marginLeft?: number,
    marginRight?: number,
    marginBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,

}

export default function HeaderMoveButton({
    bgColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    height,
    textColor,
    text,
    href,
    onClick,
    fontSize,
    fontWeight
}: Props) {

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
                display: 'flex',
                marginTop: marginTop ? marginTop : '',
                backgroundColor: bgColor ? bgColor : 'lightblue',
                height: height ? height : '',
                width: width ? width : '',
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                textAlignLast: 'center',
                alignItems: 'center',
                transition: 'transform 250ms ease-in-out',
                borderRadius: 6,
                paddingLeft: paddingLeft ? paddingLeft : 0,
                paddingRight: paddingRight ? paddingRight : 0,
                paddingTop: paddingTop ? paddingTop : 0,
                paddingBottom: paddingBottom ? paddingBottom : 0,
                marginLeft: marginLeft ? marginLeft : 0,
                marginRight: marginRight ? marginRight : 0,
                marginBottom: marginBottom ? marginBottom : 0,
                transform: hover ? 'translateY(-6%)' : 'translateY(0%)'
            }}>
            <p style={{
                color: textColor ? textColor : 'white',
                fontSize: fontSize ? fontSize : 18,
                fontWeight: fontWeight ? fontWeight : 500,
            }}>
                {text}
            </p>
        </Link>
    )
}