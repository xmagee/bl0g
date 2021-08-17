import Image from 'next/image'
import { 
	discord_bot,
	react_gists, 
	resume_site, 
	vscode_theme, 
	js13k2021
} from '../assets'

export default function Home() {
	return (
		<>
			<span className='page-title-subtitle-container'>
				<p>
					<h4>Projects</h4>
				</p>

				<p>
					Very cool. 😎
				</p>
			</span>
			
			{[
				// {
				// 	title: '', 
				// 	descr: '', 
				// 	image: , 
				// 	image_alt: '', 
				// 	source: '', 
				// 	demo: ''
				// },
				{
					title: 'Asteriods13k (js13k 2021)', 
					descr: 'A game that I made for the js13k game jam', 
					image: js13k2021, 
					image_alt: 'Asteriods game made with Javascript.', 
					source: 'https://github.com/xmagee/13k-asteroids', 
					demo: 'https://github.com/xmagee/13k-asteroids'
				},
				{
					title: 'React Gists', 
					descr: 'A simple React webapp that showcases Reactjs code snippets that are cool and/or useful.', 
					image: react_gists, 
					image_alt: 'React Gists project screenshot of main screen.', 
					source: 'https://github.com/xmagee/react-gists', 
					demo: 'https://react-gists.netlify.app/'
				},
				{
					title: 'Discord Bot', 
					descr: 'A Discord server bot made with NodeJS and DiscordJS. It currently has some basic commands, more on the way. Coming soon: audio controls, image searching, fetching news articles.', 
					image: discord_bot, 
					image_alt: 'Discord bot source code screenshot.', 
					source: 'https://github.com/xmagee/disco', 
					demo: 'https://github.com/xmagee/disco'
				},
				{
					title: 'VSCode Theme', 
					descr: 'A dark theme for VSCode and VSCodium.', 
					image: vscode_theme, 
					image_alt: 'Screenshot of vscode theme.', 
					source: 'https://github.com/xmagee/xpcode', 
					demo: 'https://marketplace.visualstudio.com/items?itemName=xmagee.xpcode'
				},
				{
					title: 'Resume Site', 
					descr: 'My official resume, hosted on Github pages.', 
					image: resume_site, 
					image_alt: 'Screenshot of my resume site.', 
					source: 'https://github.com/xmagee/xmagee.github.io', 
					demo: 'https://alexmagee.com/'
				}
			].map((project, pIndex) => (
				<div key={pIndex} className='project-card'>
					<u>
						<b>{project.title}</b>
					</u>
	
					<p>
						{project.descr}
					</p>
	
					<Image 
						src={project.image} 
						alt={project.image_alt} />
					
					<br />
	
					<a href={project.source} 
						target='_blank' 
						rel='noreferrer'>
						Source
					</a> 
					{' | '}
					<a href={project.demo} 
						target='_blank' 
						rel='noreferrer'>
						Demo
					</a>
				</div>
			))}
		</>
	)
}