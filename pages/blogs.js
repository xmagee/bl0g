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
                {[ // { link: '', title: '' }
                    { href: '/blog/1', title: 'testing' }, 
                ].map((link, linkIndex) => (
                    <li key={linkIndex}>
                        <Link href={link.href}>
                            <a>blog # {linkIndex + 1} : {link.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}