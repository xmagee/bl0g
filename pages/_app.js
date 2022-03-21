//import LogRocket from 'logrocket'
import '../styles/globals.css'
import Link from 'next/link'
import { useState } from 'react'
import { NAV_LINKS } from '../Constants'

//LogRocket.init(process.env.LOGROCKET_KEY)

export default function App({ Component, props, pageProps }) {
	const [ currentPage, setCurrentPage ] = useState('home')
		
	return (
		<>
			<header>
				<h1>
					<a href='/'>./xmagee <span className="current-page-text">--page={String(currentPage.toLowerCase())}</span></a>
				</h1>

				<h2>
					<i>Alex Magee's Homepage</i>
				</h2>

				<nav>
					<ul>
						{NAV_LINKS.map((link, linkIndex) => (
							<li key={linkIndex}>
								{link.target === '_self' ?
									(
										<Link href={link.href}>
											{link.title}
										</Link>
									)
									:
									(
										<a href={link.href} target={link.target}>
											{link.title}
										</a>
									)}
							</li>
						))}
					</ul>
				</nav>
			</header>

			<Component {...pageProps} {...props} setCurrentPage={setCurrentPage} />
		</>
	)
}