import Link from 'next/link'

export default function Blogs() {
    return (
        <>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
				<h4>Blogs</h4> <br />    
			</p>

            <p style={{ display: 'flex', justifyContent: 'center' }}>
                SORT BY [BlogDate] DESC;
            </p>

            <ul style={{
                listStyleType: 'square'
            }}>
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