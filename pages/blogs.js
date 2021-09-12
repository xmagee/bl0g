import Link from 'next/link'

export default function Blogs() {
    const blog_links = [
        { href: '/blog/7', title: '🌐 checkin\' out micro api stuff' }, 
        { href: '/blog/6', title: 'another month, another resume' },
        { href: '/blog/5', title: 'elementaryOS 6 is very cool' }, 
        { href: '/blog/4', title: 'this blog, now using markdown! 👋😲👋 💯💯💯' },
        { href: '/blog/3', title: 'documentation, javascript, rust, and more ?' },
        { href: '/blog/2', title: 'blog improvements, maybe done?' },
        { href: '/blog/1', title: 'testing' }, 
    ]
    
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
                {blog_links.map((link, linkIndex) => (
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