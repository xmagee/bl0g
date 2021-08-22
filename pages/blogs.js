import Link from 'next/link'

export default function Blogs() {
    return (
        <>
            <span className='page-title-subtitle-container'>
                <p>
                    <h4>Blogs</h4>
                </p>

                <p>
                    SORT BY [BlogDate] DESC;
                </p>
            </span>

            <ul className='blog-ul'>
                {[
                    { href: '/blog/4', title: 'this blog, now using markdown! 👋😲👋 💯💯💯' },
                    { href: '/blog/3', title: 'documentation, javascript, rust, and more ?' },
                    { href: '/blog/2', title: 'blog improvements, maybe done?' },
                    { href: '/blog/1', title: 'testing' }, 
                ].map((link, linkIndex) => (
                    <li key={linkIndex}>
                        <Link href={link.href}>
                            <a>{link.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}