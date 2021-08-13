import '../styles/globals.css'
import { MainNavbar } from '../components'

export default function App({ Component, props }) {
	return (
		<>
			<header className='site-header'>
				<h1>./xmagee</h1>
			</header>

			<MainNavbar />

			<Component {...props} />
		</>
	)
}