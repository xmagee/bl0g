import '../styles/globals.css'
import Link from 'next/link'

export default function App({ Component, props }) {
	return (
		<>
			<header style={{
				marginBottom: 15
			}}>
				<h1>./xmagee</h1>
			</header>

			<hr />

			<nav style={{ 
				display: 'flex', 
				flexDirection: 'row', 
				justifyContent: 'center',
			}}>
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

			<hr />

			<Component {...props} />
		</>
	)
}