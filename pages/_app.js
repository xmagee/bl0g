import '../styles/globals.css'
import { MainNavbar } from '../components'

export default function App({ Component, props }) {
	return (
		<>
			<header style={{
				marginBottom: 15
			}}>
				<h1>./xmagee</h1>
			</header>

			<hr />

			<MainNavbar />

			<hr />

			<Component {...props} />
		</>
	)
}