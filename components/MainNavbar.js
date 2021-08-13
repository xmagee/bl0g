import Link from 'next/link'

export default function MainNavbar() {
    return (
        <nav className='main-navbar'>
            {[
                { title: 'Home', href: '/' },
                { title: 'Blogs', href: '/blogs' },
                { title: 'Github', href: 'https://github.com/xmagee' },
                { title: 'Resume', href: 'https://alexmagee.com' },
            ].map((link, linkIndex) => (
                <>
                    <Link key={linkIndex} href={link.href}>
                        <a style={{ marginLeft: 5, marginRight: 5 }}>{link.title}</a>
                    </Link>

                    {linkIndex !== 3 && ('|')}
                </>
            ))}
        </nav>
    )
}