import Link from 'next/link'

export default function Blogs() {
    return (
        <>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
				<h4>Blogs</h4>
			</p>

            <ul style={{
                listStyleType: 'square'
            }}>
                {[ // { link: '', title: '' }
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