import React from "react";
import Link from "next/link";

type ButtonProps = {
    bgColor?: string,
    textColor?: string,
    text: string,
    href: string,
    onClick: () => void
}

export default function HeaderButton({ bgColor, textColor, text, href, onClick }: ButtonProps) {

    const handleMouseEnter = () => {
        console.log('handleMouseEnter')
    }
    const handleMouseLeave = () => {
        console.log('handleMouseLeave')
    }
    return (
        <>
            <Link href={href}>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onClick()}
                    style={{
                        backgroundColor: bgColor,
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