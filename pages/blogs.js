import Link from 'next/link'

export default function Blogs() {
    return (
        <ul style={{
            listStyleType: 'square'
        }}>
            {[
                { href: '/blog/1', title: 'testing' }, 
                // { link: '', title: '' }
            ].map((link, linkIndex) => (
                <li key={linkIndex}>
                    <Link href={link.href}>
                        <a>{link.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}