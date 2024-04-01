import Link from 'next/link'

type Props = {
    href: string
}

export default function HeaderLogo({ href }: Props) {
    return (
        <Link href={href}>
            <text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Digian</text>
        </Link>
    )
}