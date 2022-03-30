//import LogRocket from 'logrocket'
import '../styles/globals.css'
import Link from 'next/link'
import React, { useState } from 'react'
import { NAV_LINKS } from '../Constants'
import Router from "next/router";

//LogRocket.init(process.env.LOGROCKET_KEY)

export default function App({ Component, props, pageProps }) {
	const [ currentPage, setCurrentPage ] = useState('home'),
		[ loading, setLoading ] = useState(false)

	React.useEffect(() => {
		const start = () => {
			console.log("start");
			setLoading(true);
		}

		const end = () => {
			console.log("findished");
			setLoading(false);
		}

		Router.events.on("routeChangeStart", start)
		Router.events.on("routeChangeComplete", end)
		Router.events.on("routeChangeError", end)

		return () => {
			Router.events.off("routeChangeStart", start)
			Router.events.off("routeChangeComplete", end)
			Router.events.off("routeChangeError", end)
		};
	}, []);


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

			{loading ? ("Loading...") : (<Component {...pageProps} {...props} setCurrentPage={setCurrentPage} /> )}
		</>
	)
}